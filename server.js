const { request } = require('express');
const express = require('express');
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

//middlewares

app.use(function(req,res,next){

console.log('request url:' + request.url)
next();
});

app.use((req,res, next)=>{

console.log('Aqui ha pasado por Esta funcion');
next();

});

app.use(express.static('Frontend'));
app.use(express.static('Frontend/assets'));

// routers
const indexRouter = require('./routes/index')

app.use('/', indexRouter)


const RegisterRouter = require('./routes/register')

app.use('/register', RegisterRouter)



app.post('/login', (req,res) =>{

    res.render('login');
        
    });

app.get('/user', (req,res) => {

res.json({

username: 'John',
lastname: 'Sanchez',

});


});

app.post('/user/:id', (req,res) => {

    console.log(req.body);
    console.log(req.params)
    res.send('EL POST HA SIDO SOLICITADO');
});

app.post('/register',(req,res) =>{

});

app.listen(3000, function() {

console.log('El servidor esta funcionando')

});








// app.get('*', (res,req) => {

// res.send('Archivo no encontrado')

// });


// const x = function (param) {return param*param};
// console.log(x(2));






// const server = http.createServer((req,res) =>{

// res.status= 200;
// res.setHeader('Content-Type', 'text/html');
// res.write('<h1> Buenas noches</h1>');
// res.end();


// });

// server.listen(3000, () =>{

// console.log('Server localizado en el puerto 3000');

// });

