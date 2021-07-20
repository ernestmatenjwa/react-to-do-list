import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBH8atpBWOwvhnxoWYMp1PNB68lf7h-YFg",
  authDomain: "to-do-list-app-4d07d.firebaseapp.com",
  projectId: "to-do-list-app-4d07d",
  storageBucket: "to-do-list-app-4d07d.appspot.com",
  messagingSenderId: "766922100780",
  appId: "1:766922100780:web:9b14737aede020d1b94189",
  measurementId: "G-DQ2CFWV7Q9"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

//export default fire;