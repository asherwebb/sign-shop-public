var FormValidator = require('./formValidator.js');
var Forms = require('./forms.js');
var LoadingUI = require('./loadingUI.js');

var attachHandler = {
	submitYmcaUserFormBtn: function(){
	$('#submit-ymca-form').click(function(e){
		e.preventDefault();
		LoadingUI.show();
		var isValid = FormValidator.processYmcaUserForm();
		!isValid ? LoadingUI.hide() : Forms.submitYmcaUserForm();
	});
	}
};

module.exports = attachHandler;