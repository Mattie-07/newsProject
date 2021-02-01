const express = require("express");
const router = express.Router();



//const bodyParser = require('body-parser');
//router.use(express.urlencoded({extended: false}));
// router.use(express.json())


router.get('/registration', (req, res) => {

    res.render('registration')
})
module.exports = router;

