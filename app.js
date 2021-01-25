const express = require('express');
const app = express();


//views 
app.set('view engine', 'ejs');

//public folder
app.use(express.static('public'));

//routes
app.use(require('./routes/index'));
app.use(require('./routes/registration'));

//access to the public folder
app.use(express.static('public'));





app.listen(3000, () => {

    console.log('listening on port 3000');
})