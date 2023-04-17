const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// Initializes Express server
const app = express()

app.use(cors());
app.use(express.json());

/************************ TODO ************************
        Implement the MongoDB database connection
*/

/************************ TODO ************************
        Connect the routes we need for the app
*/

// Starts the server on port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})