const path = require('path');
const fs = require('fs');

const usersFilePath = path.resolve('./data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const renderLogin = (req, res) => {
    return res.render(path.resolve(__dirname, '..', 'views','login'));
};

module.exports = {renderLogin};