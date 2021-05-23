import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWBU0vdHgVJfP3z59JFG-Y_FDCZWn0NpE",
  authDomain: "amazn-clone-v2.firebaseapp.com",
  projectId: "amazn-clone-v2",
  storageBucket: "amazn-clone-v2.appspot.com",
  messagingSenderId: "602786349699",
  appId: "1:602786349699:web:d6251ee6039410727e51b6",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
