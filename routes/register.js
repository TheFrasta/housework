const express = require('express');
const User = require('../models/user');
const Register = require('../models/user');
const router = express.Router();

router.get('/', (req, res) => {

    res.render('register');

});

router.post('/',(req,res) =>{

    console.log('Llegue a esa ruta');
    const {Nombre, Apellido ,Email, Contraseña} = req.body;
    const user = new User({Nombre,Apellido, Email,Contraseña})
    console.log(req.body);
    
    user.save(err =>{

        if(err){

            res.status(500).send('Error al registrar el usuario');

        }else{

            res.status(200).send('Usuario registrado correctamente');

        }

    })
});
// router.get("/:id", (req, res) => {
//     res.send(`ID del registrado ${req.params.id}`);

// });



router.get('/', async (req,res) =>{

try {

const Register = await Register.find()
console.log(Register);
} catch (error) {
    console.log(error);
}

})

// res.render("register", {arrayRegister:

//     {id:'222', Nombre: 'pedro', Apellido: 'petete'}

// })
module.exports = router

