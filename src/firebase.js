// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCn0QbIgOm7Cpvol0WuD95dFmx4PdUg4hs",
  authDomain: "peermentor-66bf8.firebaseapp.com",
  projectId: "peermentor-66bf8",
  storageBucket: "peermentor-66bf8.appspot.com", // fixed typo: .app → .appspot.com
  messagingSenderId: "646282324155",
  appId: "1:646282324155:web:1481c9f4594e2a9f7a219e",
  measurementId: "G-95EPMVNRDR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };



