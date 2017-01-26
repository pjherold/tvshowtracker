var mongoose = require("mongoose");
var Shows = require('../Models').Shows;
var _ =  require('underscore');

const KEY = '85d5492a57cd182c84783715cdb18428d855e1';

var router = require("express").Router();
router.route("/shows/:id?").get(getShows).post(addShow);

function getShows(request, response) {
    Shows.find(function (err, shows) {
        if (err)
            response.send(err);
        else
            response.json(shows);
    });
}

function addShow(request, response) {
    var show = new Shows(_.extend({}, request.body));
    show.save(function (err) {
        if (err)
            response.send(err);
        else
            response.json(show);
    });
}

module.exports = router;
