import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7b1EDjVufGINhpqDqKxgL_mY2qlVK79A",
  authDomain: "kidkid-tv-6e1d5.firebaseapp.com",
  projectId: "kidkid-tv-6e1d5",
  storageBucket: "kidkid-tv-6e1d5.appspot.com",
  messagingSenderId: "840401054608",
  appId: "1:840401054608:web:bdb6fe9a47a139e9d3a115",
  measurementId: "G-PJBY5FVJRW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
