// ✅ OnboardingForm.js (Save data under logged-in user's UID)

import React, { useState } from "react";
import { db, auth } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function OnboardingForm() {
  const [formData, setFormData] = useState({
    name: "",
    role: "mentee",
    interests: "",
    goals: "",
    availability: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("User not authenticated");

      const uid = user.uid;
      await setDoc(doc(db, "users", uid), formData);

      alert("Form submitted successfully ✅");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Error saving form 😢");
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Onboarding Form 📝</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full p-2 border"
          required
        />
        <select
          name="role"
          onChange={handleChange}
          className="w-full p-2 border"
        >
          <option value="mentee">Mentee</option>
          <option value="mentor">Mentor</option>
        </select>
        <input
          name="interests"
          placeholder="Interests (comma-separated)"
          onChange={handleChange}
          className="w-full p-2 border"
        />
        <input
          name="goals"
          placeholder="Learning Goals"
          onChange={handleChange}
          className="w-full p-2 border"
        />
        <input
          name="availability"
          placeholder="Available Time (e.g. Weekends)"
          onChange={handleChange}
          className="w-full p-2 border"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default OnboardingForm;




