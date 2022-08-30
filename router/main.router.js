
const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('index');
});

router.get('/sobre-nosotros', (req,res)=>{
    res.render('about');
});

router.get('/nuestras-creencias', (req,res)=>{
    res.render('nuestras_creencias');
});

router.get('/pagos', (req,res)=>{
    res.render('payment');
});

module.exports = router;
