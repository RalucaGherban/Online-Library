import { getDatabase, ref, push, update, get, child } from 'firebase/database';

const clearString = (string) => {
    return string.replace(/[.,@#$[\]/]/g, '');
};

export const addBook = async (bookId, title, author, category, availability, borrowPeriod) => {
    try {
        const clearedTitle = clearString(title);
        const database = getDatabase();
        const booksRef = ref(database, 'Books'); 
        const newBookRef = push(booksRef);
        const bookRef = ref(getDatabase(), `Books`);
        const bookSnapshot = await get((bookRef));

        if (bookSnapshot.exists()) {
            console.log('Book already exists.');
            return;
        }

        await update(newBookRef, {
            title: title,
            author: author,
            category: category,
            availability: availability,
            borrowPeriod: borrowPeriod,
        });

        console.log('Book added with ID: ', newBookRef.key);
    } catch (error) {
        console.error('Error adding book: ', error.message);
    }
};

export const borrowBook = async (bookId, userId, borrowPeriod) => {
    try {
        const database = getDatabase();
        const booksRef = ref(database, 'books');
        await update(booksRef.child(bookId), { 
            availability: false,
            borrowedBy: userId,
            borrowPeriod: borrowPeriod,
        });

        console.log('"${bookName}" borrowed successfully.');
    } catch (error) {
        console.error("Failed to borrow the book: ", error.message);
    }
};
