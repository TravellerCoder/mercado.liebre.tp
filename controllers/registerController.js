const path = require('path');

const renderRegister = (req, res) => {
    return  res.render(path.resolve(__dirname, '..', 'views','register'))
};

module.exports = {renderRegister};

