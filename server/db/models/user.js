// var crypto = require('crypto');
// var ObjectId = mongoose.Schema.Types.ObjectId;
const mongoose = require('mongoose');

const User = new mongoose.Schema({
    google: {
        id: String
    },
    email: String,
    firstName: String,
    lastName: String,
    photo: String});

mongoose.model('User', User);
