const path = require('path');

const renderLogin = (req, res) => {
    return res.render(path.resolve(__dirname, '..', 'views','login'))
};

module.exports = {renderLogin};