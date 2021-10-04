//Importaciones de modulos
const { request } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');
const Register = require('./models/user');
const bodyParser = require('body-parser');

// Conexion a la base de datos:
mongoose.connect('mongodb://localhost/webstore')
.then(() => console.log('base de datos conectada'))
.catch(e => console.log(e))

// Parser de los datos enviados a la base de datos.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//View Engine, ejs module.
app.use(express.json());
app.set('view engine', 'ejs');

//Import del Frontend
app.use(express.static('Frontend'));
app.use(express.static('Frontend/assets'));

// routers
const indexRouter = require('./routes/index')

app.use('/', indexRouter)

//Register
const RegisterRouter = require('./routes/register')

app.use('/register', RegisterRouter)

//Login
const LoginRouter = require('./routes/login')

app.use('/login', LoginRouter)

//ruta dinamica.
app.post('/user/:id', (req,res) => {

    console.log(req.body);
    console.log(req.params)
    res.send('EL POST HA SIDO SOLICITADO');
});

//Servidor encendido.
app.listen(3000, function() {

console.log('El servidor esta funcionando')

});

// const server = http.createServer((req,res) =>{

// res.status= 200;
// res.setHeader('Content-Type', 'text/html');
// res.write('<h1> Buenas noches</h1>');
// res.end();


// });

// server.listen(3000, () =>{

// console.log('Server localizado en el puerto 3000');

// });

