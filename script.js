function Presentation() {
	this.sidePane = document.getElementById("sidePannel");
	this.slideArray = [];
	var that = this;

	this.newSlide = document.getElementById("newSlideButton");
	this.newTitleSlide = document.getElementById("newTitleSlideButton");
	this.newContentSlide = document
			.getElementById("newTitleContentSlideButton");
	this.newTwoContentSlide = document
			.getElementById("newTwoContentSlideButton");
	this.newBlankSlide = document.getElementById("newBlankSlideButton");
	this.newPictureSlide = document.getElementById("newPictureSlideButton");
	

	this.init = function() {		
		that.newSlide.onclick = function() {
			return function() {
				var s = new TitleContentSlide(that);
				that.slideArray.push(s);
			};
		}();
		that.newTitleSlide.onclick = function() {
			return function() {
				var s = new TitleSlide(that);
				that.slideArray.push(s);				
			};
		}();
		that.newTwoContentSlide.onclick = function() {
			return function() {
				var s = new TwoContentSlide(that);
				that.slideArray.push(s);				
			};
		}();
		that.newBlankSlide.onclick = function() {
			return function() {
				var s = new BlankSlide(that);
				that.slideArray.push(s);				
			};
		}();
	};
	that.newPictureSlide.onclick = function() {
		return function() {
			var s = new PictureSlide(that);
			that.slideArray.push(s);			
		};
	}();
	that.newContentSlide.onclick = function() {
		return function() {
			var s = new TitleContentSlide(that);
			that.slideArray.push(s);				
			console.log(that.slideArray[that.slideArray.length - 1]);
		};
	}();	

	
	this.showSlide = function(slide) {
		//display slide for edit
	};
		

};

function TitleSlide(presentation) {
	var title;
	var text;
	
	this.presentation = presentation;
	var that = this;
	
	var thumb = document.createElement("div");
	thumb.className = "title-slide thumb";
	
	thumb.style.marginTop = "2px";
	thumb.style.height = "100px";
	thumb.style.width = "100px";
	thumb.style.lineHeight = "100px";
	thumb.style.textAlign = "center";
	thumb.style.fontFamily = "cursive,sans-serif";
	thumb.innerHTML = "Slide " + that.presentation.slideArray.length;
	that.presentation.sidePane.appendChild(thumb);
	console.log(that.presentation.slideArray[that.presentation.slideArray.length - 1]);
	
	thumb.onclick = function() {
		alert("thumb clicked");
		// something like that.presentation.showSlide(that);
	};

};

function TitleContentSlide(presentation) {
	var title;
	var text;
	
	this.presentation = presentation;
	var that = this;
	
	var thumb = document.createElement("div");
	thumb.className = "title-content thumb";
	
	thumb.style.marginTop = "2px";
	thumb.style.height = "100px";
	thumb.style.width = "100px";
	thumb.style.lineHeight = "100px";
	thumb.style.textAlign = "center";
	thumb.style.fontFamily = "cursive,sans-serif";
	thumb.innerHTML = "Slide " + that.presentation.slideArray.length;
	that.presentation.sidePane.appendChild(thumb);

	thumb.onclick = function() {
		alert("thumb clicked");
		// something like that.presentation.showSlide(that);
	};
}
function TwoContentSlide(presentation) {
	var title;
	var text;
	
	this.presentation = presentation;
	var that = this;
	
	var thumb = document.createElement("div");
	thumb.className = "two-content thumb";
	thumb.setAttribute("id", that.presentation.slideArray.length - 1);
	thumb.style.marginTop = "2px";
	thumb.style.height = "100px";
	thumb.style.width = "100px";
	thumb.style.lineHeight = "100px";
	thumb.style.textAlign = "center";
	thumb.style.fontFamily = "cursive,sans-serif";
	thumb.innerHTML = "Slide " + that.presentation.slideArray.length;
	that.presentation.sidePane.appendChild(thumb);
	console.log(that.presentation.slideArray[that.presentation.slideArray.length - 1]);
	
	thumb.onclick = function() {
		alert("thumb clicked");
		// something like that.presentation.showSlide(that);
	};

};
function BlankSlide(presentation) {
	var title;
	var text;
	
	this.presentation = presentation;
	var that = this;
	
	var thumb = document.createElement("div");
	thumb.className = "blank thumb";
	thumb.setAttribute("id", that.presentation.slideArray.length - 1);
	thumb.style.marginTop = "2px";
	thumb.style.height = "100px";
	thumb.style.width = "100px";
	thumb.style.lineHeight = "100px";
	thumb.style.textAlign = "center";
	thumb.style.fontFamily = "cursive,sans-serif";
	thumb.innerHTML = "Slide " + that.presentation.slideArray.length;
	that.presentation.sidePane.appendChild(thumb);
	console.log(that.presentation.slideArray[that.presentation.slideArray.length - 1]);
	
	thumb.onclick = function() {
		alert("thumb clicked");
		// something like that.presentation.showSlide(that);
	};

};
function PictureSlide(presentation) {
	var title;
	var text;
	
	this.presentation = presentation;
	var that = this;
	
	var thumb = document.createElement("div");
	thumb.className = "picture thumb";
	thumb.setAttribute("id", that.presentation.slideArray.length - 1);
	thumb.style.marginTop = "2px";
	thumb.style.height = "100px";
	thumb.style.width = "100px";
	thumb.style.lineHeight = "100px";
	thumb.style.textAlign = "center";
	thumb.style.fontFamily = "cursive,sans-serif";
	thumb.innerHTML = "Slide " + that.presentation.slideArray.length;
	that.presentation.sidePane.appendChild(thumb);
	console.log(that.presentation.slideArray[that.presentation.slideArray.length - 1]);

	thumb.onclick = function() {
		alert("thumb clicked");
		// something like that.presentation.showSlide(that);
	};
};
var start = new Presentation();
start.init();