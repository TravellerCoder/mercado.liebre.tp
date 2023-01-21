const express = require('express');
const app = express();
const path = require('path');
const nuevaCarpetaPath = path.resolve('public');
const fs =require('fs');
//const renderLogin = require('./controllers/loginController');
//const renderHome = require('./controllers/mainController');
//const renderRegister = require('./controllers/registerController');
//const renderProducts = require('./controllers/productsController');
const mainRouter = require('./routes/mainRouter');
const loginRouter = require('./routes/loginRouter');
const registerRouter = require('./routes/registerRouter');
const productsRouter = require('./routes/productsRouter');


app.use(express.json());
app.use(express.urlencoded());
// Set the view engine to ejs
app.set("view engine", "ejs");
// set static 'public' folder
app.use(express.static(nuevaCarpetaPath));
//creamos el puerto 
const port = process.env.PORT || 1126;
app.listen(port, () => console.log('Servidor corriendo en el puerto ' + port));

// CREAMOS LA CONSTANTE PRODUCTS PARA SU UTILIZACIÓN
const productsFilePath = path.resolve('data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// CREAMOS LA CONSTANTE USERS PARA SU UTILIZACIÓN
const usersFilePath = path.resolve('data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


// Route to home
app.use(mainRouter);
// Route to register
app.use(registerRouter);
// Route to login
app.use(loginRouter);
// Route to products
app.use(productsRouter);
// Route to error
app.use((req, res, next) =>{
    res.status(404).render('error')
})

