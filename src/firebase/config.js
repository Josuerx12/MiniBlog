// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASC3wU19_GDoV5JBozxdQg_5E_xH1dymY",
  authDomain: "miniblog-b7e77.firebaseapp.com",
  projectId: "miniblog-b7e77",
  storageBucket: "miniblog-b7e77.appspot.com",
  messagingSenderId: "1083090721852",
  appId: "1:1083090721852:web:bf414340cc2c2fc549b739",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
