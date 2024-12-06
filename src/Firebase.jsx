import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeNvD5mJL3QeTduwbF8Sb4nLlP9latcVE",
  authDomain: "project-20f85.firebaseapp.com",
  projectId: "project-20f85",
  storageBucket: "project-20f85.firebasestorage.app",
  messagingSenderId: "463096490352",
  appId: "1:463096490352:web:1875f18192fe8b16de47b5",
  measurementId: "G-7BPWF4SPTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// getauth for authentication
export const auth = getAuth(app);
export const database = getFirestore(app);
// this for like login with google , facebook etc
export const provider = new GoogleAuthProvider(app);