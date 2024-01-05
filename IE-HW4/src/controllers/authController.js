const User = require('../models/user');
const jwt = require('../utils/jwt');

const signup = async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = await User.create({ username, password });
        const token = jwt.generateToken({ userId: newUser._id });

        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (!(user.password === password)) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = jwt.generateToken({ userId: user._id });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    signup,
    login
};