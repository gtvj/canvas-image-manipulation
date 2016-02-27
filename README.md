# Image manipulation with canvas

Micro library that allows for a manipulable HTML5 canvas to be created from bitmap images (that are included in the page as standard HTML elements). There is no dependency on other libraries. Initially, these manipulations are limited to image filters (grayscale etc.) but the micro library is structured for additional manipulations to be used Usage is quite simple: 

* For each image that you would like to manipulate create a new instance of the Filterable() constructor, like so: var filterable = new Filterable('id')
* Having instantiated a Filterable object you can call its applyFilter() method passing in a string representing the name of the filter you would like to use, like so filterable.applyfilter('invert');
* These filters can be applied in sequence, allowing, for example a desaturated image to be inverted. 
* The user can revert the canvas to its original state by callin applyFilter() with no arguments passed to it. 

## Demo 
A demonstration of the library can be found in index.htm. This uses jQuery to create a number of buttons which demonstrate available filters. Note: the core library has no dependency on jQuery. It is used here only for ease of demonstration. 

## Unit tests
Unit tests can be run from unit-tests.htm. The tests are in unit-tests.js

## Grunt
There's a Gruntfile.js for linting, compiling SASS etc.
