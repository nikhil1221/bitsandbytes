import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDOTQyJXGJoHhMXwesi2CSFGNMRMqIK0YY",
    authDomain: "blogbitsandbytes.firebaseapp.com",
    databaseURL: "https://blogbitsandbytes.firebaseio.com",
    projectId: "blogbitsandbytes",
    storageBucket: "blogbitsandbytes.appspot.com",
    messagingSenderId: "501709774452",
    appId: "1:501709774452:web:04e90f6fa1731807fabb21",
    measurementId: "G-EQT3ST6KT4"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;