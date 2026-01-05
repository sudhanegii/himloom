// Firebase configuration (ONLY ONCE)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC3WovgcwDDTP2yaquLiiagOGYYe6iHUk",
  authDomain: "himloom.firebaseapp.com",
  projectId: "himloom",
  storageBucket: "himloom.firebasestorage.app",
  messagingSenderId: "295514219560",
  appId: "1:295514219560:web:060a6c6cfa8eb0e224411d",
  measurementId: "G-EXK7P35NWP"
};


// Initialize Firebase (ONLY ONCE)
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();

/* ================= REGISTER ================= */
function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Registration successful!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

/* ================= LOGIN ================= */
document.getElementById("registerBtn")?.addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Registration successful!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});