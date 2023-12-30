import { addBook} from './Components/BookFunctions.js';

const main = async () => {
  addBook('The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction', true, null);

  // Retrieve the book you just added (you might need the document ID)
  // For simplicity, let's assume you know the document ID
  //const bookId = 'your_document_id_here';

  // Borrow the book
  //await borrowBook(bookId, 'The Great Gatsby', 'user123', 14);
};

// Run the main function
main();
