const User = require('../models/userModel');

const createUser = async (req, res) => {
    const { firstName, lastName, email } = req.body;

    try {
        const newUser = new User({ firstName, lastName, email });
        console.log('Creating a new user:', newUser)
        await newUser.save();
        res.status(200).json("Successfully created a new user");
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ message: 'Email id already exists' });
        } else {
            res.status(400).json({ message: error.message });
        }
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createUser,
    getUsers
};