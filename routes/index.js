const express = require("express");
const router = express.Router();

//const bodyParser = require('body-parser');
//router.use(express.urlencoded({extended: false}));
// router.use(express.json())

router.get('/index', (req, res) => {
  
    res.send('index')
})

module.exports = router;
