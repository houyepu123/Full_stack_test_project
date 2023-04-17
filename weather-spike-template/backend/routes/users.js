const express = require('express');
const router = express.Router();
/************************ TODO ************************
        Connect to mongoose user model
*/

/************************ TODO ************************
        Route for getting an array of all users
*/

/************************ TODO ************************
        Route for getting a user by their id
*/

/************************ TODO ************************
        Route for deleting a user by their id
*/

/************************ TODO ************************
        Route for adding a new a user 
*/

// some response handlers in /utils 
const handleResponse = (res, data) => res.status(200).send(data);
const handleError = (res, err) => res.status(500).send(err);

module.exports = router;