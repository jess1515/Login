  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

  

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDQ-exwRAOYwLAfEhVirZtouzzS202HChs",
    authDomain: "login-1487c.firebaseapp.com",
    projectId: "login-1487c",
    storageBucket: "login-1487c.appspot.com",
    messagingSenderId: "789387011705",
    appId: "1:789387011705:web:7d864405716d2cf90b96a8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en'
  const provider = new GoogleAuthProvider();

  const googleLogin = document.getElementById("google-login-btn");
  googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
     .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href= "../logged.html";

   
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  });
