import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

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
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
} 

const auth = getAuth();
const storage = getStorage();

export { analytics };
export { auth };
export { storage };
export { getDatabase };
export { getStorage };
export {initializeApp};