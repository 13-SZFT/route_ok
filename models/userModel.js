const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nev: {
        type: String,
        required: [true, 'Kötelező a név megadása!']
    },
    email: {
        type: String,
        required: [true, 'Kötelező az e-mail megadása!'],
        unique: true
    }
}, { timestamps: true });

const User = mongoose.model("users", userSchema);

module.exports = User;