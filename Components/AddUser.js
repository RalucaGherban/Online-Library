import { getDatabase, ref, get, query, orderByChild, equalTo, set } from 'firebase/database';

const clearString = (string) => {
    return string.replace(/[,@.#$[\]/]/g, '');
};

export const addUser = async (userId, username, email, password, favoriteCategory, userRole) => {
    try {
        const clearedEmail = clearString(email);
        const usersRef = ref(getDatabase(), 'users');
        
        const emailQuery = query(usersRef, orderByChild('email').equalTo(email));
        const emailSnapshot = await get(emailQuery);

        if (emailSnapshot.exists()) {
            console.log('User with the same email already exists.');
            return;
        }
        
        const newUserRef = push(usersRef);
        const newUserId = newUserRef.key;

        await set(newUserId, {
            userId: userId,
            username: username,
            email: email,
            password: password,
            favoriteCategory: favoriteCategory,
            userRole: userRole,
        });

        console.log('User added successfully.');
    } catch (error) {
        console.error('Error adding user: ', error.message);
    }
};
