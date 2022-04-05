const User = require('../models/userModel');

const getRequest = (req, res) => {
    res.render('feltoltes');
};

const postRequest = async (req, res) => {
    try {
        const adatok = req.body;
        const newUser = new User(adatok);

        await newUser.save();
        res.render('index');
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { getRequest, postRequest };