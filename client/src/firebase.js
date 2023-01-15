// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6ZLCf-DN1JajLUXdGY3lJ-aqle5BTc2I",
  authDomain: "video-bc780.firebaseapp.com",
  projectId: "video-bc780",
  storageBucket: "video-bc780.appspot.com",
  messagingSenderId: "984394265825",
  appId: "1:984394265825:web:929cbd349689a1627273a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth() 
export const provider = new GoogleAuthProvider()

export default app