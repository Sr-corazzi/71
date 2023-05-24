import firebase from "firebase";
require("@firebase/firestore");


  const firebaseConfig = {
    apiKey: "AIzaSyD6ka7EpyLrzmAyyHc3xuwFMJGe859ZRds",
    authDomain: "ciclismo-do-pneu-furado.firebaseapp.com",
    projectId: "ciclismo-do-pneu-furado",
    storageBucket: "ciclismo-do-pneu-furado.appspot.com",
    messagingSenderId: "436908682054",
    appId: "1:436908682054:web:5d7545a1dd92b08d845347",
    measurementId: "G-BNPNWM3VWP"
  };
  


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
