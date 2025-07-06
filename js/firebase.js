// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4Bvyn_LAe2i4a9TtDUK-HpvFarvyic84",
  authDomain: "blue-trade-4277e.firebaseapp.com",
  projectId: "blue-trade-4277e",
  storageBucket: "blue-trade-4277e.appspot.com", // ✅ fixed from 'firebasestorage.app'
  messagingSenderId: "837466799005",
  appId: "1:837466799005:web:bd04661181e44c5a0c0d74",
  measurementId: "G-ERGZZ3D05C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

