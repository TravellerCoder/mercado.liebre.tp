const path = require('path');

const renderProducts = (req, res) => {
    return  res.render(path.resolve(__dirname, '..', 'views','products'))
};

module.exports = {renderProducts};