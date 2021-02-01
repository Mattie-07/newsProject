const express = require("express");
const router = express.Router();
const passport = require('package')



router.post('/login', passport.authenticate('local', {successRedirect: '/protected'}, {failureRedirect:'/login'}))

module.exports = router;
