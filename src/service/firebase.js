// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_pBNNPgrddOaLYkRx4TaQJcXew2tSMKg",
  authDomain: "projeto-final-react-pretalab.firebaseapp.com",
  projectId: "projeto-final-react-pretalab",
  storageBucket: "projeto-final-react-pretalab.appspot.com",
  messagingSenderId: "1045555358389",
  appId: "1:1045555358389:web:6478f47cab89dc2f596cfc",
  databaseURL:
    "https://projeto-final-react-pretalab-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const database = getDatabase();

export { database };
