var FormValidator = require('./formValidator.js');
var Forms = require('./forms.js');
var LoadingUI = require('./loadingUI.js');

var attachHandler = {
	submitYmcaUserFormBtn: function(){
	$('#ymcaUserForm').submit(function(e){
		e.preventDefault();
		LoadingUI.show();
		var isValid = FormValidator.processYmcaUserForm();
		!isValid ? LoadingUI.hide() : Forms.submitYmcaUserForm();
	});
	}
};

module.exports = attachHandler;