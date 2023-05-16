const express = require('express');
const path = require('path');
const multer = require('multer');
//Initializations
const app = express();

//Settings
app.set('port', 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/images'),
    filename:(req, file, cb)=>{
        cb(null, file.originalname);
    }
})

//middlewares 
//son codigos que se ejecutan antes de llegar a las rutas 
app.use(multer({
    storage,
    dest:path.join(__dirname,'public/images')
}).single('image'));

//Routes
app.get('/',(req, res)=> {
    res.render('index');
})

app.post('/upload', (req,res) =>{
    console.log(req.file);
    res.send('uploaded')
})
//Start the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
})

https://www.youtube.com/watch?v=AbJ-y2vZgBs tiempo 27:28