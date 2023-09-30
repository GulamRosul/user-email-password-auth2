// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD81ecuheOvAsts19lY4Jzg65VbG05uM0k",
  authDomain: "user-email-password-auth-5aca3.firebaseapp.com",
  projectId: "user-email-password-auth-5aca3",
  storageBucket: "user-email-password-auth-5aca3.appspot.com",
  messagingSenderId: "354956724016",
  appId: "1:354956724016:web:dd228712b280f886b3aaf5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
