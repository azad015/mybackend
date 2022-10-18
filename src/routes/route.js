const express = require('express')
const router = express.Router()


router.get('/test-me', function(req,res){
    res.send('My first Api..!')
})

router.get('/movies', function(req,res){
     let moviesData = ["KGF","Pushpa","Avengers","Money Hiest"]
    res.send(moviesData)
})

router.get('/movie/:indexNumber', function(req,res){

  let myParams = req.params.indexNumber
  let moviesData1 = ["Rang de basanti","The shining", "Lord of the rings", "Batman begins"]
        if(myParams<0 || myParams>=moviesData1.length){
            return res.send("The Index Value is not found")
        }else {
            res.send(moviesData1[myParams])
        }
})


router.get("/films", function(req,res){
    const filmsName = [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]
       res.send(filmsName)
})

router.get("/films/:filmId", function(req,res){
    let filmId = req.params.filmId
    const filmsName = [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]

     for(let i=0; i<filmsName.length; i++){
       let index = filmsName[i]
       let id = index.id
       if(filmId==id){
        return res.send(index)
       }
     } res.send("No movie exists with this id")
})

module.exports = router