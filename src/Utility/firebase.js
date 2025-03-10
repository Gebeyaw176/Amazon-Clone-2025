import firebase from "firebase/compat/app";
//auth
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN0OtqSknu4TFOgNdyDsVq5iOBOcw3vu8",
  authDomain: "e-clone-2025.firebaseapp.com",
  projectId: "e-clone-2025",
  storageBucket: "e-clone-2025.firebasestorage.app",
  messagingSenderId: "271857506762",
  appId: "1:271857506762:web:795940942f36f8547f9733",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
