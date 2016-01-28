var LoadingUI = require('./loadingUI.js');
var AttachHandler = require('./attachHandler.js');

var modalDisplay = {
	clear: function(){
		$('.modal-body').empty();
		$('.modal-title').empty();
	},
	init: function(title, message, footer){
		LoadingUI.hide();
		var footer = footer;
		var title = title;
		var message = message;
		$('#myModal').modal('show');
		$('.modal-body').append(message).append(footer);
		$('.modal-title').append(title);
		modalDisplay.attachHandler();
	},
	attachHandler: function(){
		$('.goToContract').click( function(e){
			e.preventDefault();
			window.location.href="YMCA-TRADEMARK-SUBLICENSE-AGREEMENT.html";
		});
	}
}

module.exports = modalDisplay;