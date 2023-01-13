const express = require('express');
const app = express();
const path = require('path');
const nuevaCarpetaPath = path.resolve('public');
const renderLogin = require('./controllers/loginController');
const renderHome = require('./controllers/mainController');
const renderRegister = require('./controllers/registerController');
const mainRouter = require('./routes/mainRouter');
const loginRouter = require('./routes/loginRouter');
const registerRouter = require('./routes/registerRouter');


app.use(express.json());
app.use(express.urlencoded());
// se declara el uso de ejs
app.set("view engine", "ejs");

app.use(express.static(nuevaCarpetaPath));
//creamos el puerto
const port = process.env.PORT || 1126;
app.listen(port, () => console.log('Servidor corriendo en el puerto ' + port));
// Route to home
app.use(mainRouter);
// Route to register
app.use(registerRouter);
// Route to login
app.use(loginRouter);

