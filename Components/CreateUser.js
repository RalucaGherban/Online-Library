import { addUser } from "../Components/AddUser.js";

export const createAccountWithEmailAndPassword = async (email, password, name, favoriteGenre) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        console.log(`Account created successfully for ${user.email}`);

        const userData = {
            userId: user.uid,
            name: name,
            favoriteGenre: favoriteGenre,
        };

        addUser(userData);

       return user;

    } catch (error) {
        console.error('Error creating account:', error.message);
    }
};