import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBKa3hJfG57J6HvwyXdr2jNjbSclpYU4Ec",
    authDomain: "react-test-project-9f5fc.firebaseapp.com",
    databaseURL: "https://react-test-project-9f5fc.firebaseio.com",
    projectId: "react-test-project-9f5fc",
    storageBucket: "react-test-project-9f5fc.appspot.com",
    messagingSenderId: "350138779673",
    appId: "1:350138779673:web:a1e3e4b0540c4bcae3c288"
};

export const initializedFirebase = firebase.initializeApp(firebaseConfig);
export const database = firebase.database();