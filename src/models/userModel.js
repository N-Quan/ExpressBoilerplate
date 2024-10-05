const admin = require('firebase-admin');

// Initialize Firestore
const db = admin.firestore();

// Create a user
exports.createUser = async (userData) => {
    const userRef = db.collection('users').doc();
    await userRef.set(userData);
    return { id: userRef.id, ...userData };
};

// Check if user exists by email
exports.getUserByEmail = async (email) => {
    const snapshot = await db.collection('users').where('email', '==', email).get();
    return snapshot.empty ? null : snapshot.docs[0].data();
};

// Other user-related functions (getAllUsers, getUserById, etc.) remain unchanged
