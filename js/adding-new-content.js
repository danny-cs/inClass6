$(function() {
	$('ul').before('<p>Just Updated</p>');
	$('li.hot').prepend(function() {
		return ('+');
	});
	$('li').last().after(function(){
		var newItem = ('<li> Brown Rice </li>');
		return newItem;
	});
		
});