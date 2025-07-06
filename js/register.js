// js/register.js
import { auth, db } from './firebase.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { setDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Multi-step logic
let currentStep = 0;
const steps = document.querySelectorAll(".form-step");

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });
}

window.nextStep = () => {
  currentStep++;
  showStep(currentStep);
};

window.prevStep = () => {
  currentStep--;
  showStep(currentStep);
};

// Handle registration
document.getElementById("registrationForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;
  const accountType = document.getElementById("accountType").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user profile in Firestore
    await setDoc(doc(db, "users", user.uid), {
      fullName,
      email,
      phone,
      accountType,
      derivToken: null // will be set later
    });

    document.getElementById("status").innerText = "✅ Registered successfully! Redirecting...";
    setTimeout(() => {
      window.location.href = "connect-deriv.html"; // next step: connect deriv
    }, 1500);
  } catch (error) {
    console.error(error);
    document.getElementById("status").innerText = "❌ " + error.message;
  }
});

