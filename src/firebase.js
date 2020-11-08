import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-CsMRLf1Ss1cteGxKop4c2bz_sp6ZWj4",
  authDomain: "challenge-be76e.firebaseapp.com",
  databaseURL: "https://challenge-be76e.firebaseio.com",
  projectId: "challenge-be76e",
  storageBucket: "challenge-be76e.appspot.com",
  messagingSenderId: "214463792327",
  appId: "1:214463792327:web:399ddbf099405e968ceae2",
  measurementId: "G-LF9DQRWS5S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
