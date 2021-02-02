const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcryptjs");
let pattern = /[^@]+@[^@]+/;

router.get("/registration", (req, res) => {
    res.render("registration");
    });

    router.post("/registration", async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let result = email.match(pattern);
    try {
        if(result === null || result === undefined){
            res.redirect('/error')
        }
        else{
            let passwordEncrypted = bcrypt.hashSync(password, 8);
            console.log(passwordEncrypted);
            let insertResult = await db.users.create({
            userName: username,
            email: email,
            password: passwordEncrypted,
            roleID: 1
            });
            res.redirect("/login");
        }}
        catch (error) {
        console.log(error);
        res.send(`error: can't register this username`);
        }
    
});

module.exports = router;
