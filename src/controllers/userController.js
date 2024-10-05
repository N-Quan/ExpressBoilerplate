const userService = require('../services/userService');

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Other controller functions (getAllUsers, getUserById, etc.) remain unchanged
