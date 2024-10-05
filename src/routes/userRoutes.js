const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userValidation = require('../middleware/userValidation');

// Define routes with validation middleware
router.post('/', userValidation.checkUserExists, userController.createUser); // Create a new user
router.get('/', userController.getAllUsers); // Get all users
router.get('/:id', userController.getUserById); // Get a user by ID
router.put('/:id', userController.updateUser); // Update a user
router.delete('/:id', userController.deleteUser); // Delete a user

module.exports = router;
