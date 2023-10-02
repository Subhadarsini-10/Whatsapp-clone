// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkEQYZBdAbHdQOzdvQVX-FZ8ywsPcQLKg",
  authDomain: "whatsapp-clone-bbd84.firebaseapp.com",
  projectId: "whatsapp-clone-bbd84",
  storageBucket: "whatsapp-clone-bbd84.appspot.com",
  messagingSenderId: "405286849315",
  appId: "1:405286849315:web:e8a1d1faeec6e1bfe7da96",
  measurementId: "G-S2RZ9JVW6K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
// export default db;
