
const path = require('path');
const controller = {
    renderHome : (req, res) => {
    return  res.render(path.resolve(__dirname, '..', 'views','home'))
    }
}
module.exports = {controller};