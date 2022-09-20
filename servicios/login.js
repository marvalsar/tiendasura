import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"

  
const app = initializeapp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

sighUp.addEventListener('click', (e) =>{

let username = document.getElementById('username').value;
let password = document.getElementById('password').value;

createUseWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    alert('user created!');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('errorMessage');
  });
});
