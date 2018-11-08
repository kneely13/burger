var express = require('express');
var connection = require("./burger.js");

//create router for app, export the router at the end of this file

//middleman between view and model. Connects the two together.

router.get("/", function (req, res) {
    orm.selectAll(function (err, burgers) {
        if (err){
            throw err
        }
        res.render("index", {burgers, style: 'index'});
    });
});

router.get("/all", function (req, res) {
    orm.selectAll(function (err, burgers) {
        if (err){
            throw err
        }
        res.render("index", {burgers, style: 'index'});
    });
});



router.post('/add', (req, res) => {
    const burgerName = req.body.burger_name;
});

router.post('/delete', (req, res) => {
    const burgerName = req.body.burger_name;
});

router.post('/all', (req, res) => {
    const burgerName = req.body.burgers;
});


//48:00 
//google example , type burger.js node.js

//.render and index 
module.exports= router;

