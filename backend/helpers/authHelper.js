
import bcrypt from "bcrypt";

// Function to hash the user's password. This function will take the plain-text password and return a hashed version of it.

export const hashPassword = async (password) => {
    try {

        // bcrypt uses a technique called 'salting' to make the hash more secure - saltRounds define how many rounds of salting will be applied.
        
        const saltRounds = 10;

        // The bcrypt.hash() function takes the plain password and the number of saltRounds to create a hashed version of the password.
        
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        // Returning the hashed password to be stored in the database.
        
        return hashedPassword;

    } catch (error) {
        console.log(error);
    }
};

// Function to compare the plain password with a hashed password stored in the database - This will be used during login to verify if the entered password matches the stored hashed password.

export const comparePassword = async (password, hashedPassword) => {

    // bcrypt.compare() compares the plain password with the stored hashed password - If they match, it will return true, otherwise false.
    
    return bcrypt.compare(password, hashedPassword);
};
