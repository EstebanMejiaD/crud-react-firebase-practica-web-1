import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZBXcJDw-4q6RHPSN6kQOe34sI6J-wKYA",
  authDomain: "crud-react-firebase-19030.firebaseapp.com",
  projectId: "crud-react-firebase-19030",
  storageBucket: "crud-react-firebase-19030.appspot.com",
  messagingSenderId: "197331611633",
  appId: "1:197331611633:web:fd171aeb9e6a4ebb8c5e50"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}