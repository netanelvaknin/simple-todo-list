import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYoJUuUYFG3FI3nmwrnEwmNJQhDEkGRIE",
  authDomain: "simple-todo-list-f3dc3.firebaseapp.com",
  databaseURL: "https://simple-todo-list-f3dc3.firebaseio.com",
  projectId: "simple-todo-list-f3dc3",
  storageBucket: "simple-todo-list-f3dc3.appspot.com",
  messagingSenderId: "18921779397",
  appId: "1:18921779397:web:a4a48e43ed3cb038ccc0ac",
  measurementId: "G-2P1V9WMQQ3",
};

// Initialize database
firebase.initializeApp(firebaseConfig);

export default firebase.database();