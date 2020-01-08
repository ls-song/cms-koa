const jwt = require('jsonwebtoken');
const {tokenConfig} = require('../config/config.js');
const signToken = (uid) => {
    let secretKey = tokenConfig.secretKey;
    let expiresTime = tokenConfig.expiresTime;
    return jwt.sign({
        uid,
    }, secretKey, {
        expiresIn: expiresTime
    });
};

const verifyToken = (token) => {
    return jwt.verify(token,tokenConfig.secretKey);
};

module.exports = {
    signToken,
    verifyToken
};