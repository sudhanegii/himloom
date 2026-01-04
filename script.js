// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDC3WovgcwDDTP2yaquLliagOGYYe61HUK",
  authDomain: "himloom.firebaseapp.com",
  projectId: "himloom",
  storageBucket: "himloom.appspot.com",
  messagingSenderId: "295514219560",
  appId: "1:295514219560:web:060a6c6fa8eb0224411d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Register user
document.getElementById("registerBtn").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  if (!email || !password) {
    alert("Email and password required");
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Registration successful!");
      console.log("User:", userCredential.user.email);
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(error.message);
      
    });
    
});
