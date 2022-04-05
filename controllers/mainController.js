const User = require('../models/userModel');

const getRequest = async (req, res) => {
    try {
        const adatok = await User.find();
        res.render('index', { adatok });
    } catch (error) {
        console.log(error.message);
    }
};

const postRequest = (req, res) => {
    res.send("Hello");
};

module.exports = { getRequest, postRequest };