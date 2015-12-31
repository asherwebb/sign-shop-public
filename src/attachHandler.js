var FormValidator = require('./formValidator.js');
var Forms = require('./forms.js');

var attachHandler = {
	submitYmcaUserFormBtn: function(){
	$('#ymcaUserForm').submit(function(e){
		e.preventDefault();
		var isValid = FormValidator.processYmcaUserForm();
		!isValid ? null : Forms.submitYmcaUserForm();
	});
	}
};

module.exports = attachHandler;