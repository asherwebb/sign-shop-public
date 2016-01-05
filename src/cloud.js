var Config = require('./config.js');
var Parse = require('parse');
var ModalDisplay = require('./modalDisplay.js')
var cloud = {
	hasContractBeenSigned: function( organizationId ){
		console.log('hasContractBeenSigned?');
		var organizationId = organizationId;
		Parse.initialize(Config.PARSE_APP_ID, Config.PARSE_JS_KEY);
		var FormData = Parse.Object.extend('ymca_form_user_data');
		var query = new Parse.Query(FormData);
		query.equalTo('ymca_corporate_number', organizationId);
		query.find({
			success: function(results){
				//alert('success');
				console.log(results);
				ModalDisplay.clear();
				console.log(results.length);
				if( results.length > 1 ){
					ModalDisplay.init('proceed', 'someone from your organization has signed the contract');
				}else{
					ModalDisplay.init('stop', 'you need to sign the contract before proceeding');
				}
				//1 means no match (user signed up in parse first)
				//greater than 1 means someone has already signed it
				//if it is less than 1 there is an error - should not be possible in success fn
			}.bind(this),
			error: function(results, error){
				alert('error');
				//FIX ME - need an errorDisplay.js file to process all errors
				//error.message
				//error.code
			}.bind(this)
		});
	}
}

module.exports = cloud;