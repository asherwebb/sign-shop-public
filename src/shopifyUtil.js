
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

var config = require('./config.js');

var shopifyUtil = {
	init: function(){
		//send data to node.js server middleware
		//see what response is
	}
}
module.exports = shopifyUtil;