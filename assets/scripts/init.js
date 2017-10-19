
CNJS.Application = {

	init: function () {
		var self = this;
		// console.log('CNJS.Application.init');
		$.event.trigger('CNJS:Application:initialized');

		var $form = $('#TestForm');

		var validator = $form.validate({
			errorContainer: $('#error-message')
		});


	}

};

$(function () {
	CNJS.Application.init();
});
