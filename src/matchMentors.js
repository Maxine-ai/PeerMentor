import { db } from "./firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

// Match mentors based on mentee preferences
export async function matchMentorsForMentee(menteeProfile) {
  const mentorsSnapshot = await getDocs(collection(db, "mentors"));
  const mentors = mentorsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  const compatible = mentors
    .map((mentor) => {
      let score = 0;
      if (mentor.expertise.includes(menteeProfile.interestArea)) score += 40;
      if (mentor.availability.includes(menteeProfile.preferredTime)) score += 30;
      if (
        mentor.bio &&
        menteeProfile.goals &&
        mentor.bio.toLowerCase().includes(menteeProfile.goals.toLowerCase())
      ) score += 30;
      return { ...mentor, score };
    })
    .filter((m) => m.score >= 50)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3); // Top 3 matches

  return compatible;
}

// Create pairing request
export async function createPairing(mentorId, menteeId) {
  await addDoc(collection(db, "pairings"), {
    mentorId,
    menteeId,
    status: "pending",
    progress: "not started",
    createdAt: new Date().toISOString()
  });
}

