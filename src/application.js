var Parse = require('parse');
var AttachHandler = require('./attachHandler.js');

var App = {
	init: function(){
		this.attachEventHandlers();
	},
	attachEventHandlers: function(){
		AttachHandler.submitYmcaUserFormBtn();
	}

};

App.init();