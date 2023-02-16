// firebase config key

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDZ-bTbFxA08-o4n85tnS4A9u_Z6mpAkN4",
    authDomain: "e-scooter-41f97.firebaseapp.com",
    projectId: "e-scooter-41f97",
    storageBucket: "e-scooter-41f97.appspot.com",
    messagingSenderId: "51916468818",
    appId: "1:51916468818:web:d6e1080c808aaf122ce58b",
    measurementId: "G-GY75P1GQYQ"
}


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };