var formValidator = {
	processYmcaUserForm: function(){
		//make sure state fields have selected val
		//note required is used as html5 attribute, these selects contain '-'
		var corporate_state = $('#corporate_state').val();
		var state_of_incorporation = $('#state_of_incorporation').val();

		if( state_of_incorporation === '-' ){
			alert('Please select the State of Incorporporation');
			$('#state_of_incorporation').css('border' , '1px solid red');
			return false;
		}

		if(corporate_state === '-'){
			alert('Please select the State');
			$('#corporate_state').css('border' , '1px solid red');
			return false
		}

		if(corporate_state !== '-' && state_of_incorporation !== '-' ){
			return true;
		}

	}
};

module.exports = formValidator;