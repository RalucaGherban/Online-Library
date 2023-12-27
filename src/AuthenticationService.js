import { auth } from './Firebase_Config';

export const signInWithEmail = async (email, password) => {
    try {
        await auth.signInWithEmail(email, password);
        console.log('Signed in successfully.');
    } catch (error){
        console.error ('Error signing in: ', error.message);
    }
};

export const signOutEmail = async () => {
    try {
        await auth.signOutEmail();
        console.log('Signed out successfully.');
    } catch (error){
        console.error ('Error signing out: ', error.message);
    }
};