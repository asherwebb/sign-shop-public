
// ############# ****     I N T E R F A C E  W I T H  S H O P I F Y  C U S T O M E R  A P I *** ##### 
// ############# ************ 	https://docs.shopify.com/api/customer	*** ##### *** ##### *** #####
// ############# ************ 	create a user in shopfiy 				*** ##### *** ##### *** #####
// ############# ************ 	use users registration details 			*** ##### *** ##### *** #####
// ############# ************ 	store created password					*** ##### *** ##### *** #####
// ############# ************ 	email that to users via middleware		*** ##### *** ##### *** #####
// ############# ************ 	seamlessly login (hopefully)   			*** ##### *** ##### *** #####
// ############# ************   https://www.npmjs.com/package/shopify-node-api	  *** ##### *** #####
// ############# ************ https://docs.shopify.com/api/uiintegrations/application-proxies * #####
// https://www.shopify.com/partners/blog/16603843-5-things-we-learned-creating-our-first-shopify-app#
//

var ModalDisplay = require('./modalDisplay.js');

var shopifyUtil = {
	accountCreate: function(){
				var data = localStorage.getItem('shopifyData');

					
					var url = 'http://107.170.181.44:8080/create-account';
					$.ajax({
						url:url,
						data:data,
						type:'post',
						contentType: "application/json",
						success: function(result){
							console.log(result);
						},
						error: function(error){
							alert('Error processing request');
						}
					});
					//end send to node
					ModalDisplay.init('Success', 'Notification Sent!', '<p>To complete your account setup please check your email for a registration link</p>');

	}
};
module.exports = shopifyUtil;