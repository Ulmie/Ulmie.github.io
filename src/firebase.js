import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4d9K3MEsMjq3VM2ZgrIsM-H9ZYg5n6ec",
  authDomain: "telegram-clone-7bf5e.firebaseapp.com",
  projectId: "telegram-clone-7bf5e",
  storageBucket: "telegram-clone-7bf5e.appspot.com",
  messagingSenderId: "948832121379",
  appId: "1:948832121379:web:37036e84662852b5107796",
  measurementId: "G-N0BMXGDQ06"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};
export default db;