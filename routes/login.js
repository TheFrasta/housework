const express = require('express');
const User = require('../models/user');
const router = express.Router();

//Me direcciona a localhost:3000/login
router.get('/', (req, res) => {

    res.render('login');

});

//Solicitud a la base de datos sobre los datos de Nombre y Contrasena.
router.post('/', async (req, res) => {

    const { Nombre, Contrasena } = req.body
    console.log(Nombre);
    var user = await User.findOne({ Nombre })
    var password = await User.findOne({ Contrasena })
    console.log(user);

    if (user && password == null) {
        res.status(500).send('Contrasena Incorrecta, coloquela correctamente.')
    } else if(user == null && password) {
        res.status(500).send('Usuario Incorrecto')
    }else if (user == null && password ==null) {
        res.status(500).send('El usuario no existe')
    } else {
        res.status(200).send('El usuario se ha autenticado correctamente')
    }

    // })

})
module.exports = router