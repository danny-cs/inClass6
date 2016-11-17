$(function() {
	var backgroundColor = $('li:eq(0)').css('background-color');
	$('ul').append('<p>'+backgroundColor+'</p>');
	$('li').css({'background-color':'#c5a995','border-width':'1px','border-color':'white','border-style':'solid','text-color':'black','text-shadow':'none','text-font':'Georgia'});

});