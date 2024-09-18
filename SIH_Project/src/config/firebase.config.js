import {getApp, getApps, initializeApp} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTye5wJB3Gj9XTZcEpMOE1XdyVI10JDZw",
    authDomain: "sih-24-email-verification.firebaseapp.com",
    projectId: "sih-24-email-verification",
    storageBucket: "sih-24-email-verification.appspot.com",
    messagingSenderId: "683606333780",
    appId: "1:683606333780:web:28b75ea4b510307ea410c1",
    measurementId: "G-CBY6Z8XKRY",
  };

  const app=getApps.length> 0 ? getApp() : initializeApp(firebaseConfig);
  const auth=getAuth(app);
  export {auth};