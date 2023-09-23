// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth"; // Import the auth function

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq-vsYmecNEPVrsoYOwpBcF035z2-wEOk",
  authDomain: "adan-b666d.firebaseapp.com",
  projectId: "adan-b666d",
  storageBucket: "adan-b666d.appspot.com",
  messagingSenderId: "266522717367",
  appId: "1:266522717367:web:fc337491cc3ebc251ab132",
  measurementId: "G-YXPVBBRPNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // Use getAuth to get the auth function from Firebase
export const googleAuthProvider = new GoogleAuthProvider();