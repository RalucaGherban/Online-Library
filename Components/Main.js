import { addBook } from './BookFunctions.js';
import { addUser } from './AddUser.js';
import { handleSignupForm } from './SignupForm.js';
import { auth, initializeApp } from '../Firebase_Config.js';
import { getDatabase, connectDatabaseEmulator } from 'firebase/database';

const main = async () => {
  addBook('The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction', true, null);
  //addUser('user1', 'john_doe', 'john@example.com', 'password1', 'Adventure', 'admin');
  //addUser('user2', 'jane_doe', 'jane@example.com', 'password2', 'Adventure', 'admin');
  //await createAccountWithEmailAndPassword(email, password, name, favoriteGenre);
  handleSignupForm();

  //await signInWithEmailAndPassword('john@example.com', 'password1');
};

main();