// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXJZEc_dA0oEl_ilPQwAcQQNzSnakhloU",
  authDomain: "netflixgpt-2ed89.firebaseapp.com",
  projectId: "netflixgpt-2ed89",
  storageBucket: "netflixgpt-2ed89.appspot.com",
  messagingSenderId: "322100553348",
  appId: "1:322100553348:web:f4bde91d14b0b69f0e44d1",
  measurementId: "G-1VHRWJYVEV"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();