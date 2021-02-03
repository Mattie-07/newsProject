const express = require("express");
const router = express.Router();
const axios = require('axios');
const authReq = require('../auth');




   // console.log(dataFile)
    router.get("/aboutUs",  (req, res) => {
    res.render('aboutUs')
});








module.exports = router;