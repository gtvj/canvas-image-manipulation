// Constructor of Filterable objects
var Filterable = function(id) {
	this.canvas = undefined;
	this.ctx = undefined;
	this.originalImageData = undefined;
	this.sourceImage = this.setSourceImage(id);
	this.initialize(); // Initializes 
};


Filterable.prototype.applyFilter = function(filter) {
	'use strict';
	var imgData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
	var filteredData;
	switch(filter) {
		case "invert":
			filteredData = this.invert(imgData);
			break;
		case "desaturate":
			filteredData = this.desaturate(imgData);
			break;
		case "eightBit":
			filteredData = this.eightBit(imgData);
			break;
		default: 
			filteredData = this.reset();
			break;
	}
	this.ctx.putImageData(filteredData, 0, 0);	
};

Filterable.prototype.setSourceImage = function(id) {
	'use strict';
	try {
		if(typeof id === "string") {
			var k = document.getElementById(id);
			if(k.nodeName === "IMG") { // Will throw an error if no nodeName is found
				return k;
			} else {
				throw new Error("Filterable constructor requires string that references an existing IMG element ID");
			}
		} else {
			throw new Error("Filterable constructor requires a string argument");
		}
	} catch (error) {
		console.log(error.message);
	}
};

Filterable.prototype.createCanvas = function() {
	'use strict';
	this.canvas = document.createElement('canvas');
	this.canvas.width = this.sourceImage.width;
	this.canvas.height = this.sourceImage.height;
};

Filterable.prototype.createContext = function() {
	'use strict';
	this.ctx = this.canvas.getContext('2d'); 
	this.ctx.drawImage(this.sourceImage, 0, 0);
	this.cacheOriginalImageData();
};

Filterable.prototype.cacheOriginalImageData = function() {
	'use strict';
	this.originalImageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
};

Filterable.prototype.canvasToDom = function() {
	'use strict';
	document.body.appendChild(this.canvas);
};

Filterable.prototype.reset = function() {
	'use strict';
	return this.originalImageData;
};

Filterable.prototype.desaturate = function(imgData) { 
	'use strict';
	// Important note: data is a REFERENCE to imageData.data
	var data = imgData.data;
	for (var i = 0; i < data.length; i += 4) {
		var average = (data[i] + data[i + 1] + data[i + 2]) / 3;
		data[i] = average;
		data[i + 1] = average;
		data[i + 2] = average;
		// No change is made to alpha
	}
	return imgData;
};

Filterable.prototype.invert = function(imgData) {
	'use strict';
	var data = imgData.data;
	for (var i = 0; i < data.length; i += 4) {
		data[i] = 255 - data[i];
		data[i + 1] = 255 - data[i + 1];
		data[i + 2] = 255 - data[i + 2];
		// No change is made to alpha
	}
	return imgData;	
};

Filterable.prototype.eightBit = function(imgData) {
	'use strict';
	var data = imgData.data;
	for (var i = 0; i < data.length; i += 4) {
		data[i] = data[i] - (data[i] % 32);
		data[i + 1] = data[i + 1] - (data[i + 1] % 32);
		data[i + 2] = data[i + 2] - (data[i + 2] % 32);
		// No change is made to alpha
	}
	return imgData;	
};
Filterable.prototype.initialize = function() {
	'use strict';
	this.createCanvas();
	this.createContext();
	this.canvasToDom();
};