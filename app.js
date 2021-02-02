
const express = require('express');
const app = express();
const socket = require('socket.io');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//views 
app.set('view engine', 'ejs');

//public folder
app.use(express.static('public'));

//routes
app.use(require('./routes/index'));
app.use(require('./routes/registration'));
app.use(require('./routes/login'));
app.use(require('./routes/error'));
app.use(require('./routes/chat'));

//access to the public folder
<<<<<<< HEAD


let server = app.listen(3005, () => {
=======
let server = app.listen(3000, () => {
>>>>>>> cd492b9706f6707d8881323e8b1c453716c46c2c
    console.log(`listening on port 3000`);
});

//io.attach(server)
let io = socket(server);

io.on('connection', (socket)=>{

//listening for messages from client
    socket.on('postMessage', (msg)=>{

        // console.log(msg);
        //broadcast to all connected servers
        io.emit('updateMessages', msg)
    })
})
