var Spinner = require('spin');

var loadingUI = {
	show: function(){
	var spinner = new Spinner({color:'#fff', lines: 12});
	var target = document.getElementById('user-form-spin-target');
	spinner.spin(target);
	},
	hide: function(){

	}
};

module.exports = loadingUI;