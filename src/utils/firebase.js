// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMkb0egv35sO-DRd-ruB8xqqcYt81m7pQ",
  authDomain: "netflix-gpt-4484d.firebaseapp.com",
  projectId: "netflix-gpt-4484d",
  storageBucket: "netflix-gpt-4484d.appspot.com",
  messagingSenderId: "300954784046",
  appId: "1:300954784046:web:d721df16595d7a410eaabf",
  measurementId: "G-P27H2EDP7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()