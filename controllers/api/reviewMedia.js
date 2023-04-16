const cloudinary = require('cloudinary').v2;

cloudinary.config({
    secure: true
});
console.log(cloudinary.config())
const router = require('express').Router();
const reviewMedia = require('../../models/reviewMedia');


router.get('/', async (req, res) => {
    res.render('reviewMedia'
)})

router.post('/', async (req, res) => {
   try {

    console.log(req.body, 'BODY----')
    
    const uploadedImage = await cloudinary.uploader.upload_large(req.body.mediaURL);
    const uploadedImageURL = uploadedImage.secure_url;
   const newMedia = await reviewMedia.create({
    Review: req.body.Review,
    mediaURL: uploadedImageURL, 
    Caption: req.body.Caption
   });
   console.log('created------------------------------------------------------------------------------------------', newMedia)
   ;
   res.end();
} catch (err) {
    console.log(err);
    res.end()
}})




   
   









module.exports = router