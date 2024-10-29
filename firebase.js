import {initializeApp} from "firebase/app";
import{getFirestore}from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig ={
    apiKey: "AIzaSyC_a2eHo4avOp6XD1FAOUF0ISQj3CyJ62E",
    authDomain: "apprefeicaoleonardo.firebaseapp.com",
    projectId: "apprefeicaoleonardo",
    storageBucket: "apprefeicaoleonardo.appspot.com",
    messagingSenderId: "69589703986",
    appId: "1:69589703986:web:624d9e5b41d3c948218b2b"
}

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app); 
export { signInWithEmailAndPassword, onAuthStateChanged };