import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCbdoaX_x_0El2pswZhG5uye6s1Z7iNddw",
    authDomain: "twitterklooni.firebaseapp.com",
    databaseURL: "https://twitterklooni-default-rtdb.firebaseio.com",
    projectId: "twitterklooni",
    storageBucket: "twitterklooni.appspot.com",
    messagingSenderId: "82773246113",
    appId: "1:82773246113:web:7e1ce3e6c8ea45aefef0e0",
    measurementId: "G-61BHK063DD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;