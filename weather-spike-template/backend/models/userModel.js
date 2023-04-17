const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema for Users database
const userSchema = new Schema({
  /************************ TODO ************************
        user database Schema
*/
});

const User = mongoose.model('User', userSchema);

module.exports = User;