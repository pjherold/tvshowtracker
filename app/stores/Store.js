const dispatcher = require("../dispatcher");
const Service = require("../services/Service");

function Store() {
    let listeners = [];

    function onChange(listener) {
        getShows(listener);
        listeners.push(listener);
    }

    function getShows(listener) {
        Service.getShows().then(function (response) {
            listener(response);
        });
    }

    function addShow(show) {
        Service.addShow(show).then(function (response) {
            console.log(response);
            triggerListeners();
        })
    }

    function triggerListeners() {
        getShows(function (response) {
            listeners.forEach(function (listener) {
                listener(response);
            });
        });
    }

    dispatcher.register(function (payload) {
        let split = payload.type.split(":");
        if (split[0] === "show") {
            switch (split[1]) {
                case "addShow":
                    addShow(payload.data);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = Store();