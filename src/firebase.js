import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyDTUaBMeTP3CLkPOcft2Rjok5VgSG-Y7II",
  authDomain: "whatsapp-clone-d1ce4.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-d1ce4-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-d1ce4",
  storageBucket: "whatsapp-clone-d1ce4.appspot.com",
  messagingSenderId: "311482225322",
  appId: "1:311482225322:web:47a79338fbd9860b2ab6d3",
  measurementId: "G-2ZSM0EWY89"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
