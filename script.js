// ================= FIREBASE INIT =================
const firebaseConfig = {
  apiKey: "AIzaSyDC3WovgcwDDTP2yaquLiiagOGYYe6iHUk",
  authDomain: "himloom.firebaseapp.com",
  projectId: "himloom",
  storageBucket: "himloom.appspot.com",
  messagingSenderId: "295514219560",
  appId: "1:295514219560:web:060a6c6cfa8eb0e224411d"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

// ================= REGISTER =================
function register() {
  const name = document.getElementById("name")?.value;
  const email = document.getElementById("email")?.value;
  const password = document.getElementById("password")?.value;
  const role = document.getElementById("role")?.value;

  if (!name || !email || !password || !role) {
    alert("Please fill all fields");
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      localStorage.setItem(`role_${email}`, role);
      localStorage.setItem(`name_${email}`, name);
      window.location.href = "login.html";
    })
    .catch(err => alert(err.message));
}

// ================= LOGIN =================
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          const role = localStorage.getItem(`role_${email}`);

          if (role === "buyer") {
            window.location.href = "buyer.html";
          } else if (role === "seller") {
            window.location.href = "seller.html";
          } else {
            alert("Role missing. Please register again.");
          }
        })
        .catch(err => alert(err.message));
    });
  }
});

// ================= LOGOUT (FIXED) =================
document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "logoutBtn") {
    auth.signOut().then(() => {
      window.location.href = "index.html?logout=success";
    });
  }
});

// ================= AUTH PROTECTION =================
auth.onAuthStateChanged(user => {
  const path = window.location.pathname;

  if (!user && (path.includes("buyer") || path.includes("seller"))) {
    window.location.href = "login.html";
  }
});