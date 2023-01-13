const path = require('path');

const renderLogin = (req, res) => {
    return res.sendFile(path.resolve('views/login.html'))
};

module.exports = {renderLogin};