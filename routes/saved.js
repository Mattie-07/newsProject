const express = require("express");
const router = express.Router();
const passport = require('passport')


router.get("/saved",  (req, res) => {
    res.render('saved')
});


router.post('/login', passport.authenticate('local', {successRedirect: '/protected', failureRedirect: '/login'}))

module.exports = router;
