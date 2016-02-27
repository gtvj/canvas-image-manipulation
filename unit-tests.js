module("Testing the Filterable constructor");

test( "Filterable is a function", function() {
	equal( typeof Filterable, "function", "Filterable is a function" );  
});

test( "An instantiated Filterable should have a setSourceImage property which is a function", function() {
	equal( typeof filterable.setSourceImage, "function", "Filterable.setSourceImage is a function" );  
});

test( "An instantiated Filterable object should have a sourceImage property", function() {
	ok( filterable.sourceImage, "Fail" );  
});

test( "An instantiated Filterable object should have a createCanvas property which is a function", function() {
	equal( typeof filterable.createCanvas, "function", "Filterable.createCanvas is a function");
});

test( "", function() {
	equal( true, true, "");
});

test( "", function() {
	ok( true, "");
});