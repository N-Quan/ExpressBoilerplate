const express = require('express');
const admin = require('firebase-admin');

// Uncomment the lines marked with TODO after you've added your credentials for the Firebase Service Account
// const userRoutes = require('./routes/userRoutes'); // TODO: UNCOMMENT THIS

const app = express();

// OPTION 1: Initialize Firebase Admin SDK
// admin.initializeApp({
//   credential: admin.credential.applicationDefault(), // Loads from GOOGLE_APPLICATION_CREDENTIALS environment variable
//   databaseURL: "https://my-project-XXXXX.firebasedatabase.app"
// }); // TODO: UNCOMMENT THIS

// OPTION 2: Initialize Firebase Admin SDK
// const serviceAccount = require('./path/to/your/serviceAccountKey.json');
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
// }); // TODO: UNCOMMENT THIS

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Routes
app.get('/', (req, res)=> {res.send("Hello from Express!");})
// app.use('/api/users', userRoutes); // TODO: UNCOMMENT THIS

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
