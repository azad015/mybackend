const express = require('express');
const router = express.Router();
const logger = require("../logger/logger.js")
const util = require("../util/helper")
const validator = require("../validator/formate.js")

router.get('/test-me', function (req, res) {
console.log(logger.publicName())
console.log(util.currentDate())
// console.log(util.currentMonth())
console.log(util.batch())
console.log(validator.trimCase())
console.log(validator.smallLatter())
console.log(validator.capitalLatter())


const arr =["January","February","March","April","May","June","July","August","September","October","November","December"]
const arr1=arr.chun

console.log(arr1)


    res.send('My first ever api!')
});
module.exports = router;