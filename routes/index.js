const express = require("express");
const router = express.Router();
const axios = require('axios');
const authReq = require('../authorize')



router.get('/' , (req, res) =>{
        res.render('index')
})

router.get('/protected', authReq, (req, res) =>{
        res.send('protected')
})

router.get('/error', (req, res)=>{
        res.send('error')
})


module.exports = router;
