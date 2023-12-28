import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';
import admin from 'firebase-admin';
import serviceAccount from '../AuthenticationServiceAccount'

const firebaseConfigure = {
    apiKey: 'AIzaSyCUUhQTYn-TskOefWIN9_kiuctfBN3L550',
    authDomain: 'onlinelibrary-10fab.firebaseapp.com',
    projectId: 'onlinelibrary-10fab',
};

firebase.initializeApp(firebaseConfigure);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const functions = firebase.functions();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-project-id.firebaseio.com',
});

const db_admin = admin.database();

export { db_admin };