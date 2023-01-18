import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCApZr2j43dzbDmzDVvRcIHDolG-URLZkM",
    authDomain: "clone-d52c6.firebaseapp.com",
    projectId: "clone-d52c6",
    storageBucket: "clone-d52c6.appspot.com",
    messagingSenderId: "1055347712320",
    appId: "1:1055347712320:web:d8414477d80a4f72b79aa5",
    measurementId: "G-ZML850888Z"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };