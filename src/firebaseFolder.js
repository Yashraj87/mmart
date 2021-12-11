import  firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCsnJ1yjGEQ2uepoBf6fR0c4X62bIP8XIE",
  authDomain: "yash-mmart1.firebaseapp.com",
  projectId: "yash-mmart1",
  storageBucket: "yash-mmart1.appspot.com",
  messagingSenderId: "63645185849",
  appId: "1:63645185849:web:c1891072bbcac513361ae8",
  measurementId: "G-QQJJE9X7Z1"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {auth};



