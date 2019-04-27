/*
USE RES.SEND TO SEND INPUT FROM FRONT END TO BACK END!!!!!

*/
const express = require('express');
const app = express();
const port = process.env.PORT || 5500;
const dic = require('./data.js')

app.get('/', function (req, res) {
    if (req.query.user) {
    const userName = req.query.user;
   // res.send('Its a Party!' + userName);
   // res.send(req);
    //console.log(userName);
    res.send(`Hello ${userName}!`);
    } else { 
        res.send(`Hello!`);
    }
});

app.use(express.static('public'));

app.get('/public/index', function (req, res) {
    res.render('index', {});
    function runSpellcheck() {
        var sub = document.getElementById("res-div");
        sub.setAttribute("class", "sub-containers");
var input = document.getElementById("textField").value;

var result = document.getElementById("result");


    function inArray(input, dic) {
        var length = dic.length;
        for(var i = 0; i < dic.length; i++) {
            if(dic[i] == input)
            result.innerHTML = input + " is a word."
                return true;
        }
        result.innerHTML = input + " is a word."
        return false;
    }
}
//include onsubmit function to assign value to textfield to a variable


  });

app.listen(port, () => console.log(`App listening on port ${port}!`)); 