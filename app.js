const express = require('express');
const app = express();

const path = require('path');

const nuevaCarpetaPath = path.resolve('public');

app.use(express.json());
app.use(express.urlencoded());
// se declara el uso de ejs
app.set("view engine", "ejs");

app.use(express.static(nuevaCarpetaPath));
//creamos el puerto
const port = process.env.PORT || 1126;
app.listen(port, () => console.log('Servidor corriendo en el puerto ' + port));
// Route to home
app.get('/', (req, res) => {
    res.sendFile(path.resolve('views/home.html'))
});
// Route to register
app.get('/registro', (req, res) => {
    res.sendFile(path.resolve('views/register.html'))
});
// Route to login
app.get('/ingreso', (req, res) => {
    res.sendFile(path.resolve('views/login.html'))
});

