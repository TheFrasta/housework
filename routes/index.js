//Router para direccionar a mi pagina inicials
const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {

    res.render('index');
    
    });

module.exports = router