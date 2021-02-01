
const express = require('express');
const app = express();
const socket = require('socket.io');

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
app.use(require('./routes/error'));
app.use(require('./routes/chat'));

//access to the public folder


let server = app.listen(3000, () => {
    console.log(`listening on port 3000`);
});

//io.attach(server)
let io = socket(server);

io.on('connection', (socket)=>{

//listening for messages from client
    socket.on('postMessage', (msg)=>{

        console.log(msg);
        //broadcast to all connected servers
        io.emit('updateMessages', msg)
    })
})
