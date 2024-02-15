import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALEkcttW1wmC006rlYe6zsFTpW1VPhCHw",
  authDomain: "vue-blog-system-4e9db.firebaseapp.com",
  projectId: "vue-blog-system-4e9db",
  storageBucket: "vue-blog-system-4e9db.appspot.com",
  messagingSenderId: "1026744351144",
  appId: "1:1026744351144:web:0a8f428c69c227dca5c59d",
};

// init firebase
firebase.initializeApp(firebaseConfig);
// database setup
let db = firebase.firestore();

export { db };
