import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const StartFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBvX-_52EIidPTed0n9-XiRrRtsx5x6wrc",
    authDomain: "soloti2.firebaseapp.com",
    databaseURL: "https://soloti2-default-rtdb.firebaseio.com",
    projectId: "soloti2",
    storageBucket: "soloti2.appspot.com",
    messagingSenderId: "454263549916",
    appId: "1:454263549916:web:fd6d56b465be36324b6919"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export default StartFirebase;