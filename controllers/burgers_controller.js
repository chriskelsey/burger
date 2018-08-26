var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
  	var hb = {
      burgers: data
    };
    res.render('index',hb);
  });
});

router.post('/api/burgers', function (req, res) {
    burger.insertOne([
        'burger_name'
    ], [
        req.body.burger_name
    ], function(result) {
        res.json({ id: result.insertId});
    });
});

router.put('/api/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            console.log('You took too long and someone ate your burger!');
        } else {
            console.log('Delicious!');
            res.json(result);

        }
    });
});

module.exports = router;

