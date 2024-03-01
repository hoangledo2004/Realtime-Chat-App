// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzh7nKqkzCjw5p7ZYNhxvSt0SPqBqR2d8",
  authDomain: "realtime-chatapp-170ac.firebaseapp.com",
  projectId: "realtime-chatapp-170ac",
  storageBucket: "realtime-chatapp-170ac.appspot.com",
  messagingSenderId: "110529570237",
  appId: "1:110529570237:web:6f36e0ecbdbc9542f95ed4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// authentication
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();