const userModel = require('../models/userModel');

// Middleware to check for existing user by email
exports.checkUserExists = async (req, res, next) => {
    try {
        const { email } = req.body;
        const existingUser = await userModel.getUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ error: 'Email already in use' });
        }
        next(); // Proceed to the next middleware/controller
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
