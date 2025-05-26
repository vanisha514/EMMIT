// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCmKGD3Gzbr3mbbK8YF0qBARfWOvFyqJe8',
  authDomain: 'emmit-d246e.firebaseapp.com',
  projectId: 'emmit-d246e',
  storageBucket: "emmit-d246e.firebasestorage.app",
  messagingSenderId: "154220408764",
  appId: '1:154220408764:web:a6d067959e0df77ca985b9',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export { auth, googleProvider, facebookProvider, twitterProvider };
