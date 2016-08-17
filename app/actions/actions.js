const dispatcher = require("../dispatcher");

module.exports = {
    addShow:function(data) {
        dispatcher.dispatch({
         	data: data,
        	type:"show:addShow"
        });
    }
}