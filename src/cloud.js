var Config = require('./config.js');
var Parse = require('parse');
var ModalDisplay = require('./modalDisplay.js');
var ShopifyUtil = require('./shopifyUtil');
var cloud = {
	hasContractBeenSigned: function( organizationId ){
		var organizationId = organizationId;
		Parse.initialize(Config.PARSE_APP_ID, Config.PARSE_JS_KEY);
		var FormData = Parse.Object.extend('ymca_form_user_data');
		var query = new Parse.Query(FormData);
		query.equalTo('ymca_corporate_number', organizationId);
		query.equalTo('contract_signee' , true);
		query.find({
			success: function(results){		
				ModalDisplay.clear();
				if( results.length > 0 ){
					ShopifyUtil.accountCreate();
					
				}else{
					ModalDisplay.init('Contract', 'No one from your organization has signed our contract agreement. You will need to sign the contract digitally before proceeding. ',' <br /> <button class="goToContract btn btn-default">Go to Contract</button>');
				}
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