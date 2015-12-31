
var modalDisplay = {
	clear: function(){
		$('.modal-body').empty();
		$('.modal-title').empty();
	},
	init: function(title, message){
		var title = title;
		var message = message;
		$('#myModal').modal('show');
		$('.modal-body').append(message);
		$('.modal-title').append(title);
	}
}

module.exports = modalDisplay;