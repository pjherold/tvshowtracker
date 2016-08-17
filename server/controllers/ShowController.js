var mongoose = require("mongoose");
var Show = require('../data/Models');
var _ =  require('underscore');

var router = require("express").Router();
router.route("/shows/:id?").get(getShows).post(addShow);

function getShows(request, response) {
    Show.find(function (err, shows) {
        if (err)
            response.send(err);
        else
            response.json(shows);
    });
}

function addShow(request, response) {
    var show = new Show(_.extend({}, request.body));
    show.save(function (err) {
        if (err)
            response.send(err);
        else
            response.json(show);
    });
}

module.exports = router;
