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
            res.status(404).send("Sorry but you'll have to use a unique name")
            //create a small error page with a back button so that they can try again if they need to.
        }
        else{
            let passwordEncrypted = bcrypt.hashSync(password, 8);
            console.log(passwordEncrypted);
            //add logic for duplicate users
            let insertResult = await db.users.create({
            userName: username,
            email: email,
            password: passwordEncrypted,
            roleID: 1
            });
            res.redirect("/login");
        }}
        catch (error) {
        // transaction = await sequelize.transaction();
        // await transaction.rollback();
        if(error instanceof TypeError){
            res.send('duplicate error')
            // return res.status(404).send("Sorry but you'll have to use a unique name")
        }
        else{
        console.log(error);
        res.send(`error: can't register this username`);
        }
    }
});

module.exports = router;
