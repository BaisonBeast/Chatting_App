// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAGj8a-AhqnETG1jHQUzSeWxwzHmpgEo0A",
  authDomain: "whatsapp-8966f.firebaseapp.com",
  projectId: "whatsapp-8966f",
  storageBucket: "whatsapp-8966f.appspot.com",
  messagingSenderId: "826469365665",
  appId: "1:826469365665:web:abaa40ea08748baa6fbde0",
  measurementId: "G-M01F5Z0QTY"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db= firebase.firestore();
const auth= firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;