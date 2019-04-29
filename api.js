//create an express app using a representational state transfer application programming interface
const express = require('express');
const router = express.Router();

//get the input from the interface
router.get('/input', function(req, res){
    res.send({type: 'GET'});
});