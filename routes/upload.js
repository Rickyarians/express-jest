var express = require('express');
var router = express.Router();
const formidable = require('formidable');
var cloudinary = require('cloudinary').v2;
const {User} = require('../models')

cloudinary.config({ 
   cloud_name: 'dety3yc4x', 
   api_key: '511364428472254', 
   api_secret: 'IeTp0Pa8NBp8Fo9ye2Oh86-R2aY',
   secure: true
 });
 
 router.post('/edit', (req, res, next) => {
   cloudinary.uploader.rename('eq321ujcsmjfdenbod2j', 'eq321ujcsmjfdenbod2j.xls',  function(error,result) {console.log(result, error) });
  })

router.get('/photo', (req, res, next) => {
   res.json({
      image: cloudinary.url("27ca325ecb13380084e17a4022. BOQ DRM - PO.xlsx", {resource_type: "raw"})
   })
})


router.post('/', (req, res, next) => {
   const form = formidable({ multiples: true });
 
   form.parse(req, (err, fields, files) => {
     if (err) {
       next(err);
       return;
     }
     console.log(files.file.filepath)
     cloudinary.uploader.upload(files.file.filepath, function(error, result) {
        console.log(result, error)
        if(error) {
            res.status(400).json({
               status: "Failed",
               message: "Gagal Upload"
            })
        } else {
            res.status(200).json({
               status: "Success",
               message: "Berhasil Upload",
               file_url: result.secure_url
            })
        }
      });
   //   res.json({ fields, files });
   });
 });

 router.post('/profile/:id', (req, res, next) => {
   const form = formidable({ multiples: true });
 
   form.parse(req, (err, fields, files) => {
     if (err) {
       next(err);
       return;
     }
     console.log(files)
     if(!files.file || files.file.size > 10000000000) {
      res.status(400).json({
         status: "Failed",
         message: files.file ? 'File Terlalu Besar' : 'Anda belum memilih file'
      })
     } else {
        cloudinary.uploader.upload(files.file.filepath,  { public_id: files.file.newFilename + files.file.originalFilename ,resource_type: "raw", overwrite: false}, function(error, result) {
        console.log(result, error)
        if(error) {
            res.status(400).json({
               status: "Failed",
               message: "Gagal Upload"
            })
        } else {
         
         //   res.json(req.params.id)
            User.update({photo: result.secure_url}, {
               where: {id: parseInt(req.params.id)}
            }).then(hasil => {
                     res.status(200).json({
                     status: "Success",
                     message: "Berhasil Upload",
                     file_url: result.secure_url,
                     data: hasil
                  })
            }).catch(err => {
               res.status(400).json({
                  status: "Failed",
                  message: "Gagal Upload"
               })
            })

            
        }
      });
     }
     
   //   res.json({ fields, files });
   });
 });

module.exports = router;
