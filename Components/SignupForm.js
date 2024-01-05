export const handleSignup = async (name, email, password, favoriteGenre) => {
        try {
        await createAccountWithEmailAndPassword(email, password, name, favoriteGenre);

        console.log('User signed up successfully.');
    } catch (error) {
        console.error('Error creating account:', error.message);
    }
};
const signupForm = document.getElementById('signup-form');

if (signupForm) {
    signupForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const name = signupForm.elements['name'].value;
        const email = signupForm.elements['email'].value;
        const password = signupForm.elements['password'].value;
        const favoriteGenre = signupForm.elements['favoriteGenre'].value;

        handleSignup(name, email, password, favoriteGenre);
    });
} else {
    console.error('Signup form not found.');
};