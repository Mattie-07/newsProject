const express = require("express");
const router = express.Router();


//const bodyParser = require('body-parser');
//router.use(express.urlencoded({extended: false}));
// router.use(express.json())

router.get('/', (req, res) => {
  
    res.render('index')
})

module.exports = router;
