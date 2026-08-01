import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6dmP4utokyE2UztJMrR_IWGgRZGjU_3I",
  authDomain: "trillionaires-ai-portal.firebaseapp.com",
  projectId: "trillionaires-ai-portal",
  storageBucket: "trillionaires-ai-portal.firebasestorage.app",
  messagingSenderId: "644958873864",
  appId: "1:644958873864:web:3e8b967115d9ac593ba4bd"
};

// Initialize Firebase (only if not already initialized)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
