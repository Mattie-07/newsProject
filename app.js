const express = require('express');
const app = express();
const helmet = require('helmet');



app.use(express.urlencoded({extended: false}));
app.use(express.json());


//views 
app.set('view engine', 'ejs');

//public folder
app.use(express.static('public'));
app.use(helmet());

//routes
app.use(require('./routes/index'));
app.use(require('./routes/registration'));
app.use(require('./routes/login'));

//access to the public folder


app.listen(3000, () => {

    console.log('listening on port 3000');
}) 