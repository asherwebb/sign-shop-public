var Forms = require('./forms.js');

var attachHandler = {
	submitYmcaUserFormBtn: function(){
	$('#ymcaUserForm').submit(function(e){
		e.preventDefault();
		Forms.submitYmcaUserForm();
	});
	}
};

module.exports = attachHandler;