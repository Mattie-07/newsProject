const express = require("express");
const router = express.Router();
const axios = require('axios');



router.get('/' , (req, res) =>{
        res.render('index')
})




//const bodyParser = require('body-parser');
//router.use(express.urlencoded({extended: false}));
// router.use(express.json())

module.exports = router;
