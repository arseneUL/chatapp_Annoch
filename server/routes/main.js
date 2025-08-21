const express = require('express');
const router = express.Router();

//route
router.get('',(req, res) => {
    res.render('index');
});
router.get('/about' , (req,res) =>{
    res.render('about');

});
router.get('/contact',(req,res)=>{
    res.render('contact');
});
router.get('/chatapp',(req,res) =>{
    res.render('chatapp');
});
router.get('/setup',(req,res)=>{
    res.render('setup');
});

module.exports = router;