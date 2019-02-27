const crypto = require('crypto').randomBytes(256).toString('hex');


module.exports = {
    uri: 'mongodb://localhost:27017/passportLogin', // Database URI and databse name
    secret: crypto, // Crypto-created secret
    db: 'passportLogin' // Database name
}