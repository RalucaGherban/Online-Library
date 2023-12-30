import {db} from '../Firebase_Config.js';

export const addUser = async (userId, username, email, favoriteCategory) => {
    try{
        await db.ref('users').child(userId).set({
            username: username,
            email: email,
            favoriteCategory: favoriteCategory,
    });
        console.log ('User added successfully.');
    } catch (error){
        console.error ('Error adding user: ', error.message);
    }
};

addUser('user1', 'john_doe', 'john@example.com', 'Adventure');