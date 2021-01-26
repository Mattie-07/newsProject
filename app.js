
const express = require('express');
const app = express();
const helmet = require('helmet');
<<<<<<< HEAD
const socket = require('socket.io');
=======
>>>>>>> main


app.use(express.urlencoded({extended: false}));
app.use(express.json());

const passport = require('passport');
require('./auth/passport-config')(passport);

//views 
app.set('view engine', 'ejs');

//public folder
app.use(express.static('public'));
app.use(helmet());
<<<<<<< HEAD

//passport
app.use(passport.initialize());
app.use(passport.session());
=======
>>>>>>> main

//routes
app.use(require('./routes/index'));
app.use(require('./routes/registration'));
app.use(require('./routes/login'));
<<<<<<< HEAD
app.use(require('./routes/error'));
app.use(require('./routes/chat'));
=======
>>>>>>> main

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
