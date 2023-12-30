import { addBook } from './BookFunctions.js';
import { addUser } from './AddUser.js';
import { initializeApp } from '../Firebase_Config.js';

const main = async () => {
  addBook('The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction', true, null);
  addUser('user1', 'john_doe', 'john@example.com', 'Adventure', 'admin');
  addUser('user2', 'jane_doe', 'jane@example.com', 'Adventure', 'admin');
};

main();