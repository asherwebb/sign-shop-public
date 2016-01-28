var Parse = require('parse');
var AttachHandler = require('./attachHandler.js');

var App = {
	init: function(){
		App.attachEventHandlers();
	},
	attachEventHandlers: function(){
		AttachHandler.submitYmcaUserFormBtn();
	}

};

App.init();