const userModel = require('../models/userModel');

// Function to create a user with additional logic
exports.createUser = async (userData) => {
    const { email } = userData;

    // Check if the email already exists
    const existingUser = await userModel.getUserByEmail(email);
    if (existingUser) {
        throw new Error('Email already in use');
    }

    // Additional checks or logic can go here (e.g., hashing the password)

    // If all checks pass, create the user
    return userModel.createUser(userData);
};
