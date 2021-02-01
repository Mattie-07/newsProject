const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const db = require('../models');
// const passport = require('./passport-instance')

const init = (passport) =>{
    passport.use( new LocalStrategy((username, password, done) => {
        db.users.findAll({where:{username:username}})
        .then(records =>{
            if(records != null){
                let record = records[0];
                bcrypt.compare(password, record.password, (error, response) =>{
                    if(response){
                    //if we have a match
                    done(null, {id: record.id, username: record.username})
                    }
                    else{
                        //no seession 
                        done(null, false)
                    }
                })
            }
            else{
                done(null, false)
            }
        })
        
    }))
    passport.serializeUser((user, done) =>{
        //passport is adding information to the sessions
        done(null, user.id)
    })
    passport.deserializeUser((id, done) =>{
        //checking to see if the cookie is valid with the user.
        db.users.findByPk(id)
        .then(record =>{
            done(null, record)
        })

    })
}

module.exports = init;