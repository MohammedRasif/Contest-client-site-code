// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ1e96_3S8uGPDJXPqaeZTc4XwIfqfa5g",
  authDomain: "moviez-bc050.firebaseapp.com",
  projectId: "moviez-bc050",
  storageBucket: "moviez-bc050.appspot.com",
  messagingSenderId: "23974401353",
  appId: "1:23974401353:web:f7af6eeab42eab1e9ef698"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app 