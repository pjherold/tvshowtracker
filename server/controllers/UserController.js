import mongoose from 'mongoose';
import User from '../data/Models';
import _ from 'underscore';

const router = require("express").Router();
router.route("/users/:id?").post(addUser);

function addUser(request, response) {
	let user = new User(_.extend({}, request.body));
    animal.save(function (err) {
        if (err)
            response.send(err);
        else
            response.json(animal);
    });
}

module.exports = router;
