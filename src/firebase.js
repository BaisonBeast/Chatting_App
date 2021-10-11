// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwvl1Jx7UByiG7Pa18MTkzD1hUfW4_8rQ",
  authDomain: "whatsappclone-c4bd1.firebaseapp.com",
  projectId: "whatsappclone-c4bd1",
  storageBucket: "whatsappclone-c4bd1.appspot.com",
  messagingSenderId: "829198860501",
  appId: "1:829198860501:web:7b3cf3d14545310505e25c",
  measurementId: "G-E3YKWK1XL3"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db= firebase.firestore();
const auth= firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
