const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcryptjs");
let pattern = "/[^@]+@[^@]+/"

router.get("/registration", (req, res) => {
    res.render("registration");
    });
    
    router.post("/registration", async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    //hash our password
    let result = email.match(pattern);

    try {
        let passwordEncrypted = bcrypt.hashSync(password, 8);
        //add logic for duplicate users
        let insertResult = await db.users.create({
        userName: username,
        email: result,
        password: passwordEncrypted,
        roleID: 1
        });
        res.redirect("/login");
    } catch (error) {

        // transaction = await sequelize.transaction();
        // // await transaction.rollback();
        // if(error instanceof TypeError){
        //     throw new Error('duplicate error')
        //     // return res.status(404).send("Sorry but you'll have to use a unique name")
        // }
        // else{
        console.log(error);
        res.send(`error: can't register this username`);
    }
});

module.exports = router;
