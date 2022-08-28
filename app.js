const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const Router = require('./router/main.router');

//para capturar los datos del formulario y no tener errores
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Setear el directorio publico
app.use('/', express.static('public'));
app.use('/', express.static(__dirname + 'public'));
console.log(__dirname);

//Establecer el motor de plantillas
app.set('view engine', 'ejs');

//Estableciendo las rutas
app.use('/', Router);

app.listen('3000', (req, res)=>{
    console.log('Server Running on Port ' + '3000');
}) 