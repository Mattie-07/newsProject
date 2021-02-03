# **NEWS**
<!-- ![](C:\Users\Kanny\DigitalCraft\Project FrontEnd\GroupProject\images\zodiac.png) -->
<p align="center">
  <img src="public\images\news.png" width="350" alt="accessibility text">
</p>
___

## Overview:
about our project.......
___
## What we used:
Technolgies:
- HTML5
- CSS3
- JavaScript ES6
- Bootstrap 4
- Node.js
- AWS
- Express
- Ejs
- Helmet
- Authantication



APIs
- one
- two
Other:
- AJAX
- JSON
___
## MVP (Minimum Viable Product):
- Creating a dynamic user interface that allows the user to register/login to view news sources.
- users can easily search through different articles

- Responsive design
___
## Stretch Goals Completed:
-  users can use a chat box to talk about todays headlines
- users can use search engine to find articles
- 
___
## Stretch Goals Future:
- users can save articles of their liking, whcih are saved in the database
- two
- three
___
##Code Snippets:
```
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
```
## Team:
- **Matthew Roberts** 
 [Matthewtroberts10@gmail.com](Matthewtroberts10@gmail.com)
 <https://github.com/Mattie-07>
- **Kim Long** 
 [Kimrlong09@gmail.com](Kimrlong09@gmail.com)
 <https://github.com/KimrLong>
 - **Kanny Mohamad** 
 [kanny.ghafour@gmail.com](kanny.ghafour@gmail.com)
 <https://github.com/kannyg87>
 - **Matthew Chun** 
 [matthewchun93@gmail.comm](matthewchun93@gmail.com)
 <https://github.com/matthewchun93>
GitHubGitHub
Mattie-07 - Overview
Hi everyone! I'm a full-stack developer! Mattie-07 has 12 repositories available. Follow their code on GitHub.
GitHubGitHub
KimrLong - Overview
KimrLong has 12 repositories available. Follow their code on GitHub.
GitHubGitHub
kannyg87 - Overview
kannyg87 has 8 repositories available. Follow their code on GitHub.
