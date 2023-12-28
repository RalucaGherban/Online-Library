import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';

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
