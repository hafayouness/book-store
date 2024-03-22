// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmmMKS8-Geg84705bKMy7ZCYwQOZWPbSI",
  authDomain: "mern-book-inventory-e2a7a.firebaseapp.com",
  projectId: "mern-book-inventory-e2a7a",
  storageBucket: "mern-book-inventory-e2a7a.appspot.com",
  messagingSenderId: "262310542888",
  appId: "1:262310542888:web:4c39d099b6786e7414ff1d",
  measurementId: "G-09DQYB72TX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
