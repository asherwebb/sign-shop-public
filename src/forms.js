//ymca_form_user_data is parse class
//keep parse config keys out of github!!
var Config = require('./config.js');
var Parse = require('parse');
var ModalDisplay = require('./modalDisplay.js');
var Cloud = require('./cloud.js');
//Cloud.hasContractBeenSigned() - returns true or false based on parse.com

var forms = {
	submitYmcaUserForm: function(){
		//alert('submitYmcaUserForm');

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
		var fname = $('#fname').val(); //-input
		var lname = $('#lname').val();
		var email = $('#email').val(); //-input
		var title = $('#title').val(); //-input
		//terms_of_use_agreement_verified - auto-set to true(they have to have the agree btn clicked to proceed)
		var terms_of_use_agreement_verified = true;

		//build out 2 objects - the userFormData object and the node create account payload for the shopify api.
		//store them both in ls

		Parse.initialize( Config.PARSE_APP_ID, Config.PARSE_JS_KEY );
		//FIX ME: we need to make sure we do not have a duplicate email for that user object
		var UserFormQuery = Parse.Object.extend("ymca_form_user_data")
		var userFormQuery = new Parse.Query(UserFormQuery);
		userFormQuery.equalTo('email', email);
		userFormQuery.find({
			success: function(results){
				console.log(results.length);
				
				if( results.length === 0 ){
				
					createParseYMCAUserObject();

				}else{
					alert('Sorry that email is already taken. Please try again.');
					$('#email').val('');
					$('#email').css({"border":"1px solid red"});
					return;
				}
			},
			error: function(err){

			}
		});

		function createParseYMCAUserObject(){
				console.log('createParseYMCAUserObject fires');
		var UserFormData = Parse.Object.extend("ymca_form_user_data");
		var userFormData = new UserFormData();
		var parseData =	{
			ymca_corporate_name: ymca_corporate_name,
			ymca_corporate_number: ymca_corporate_number,
			state_of_incorporation: state_of_incorporation,
			corporate_address_line_one: corporate_address_line_one,
			corporate_city: corporate_city,
			corporate_state: corporate_state,
			corporate_zip: corporate_zip,
			ymca_branch_name: ymca_branch_name,
			phone_number: phone_number,
			name: fname + ' ' + lname,
			email: email,
			title: title,
			terms_of_use_agreement_verified: terms_of_use_agreement_verified
			};
		var shopifyData = {
  customer: {
    first_name: fname,
    last_name: lname,
    email: email,
    verified_email: true,
    addresses: [
      {
        address1: corporate_address_line_one,
        city: corporate_city,
        state: corporate_state,
        phone: phone_number,
        zip: corporate_zip,
        last_name: lname,
        first_name: fname,
        country: "US"
      }
    ],
    send_email_invite: true
  }
};
		var parseDataLS = JSON.stringify(parseData);
		localStorage.setItem( 'parseData' , parseDataLS );
		var shopifyDataLS = JSON.stringify(shopifyData);
		localStorage.setItem( 'shopifyData' , shopifyDataLS);

		userFormData.save(parseData, {
			success: function(object){
				//alert("user form data has been saved");
				// var message = 'Your information has been submitted.';
				// var title = '<span class="text-success">Checking records...</span>';
				
				
				Cloud.hasContractBeenSigned( ymca_corporate_number );
				
				


				forms.resetYmcaUserForm();
				//proceed to the dynamic corporate # check
				//if the corporate # already exists user does not have to sign the contract
				//if not the contract will be dynamically generate
			}.bind( this ),
			error: function(userFormData, error){
				var message = 'Error: ' + error.code + ' - Please check your network connection. If issues persist please contact support.';
				var title = '<span class="text-danger"> Submission Error </span>';
				//bootstrap modal
				ModalDisplay.clear();
				ModalDisplay.init(title, message);
				this.resetYmcaUserForm();
			}.bind( this )	
		 });
		}//createParseYMCAUserObject
	},
	resetYmcaUserForm: function(){
		//reset all values due to ajax error communicating with parse.
		$('#ymcaUserForm')[0].reset();
	}
};

module.exports = forms;