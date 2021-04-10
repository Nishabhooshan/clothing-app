import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyATshYCXXa40py3XbLIpRXj9E56SKmIvBs",
  authDomain: "nisha-ed421.firebaseapp.com",
  projectId: "nisha-ed421",
  storageBucket: "nisha-ed421.appspot.com",
  messagingSenderId: "749999359124",
  appId: "1:749999359124:web:7fa4b838df4532b5d66081",
  measurementId: "G-ZTCCKK3Z2R",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
