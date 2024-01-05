const jwt = require('jsonwebtoken');
const generateToken = (payload) => {
    return jwt.sign(payload, process.env.secret_key);
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.secret_key);
    } catch (error) {
        return null;
    }
};

module.exports = {
    generateToken,
    verifyToken
};