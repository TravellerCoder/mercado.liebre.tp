
const path = require('path');

const renderHome = (req, res) => {
    return  res.render(path.resolve(__dirname, '..', 'views','home'))
};

module.exports = {renderHome};