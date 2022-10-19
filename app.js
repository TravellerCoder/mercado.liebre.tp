const express = require('express');
const app = express();

const path = require('path');

const nuevaCarpetaPath = path.resolve('public')

//app.use(express.json());
//app.use(express.urlencoded());

app.use(express.static(nuevaCarpetaPath)) 

const appPuerto = 1126;

app.listen(appPuerto, () => {
    console.log('servidor funcionando en puerto' + appPuerto)
   });

app.get('/', (req, res) => {
    res.sendFile(path.resolve('views/home.html'))
});

app.get('/registro', (req, res) => {
    res.sendFile(path.resolve('views/register.html'));
});

app.get('/ingreso', (req, res) => {
    res.sendFile(path.resolve('views/login.html'));
});
