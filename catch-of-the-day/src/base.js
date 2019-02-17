import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBog-8q2nuSEqqdk85YvzYNu1qtS5yXOyE",
  authDomain: "catch-of-the-day-willibaur-1.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-willibaur-1.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;