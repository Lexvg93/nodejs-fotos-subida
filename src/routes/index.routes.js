const { Router } = require('express');
const path = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const router = Router();

const storage = multer.diskStorage({
    destination: path.join(__dirname,'../public/images'),
    filename:(req, file, cb)=>{
        cb(null, uuidv4() + path.extname(file.originalname).toLowerCase());
    }
})

router.get('/',(req, res)=> {
    res.render('index');
})

const upload = multer({
    storage,
    dest:path.join(__dirname,'public/images'),
    //limits: {fieldSize:1000000}
    fileFilter: (req, file, cb)=> {
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        if(mimetype && extname){
            return cb(null, true);
        }
        cb("Error: Archivo debe ser una imagen valida");
    }
}).single('image')

router.post('/upload',upload ,(req,res) =>{
    console.log(req.file);
    res.send('uploaded')
})

module.exports = router;