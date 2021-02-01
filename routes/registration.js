const express = require("express");
const router = express.Router();
const db =  require('../models') // providing access to our database
const bcryptjs = require('bcryptjs');



//const bodyParser = require('body-parser');
//router.use(express.urlencoded({extended: false}));
// router.use(express.json())


router.get('/registration', (req, res) => {
    res.render('registration')
})


router.post('/registration', async (req, res) =>{
    let username = req.body.username;
    let password = req.body.username;
    let email = req.body.email;

    try{
    let passwordEncrypted = bcryptjs.hashSync(password, 8);

    //below we could write the code on lines 27 and 28 with just "username, email," because with ES6 would would still have access to it if the key and value have the same name
    let result = await db.users.create({
        username: username,
        email: email,
        password: passwordEncrypted,
        roleID: 1
    });
    res.redirect("/login");
    }
    catch(error){
        res.send("Error: Sorry we can't register who you are.");
    }
});
module.exports = router;

