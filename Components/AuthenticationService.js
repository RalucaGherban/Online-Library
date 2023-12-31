import { auth } from '../Firebase_Config.js'
import { signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase } from 'firebase/auth';

export const signInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPasswordFirebase(auth, email, password);
        console.log('Signed in successfully.');
    } catch (error){
        console.error ('Error signing in: ', error.message);
    }
};

export const signOut = async () => {
    try {
        await auth.signOut();
        console.log('Signed out successfully.');
    } catch (error){
        console.error ('Error signing out: ', error.message);
    }
};

export const signInWithGoogle = async (email, password) => {
    try {
        await auth.signInWithGoogle(email, password);
        console.log('Signed in successfully.');
    }catch (error){
        console.error ('Error signing in: ', error.message);
    }
};

export const signOutGoogle = async() => {
    try {
        await auth.signOutGoogle('Signed out.');
    }catch(error){
        console.error ('Error signing out: ', error.message);
    }
};

export {auth};