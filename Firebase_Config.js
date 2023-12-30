import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/database';
import admin from 'firebase-admin';
import serviceAccount from '../AuthenticationServiceAccount';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCUUhQTYn-TskOefWIN9_kiuctfBN3L550",
  authDomain: "onlinelibrary-10fab.firebaseapp.com",
  databaseURL: "https://onlinelibrary-10fab-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "onlinelibrary-10fab",
  storageBucket: "onlinelibrary-10fab.appspot.com",
  messagingSenderId: "1031850424810",
  appId: "1:1031850424810:web:022e346eb89c09f0de5a93",
  measurementId: "G-D9HWQP3WMW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };

export const db = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const functions = firebase.functions();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://onlinelibrary-10fab.firebaseio.com',
});

const db_admin = admin.database();

export { db_admin };

