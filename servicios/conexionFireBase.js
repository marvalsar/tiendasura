// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGYZqKsNrYm8VAIr9qPXb72UaU8CHyNFU",
  authDomain: "tiendasuralmm.firebaseapp.com",
  projectId: "tiendasuralmm",
  storageBucket: "tiendasuralmm.appspot.com",
  messagingSenderId: "676449344428",
  appId: "1:676449344428:web:30278980ee39ac775eb809",
  measurementId: "G-T2L88V9JB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);