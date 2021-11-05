import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA0noEADx9K8dEd6wolQHvBMv-l4KKhE3c",
    authDomain: "react-app-journal-17d0a.firebaseapp.com",
    projectId: "react-app-journal-17d0a",
    storageBucket: "react-app-journal-17d0a.appspot.com",
    messagingSenderId: "991033802136",
    appId: "1:991033802136:web:f1a22ab6a53d29e0d27fed"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
  const authGoogle = new GoogleAuthProvider();

  export {
      db,
      authGoogle
  }