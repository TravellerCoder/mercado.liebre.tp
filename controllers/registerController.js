const path = require('path');

const renderRegister = (req, res) => {
    return  res.sendFile(path.resolve('views/register.html'))
};

module.exports = {renderRegister};

