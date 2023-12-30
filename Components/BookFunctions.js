import {db} from "../src/Firebase_Config.js";

export const addBook = async (title, author, category, availability, borrowPeriod) => {
    try {
        const booksRef = db.ref('books');  // Get a reference to the "books" node
        const newBookRef = booksRef.push();

        await newBookRef.set({
        title: title,
        author: author,
        category: category,
        availability: availability,
        borrowPeriod: borrowPeriod,
    });

    console.log ('Book added with ID: ', docRef.id);
    }catch (error){
        console.error('Error adding book: ', error.message);
    }
};

export const borrowBook = async (bookId, bookName, userId, borrowPeriod) => {
    try {
        await db.ref ('books').child(bookId).update({
            availability: false,
            borrowedBy: userId,
            borrowPeriod: borrowPeriod,
        });

        console.log ('"${bookName}" borrowed successfully.');
    } catch (error){
        console.error ("Failed to borrow the book: ", error.message);
    }
};