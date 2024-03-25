import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
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
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};