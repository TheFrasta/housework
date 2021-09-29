const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    res.render('register');

});

router.get("/:id", (req, res) => {
    res.send(`ID del registrado ${req.params.id}`);

});

module.exports = router

