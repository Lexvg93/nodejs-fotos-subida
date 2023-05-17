

const express = require('express');
const path = require('path');
const multer = require('multer');
//Initializations
const app = express();

//Settings
app.set('port', 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


//middlewares 
//son codigos que se ejecutan antes de llegar a las rutas 


//Routes
app.use(require('./routes/index.routes'));

//Static files
app.use(express.static(path.join(__dirname,'public')))

//Start the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
})

