import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDo8jMiLfaCrfFYjWqz77Bll4N6Iqebh-U",
  authDomain: "todo-9a908.firebaseapp.com",
  projectId: "todo-9a908",
  storageBucket: "todo-9a908.appspot.com",
  messagingSenderId: "1084728882829",
  appId: "1:1084728882829:web:68e8c75ef70138262614c4"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
