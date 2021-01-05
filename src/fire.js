import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAPEod8PgeKNTgVyhr7Ue2YNtUSSF-Y2hI",
    authDomain: "react-firebase-bca6e.firebaseapp.com",
    projectId: "react-firebase-bca6e",
    storageBucket: "react-firebase-bca6e.appspot.com",
    messagingSenderId: "15899537591",
    appId: "1:15899537591:web:bf02542391b6e29eb65d32"
};
  
const fire = firebase.initializeApp(firebaseConfig);

export default fire;