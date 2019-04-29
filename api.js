//create an express app using a representational state transfer application programming interface
const express = require('express');
const router = express.Router();

//get the input from the interface???
router.get('/getInput', function(req, res){
    res.send({type: 'GET'});
});

//OR update the input??
router.post('/postInput', function(req, res){
    res.send({type: 'POST'});
});

//get list of words from the data
router.get('/data', function(req, res){
    res.rend({type: 'GET'});

});


//update a word to the data
router.post('/data/:dic', function(req, res){
    res.send({type: 'POST'});
});

//DELETE word from database
router.delete('/data/:dic', function(req, res){
    res.send({type: 'DELETE'});
});