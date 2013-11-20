(function($){
	var initLayout = function() {
	
		var now = new Date();
		var day = now.getDate();
		var month = now.getMonth() + 1;
		var year = now.getFullYear();
		if (day < 10) day = '0' + String(day);
		if (month < 10) month = '0' + String(month);
		var today = day + '/' + month + '/' + year;
		
		$('.inputDate').each(function(elem) {
                    $(this).DatePicker({
                        format:'d/m/Y',
                        date: $('#inputDate').val(today),
                        current: $('#inputDate').val(),
                        starts: 1,
                        position: 'right',
                        onBeforeShow: function(){
                                $('#inputDate').DatePickerSetDate($('#inputDate').val(), true);
                        },
                        onChange: function(formated, dates){
                                $('#inputDate').val(formated);
                                if ($('#closeOnSelect input').attr('checked')) {
                                        $('#inputDate').DatePickerHide();
                                }
                        }
                    });
                });
	};	
	EYE.register(initLayout, 'init');
})(jQuery)
