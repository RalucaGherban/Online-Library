import { getDatabase, ref, push, get } from 'firebase/database';

const clearString = (string) => {
    return string.replace(/[,@.#$[\]/]/g, '');
};

export const addUser = async (userId, username, email, favoriteCategory, userRole) => {
    try {
        const clearedEmail = clearString(email);
        const usersRef = ref(getDatabase(), 'users');
        const userSnapshot = await get(usersRef);

        if (userSnapshot.exists()) {
            console.log('User already exists.');
            return;
        }

        await push(ref(getDatabase(), 'users'), {
            userId: userId,
            username: username,
            email: email,
            favoriteCategory: favoriteCategory,
            userRole: userRole,
        });

        console.log('User added successfully.');
    } catch (error) {
        console.error('Error adding user: ', error.message);
    }
};
