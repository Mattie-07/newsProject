const express = require('express');
const app = express();


app.use(express.urlencoded({extended: false}));
app.use(express.json());


//views 
app.set('view engine', 'ejs');

//public folder
app.use(express.static('public'));

//routes
app.use(require('./routes/index'));
<<<<<<< HEAD
app.use(require('./routes/login'));
=======
>>>>>>> d6c63cfdb15ecb16883adf449bafe886f6f1d5d0
app.use(require('./routes/registration'));

//access to the public folder


app.listen(3000, () => {

    console.log('listening on port 3000');
}) 