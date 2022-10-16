const express = require('express');
const router = express.Router();
const logger = require("../logger/logger.js")
const util = require("../util/helper")
const validator = require("../validator/formate.js")
const lodash = require("lodash")


router.get('/test-me', function (req, res) {
console.log(logger.publicName())
console.log("curretnDate: " ,util.currentDate())
console.log("currentMonth: ",util.currentMonth())
console.log(util.batch())
console.log("trimFunction: ",validator.trimCase())
console.log("lowerCase: ",validator.smallLatter())
console.log("upperCase: ",validator.capitalLatter())


const arr =["January","February","March","April","May","June","July","August","September","October","November","December"]
const arr1=lodash.chunk(arr,3)
console.log("Month: ",arr1)


const arr2 = [1,3,5,7,9,11,13,15,17,19]
const newArry = lodash.tail(arr2)
console.log("tailFunction: ",newArry)

const myArry = [[1,2,1,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]]
const myArry2 = lodash.union(myArry)
console.log("unionFunction: ",myArry2)

const myArry3 = [{axenMovei:"Avengr"},]

    res.send('My first ever api!')
});
module.exports = router;



