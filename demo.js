$(function(){
	var triceratops = new Filterable('triceratops');
	var buttons = [];
	var invert = $('<button>', {
		text : "Invert",
		click : function() {
			triceratops.applyFilter('invert');
		}
	});

	var desaturate = $('<button>', {
		text : "Desaturate",
		click : function() {
			triceratops.applyFilter('desaturate');
		}
	});

	var reset = $('<button>', {
		text : "Reset",
		click : function() {
			triceratops.applyFilter();
		}
	});

	var eightBit = $('<button>', {
		text : "Eight bit colour",
		click : function() {
			triceratops.applyFilter('eightBit');
		}
	});

	buttons.push(invert, desaturate, reset, eightBit);

	$('body').append(buttons);


});