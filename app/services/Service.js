const $ = require("jquery");
const promise = require("es6-promise");
const showUrl = "http://localhost:3000/api/shows";

module.exports = {
    addShow: function (show) {
        let Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: showUrl,
                data: JSON.stringify(show),
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject
            });
        });
    },
    getShows: function () {
        let Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: showUrl,
                method: "GET",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    },
}
