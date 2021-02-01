const express = require('express');
const app = express();
const helmet = require('helmet');



app.use(express.urlencoded({extended: false}));
app.use(express.json());
const passport = require('passport');
require('./authorize/passport-config')(passport);
const cookie = require('cookie-session');

app.use(cookie({
    name: "session",
    keys: ["somethingSomething"],
    maxAge: 7 * 24 * 60 * 60 * 1000
}))

//views 
app.set('view engine', 'ejs');

//public folder
app.use(express.static('public'));
app.use(helmet());
app.use(passport.initialize());
app.use(passport.session());
//routes
app.use(require('./routes/index'));
app.use(require('./routes/registration'));
app.use(require('./routes/login'));

//access to the public folder


app.listen(3000, () => {

    console.log('listening on port 3000');
}) 