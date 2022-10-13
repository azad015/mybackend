const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;

router.get("/assignment",function(req,res){
    res.send("this is my 1st api")
})