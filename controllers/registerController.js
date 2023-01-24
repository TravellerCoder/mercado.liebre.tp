const path = require('path');
const fs = require('fs');
// CREAMOS LA CONSTANTE USERS PARA SU UTILIZACIÓN
const usersFilePath = path.resolve('./data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
    createUser : (req, res) => {
    return  res.render(path.resolve(__dirname, '..', 'views','register'));
},
    storeUser : (req, res) => {
        const camposDeNuevoUser = req.body;
        camposDeNuevoUser.id = users.length + 1;
        users.push(camposDeNuevoUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
        
        res.render(path.resolve(__dirname, '..', 'views','index'));
    },
}


module.exports = {controller}