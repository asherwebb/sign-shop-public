//ymca_form_user_data is parse class
//keep parse config keys out of github!!
var Config = require('./config.js');
var Parse = require('parse');

var forms = {
	submitYmcaUserForm: function(){
		// **** fields to send by id
		var ymca_corporate_name = $('#ymca_corporate_name').val(); //-input, parse string
		var ymca_corporate_number = $('#ymca_corporate_number').val(); //-input, parse string
		var state_of_incorporation = $('#state_of_incorporation').val(); //-select, parse string
		var corporate_address_line_one = $('#corporate_address_line_one').val(); //-input, 
		var corporate_city = $('#corporate_city').val(); //-input
		var corporate_state = $('#corporate_state').val(); //-select
		var corporate_zip = $('#corporate_zip').val(); //-input
		var ymca_branch_name = $('#ymca_branch_name').val(); //-input
		var phone_number = $('#phone_number').val(); //-input
		var name = $('#name').val(); //-input
		var email = $('#email').val(); //-input
		var title = $('#title').val(); //-input
		//terms_of_use_agreement_verified - auto-set to true(they have to have the agree btn clicked to proceed)
		var terms_of_use_agreement_verified = true;

		Parse.initialize( Config.PARSE_APP_ID, Config.PARSE_JS_KEY );
		var UserFormData = Parse.Object.extend("ymca_form_user_data");
		var userFormData = new UserFormData();
		userFormData.save({
			ymca_corporate_name: ymca_corporate_name,
			ymca_corporate_number: ymca_corporate_number,
			state_of_incorporation: state_of_incorporation,
			corporate_address_line_one: corporate_address_line_one,
			corporate_city: corporate_city,
			corporate_state: corporate_state,
			corporate_zip: corporate_zip,
			ymca_branch_name: ymca_branch_name,
			phone_number: phone_number,
			name: name,
			email: email,
			title: title,
			terms_of_use_agreement_verified: terms_of_use_agreement_verified
		 }, {
			success: function(userFormData){
				alert('success');
			},
			error: function(userFormData, error){
				alert('error');
			}	
		 });




	}
};

module.exports = forms;