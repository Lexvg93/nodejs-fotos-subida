const { Router } = require('express');
const path = require('path');
const multer = require('multer');
const router = Router();

const storage = multer.diskStorage({
    destination: path.join(__dirname,'../public/images'),
    filename:(req, file, cb)=>{
        cb(null, file.originalname);
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
        const extname = filetypes.test(file.mimetype);
    }
}).single('image')

router.post('/upload',upload ,(req,res) =>{
    console.log(req.file);
    res.send('uploaded')
})

module.exports = router;