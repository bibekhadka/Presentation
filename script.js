function Presentation() {
	this.sidePane = document.getElementById("sidePannel");
	this.editPane = document.getElementById("editPannel");
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

	this.newBlackDesign = document.getElementById("newBlackDesignButton");
	this.allthumbs = document.getElementsByClassName("thumb");

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
			};
		}();		
	};

	this.showSlide = function(slide) {
		this.slide = slide;
		var that = this;

		if (that.slide.presentation.editPane.hasChildNodes()) { // to remove
			// previously
			// displayed
			// element
			that.slide.presentation.editPane
					.removeChild(that.slide.presentation.editPane.firstChild);
		}
		var editSlide = document.createElement("div");
		editSlide.id = "slide-edit";
		editSlide.style.backgroundColor = that.slide.displayJson.backgroundColor;
		editSlide.style.marginTop = that.slide.displayJson.marginTop;
		editSlide.style.marginLeft = that.slide.displayJson.marginLeft;
		editSlide.style.height = that.slide.displayJson.height;
		editSlide.style.width = that.slide.displayJson.width;
		editSlide.style.boxShadow = that.slide.displayJson.boxShadow;
		editSlide.style.fontFamily = that.slide.displayJson.fontFamily;
		slide.presentation.editPane.appendChild(editSlide);
		if (that.slide.displayJson.content) { // if not blank slide
			for ( var i = 0; i < that.slide.displayJson.content.length; i++) {
				var slideContent = document.createElement("textarea");
				slideContent.className = "text-area";
				slideContent.style.backgroundColor = that.slide.displayJson.content[i].backgroundColor;
				slideContent.style.marginTop = that.slide.displayJson.content[i].marginTop;
				slideContent.style.marginLeft = that.slide.displayJson.content[i].marginLeft;
				slideContent.style.height = that.slide.displayJson.content[i].height;
				slideContent.style.width = that.slide.displayJson.content[i].width;
				slideContent.style.textAlign = that.slide.displayJson.content[i].textAlign;
				slideContent.style.lineHeight = that.slide.displayJson.content[i].lineHeight;
				// slideContent.style.position="absolute";
				slideContent.placeholder = that.slide.displayJson.content[i].text;
				slideContent.style.fontFamily = that.slide.displayJson.content[i].fontFamily;
				editSlide.appendChild(slideContent);
				var submitButton = document.createElement("div");
				submitButton.className = "submit-button";
				submitButton.innerHTML = "Save Change";
				submitButton.style.padding = "5px";
				submitButton.style.border = "2px solid grey";
				submitButton.style.backgroundColor = "#EEEEEE";
				submitButton.style.lineHeight = "20px";
				submitButton.style.marginLeft = that.slide.displayJson.content[i].marginLeft;
				submitButton.style.width = "100px";
				submitButton.style.cursor = "pointer";
				editSlide.appendChild(submitButton);

			}
		}
		// display slide for edit
	};
	this.editSlideText = function(slide) {
		this.slide = slide;
		var that = this;
		var textAreas = document.getElementsByClassName("text-area");
		var submitButtons = document.getElementsByClassName("submit-button");
		for ( var i = 0; i < textAreas.length; i++) {
			var submit = submitButtons[i];
			var area = textAreas[i];
			var slideContent = that.slide.displayJson.content[i];
			submit.onclick = function(slideValue, text) {
				return function() {
					if (that.slide.displayJson.content) {
						slideValue.text = text.value;
					}
				};
			}(slideContent, area);
		}
		that.slide.presentation.debugContents(); // to check the change in
		// slide
		// contents
	};
	this.debugContents = function() {
		for ( var i = 0; i < that.slideArray.length; i++) {
			var slide = that.slideArray[i];
			if (slide.displayJson.content) {
				for ( var j = 0; j < slide.displayJson.content.length; j++) {
					console.log(slide.displayJson.content[j].text);
				}
			}
		}
	};

};

function TitleSlide(presentation) {
	this.displayJson = {
		height : "530px",
		width : "700px",
		marginTop : "20px",
		marginLeft : "180px",
		backgroundColor : "#FFFFFF",
		boxShadow : "10px 10px 10px #888888",
		fontFamily : "cursive,sans-serif",
		content : [ {
			text : "Click to add title",
			height : "120px",
			width : "600px",
			marginTop : "165px",
			marginLeft : "55px",
			backgroundColor : "#FFFFFF",
			fontFamily : "cursive,sans-serif",
			textAlign : "center",
			lineHeight : "120px"
		},

		{
			text : "Click to add subtitle",
			height : "135px",
			width : "500px",
			marginTop : "20px",
			marginLeft : "100px",
			backgroundColor : "#FFFFFF",
			fontFamily : "cursive,sans-serif",
			textAlign : "center",
			lineHeight : "135px"
		} ]

	};

	this.presentation = presentation;
	var that = this;

	var thumb = document.createElement("div");
	thumb.className = "title-slide thumb";

	thumb.style.marginTop = "2px";
	thumb.style.height = "100px";
	thumb.style.width = "100px";
	thumb.style.cursor = "pointer";
	thumb.style.lineHeight = "100px";
	thumb.style.textAlign = "center";
	thumb.style.fontFamily = "cursive,sans-serif";
	thumb.innerHTML = "Slide " + that.presentation.slideArray.length;
	that.presentation.sidePane.appendChild(thumb);
	
	that.presentation.newBlackDesign.onclick = function() {
		return function() {
			console.log("apply black design" );
		};
	}();

	thumb.onclick = function() {
		for ( var i = 0; i < that.presentation.allthumbs.length; i++) { // to
			// make
			// all
			// other
			// non
			// selected
			// thumbs
			// have
			// the
			// same
			// background
			// color
			that.presentation.allthumbs[i].style.backgroundColor = "#C4C8CD";
		}
		thumb.style.backgroundColor = "#FFE48A"; // to make the selected
		// thumb have the background
		// color yellow
		// alert("thumb clicked");
		that.presentation.showSlide(that);
		that.presentation.editSlideText(that);
	};

};

function TitleContentSlide(presentation) {
	this.displayJson = {
		height : "530px",
		width : "700px",
		marginTop : "20px",
		marginLeft : "180px",
		backgroundColor : "#FFFFFF",
		boxShadow : "10px 10px 10px #888888",
		fontFamily : "cursive,sans-serif",
		content : [ {
			text : "Click to add title",
			height : "90px",
			width : "640px",
			marginTop : "20px",
			marginLeft : "40px",
			backgroundColor : "#FFFFFF",
			fontFamily : "cursive,sans-serif",
			textAlign : "center",
			lineHeight : "90px"
		},

		{
			text : "Click to add text",
			height : "350px",
			width : "640px",
			marginTop : "20px",
			marginLeft : "40px",
			backgroundColor : "#FFFFFF",
			fontFamily : "cursive,sans-serif",
			textAlign : "justified",
			lineHeight : "30px"
		} ]

	};

	this.presentation = presentation;
	var that = this;

	var thumb = document.createElement("div");
	thumb.className = "title-content thumb";

	thumb.style.marginTop = "2px";
	thumb.style.height = "100px";
	thumb.style.width = "100px";
	thumb.style.cursor = "pointer";
	thumb.style.lineHeight = "100px";
	thumb.style.textAlign = "center";
	thumb.style.fontFamily = "cursive,sans-serif";
	thumb.innerHTML = "Slide " + that.presentation.slideArray.length;
	that.presentation.sidePane.appendChild(thumb);
	
	that.presentation.newBlackDesign.onclick = function() {
		return function() {
			console.log("apply black design" );
		};
	}();

	thumb.onclick = function() {
		for ( var i = 0; i < that.presentation.allthumbs.length; i++) { // to
			// make
			// all
			// other
			// non
			// selected
			// thumbs
			// have
			// the
			// same
			// background
			// color
			that.presentation.allthumbs[i].style.backgroundColor = "#C4C8CD";
		}
		thumb.style.backgroundColor = "#FFE48A"; // to make the selected
		// thumb have the background
		// color yellow
		// alert("thumb clicked");
		that.presentation.showSlide(that);
		that.presentation.editSlideText(that);
	};
};
function TwoContentSlide(presentation) {
	this.displayJson = {
		height : "530px",
		width : "700px",
		marginTop : "20px",
		marginLeft : "180px",
		backgroundColor : "#FFFFFF",
		boxShadow : "10px 10px 10px #888888",
		fontFamily : "cursive,sans-serif",
		content : [ {
			text : "Click to add title",
			height : "90px",
			width : "640px",
			marginTop : "20px",
			marginLeft : "40px",
			backgroundColor : "#FFFFFF",
			fontFamily : "cursive,sans-serif",
			textAlign : "center",
			lineHeight : "90px"
		},

		{
			text : "Click to add text",
			height : "350px",
			width : "310px",
			marginTop : "20px",
			marginLeft : "40px",
			backgroundColor : "#FFFFFF",
			fontFamily : "cursive,sans-serif",
			textAlign : "justified",
			lineHeight : "30px"
		}, {
			text : "Click to add text",
			height : "350px",
			width : "310px",
			marginTop : "20px",
			marginLeft : "15px",
			backgroundColor : "#FFFFFF",
			fontFamily : "cursive,sans-serif",
			textAlign : "justified",
			lineHeight : "30px"
		} ]

	};

	this.presentation = presentation;
	var that = this;

	var thumb = document.createElement("div");
	thumb.className = "two-content thumb";
	thumb.setAttribute("id", that.presentation.slideArray.length - 1);
	thumb.style.marginTop = "2px";
	thumb.style.height = "100px";
	thumb.style.width = "100px";
	thumb.style.cursor = "pointer";
	thumb.style.lineHeight = "100px";
	thumb.style.textAlign = "center";
	thumb.style.fontFamily = "cursive,sans-serif";
	thumb.innerHTML = "Slide " + that.presentation.slideArray.length;
	that.presentation.sidePane.appendChild(thumb);
	
	that.presentation.newBlackDesign.onclick = function() {
		return function() {
			console.log("apply black design" );
		};
	}();
	
	thumb.onclick = function() {
		for ( var i = 0; i < that.presentation.allthumbs.length; i++) { // to
			// make
			// all
			// other
			// non
			// selected
			// thumbs
			// have
			// the
			// same
			// background
			// color
			that.presentation.allthumbs[i].style.backgroundColor = "#C4C8CD";
		}
		thumb.style.backgroundColor = "#FFE48A"; // to make the selected
		// thumb have the background
		// color yellow
		// alert("thumb clicked");
		that.presentation.showSlide(that);
		that.presentation.editSlideText(that);
	};

};
function BlankSlide(presentation) {
	this.displayJson = {
		height : "530px",
		width : "700px",
		marginTop : "20px",
		marginLeft : "180px",
		backgroundColor : "#FFFFFF",
		boxShadow : "10px 10px 10px #888888",
		fontFamily : "cursive,sans-serif"
	};

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
	
	that.presentation.newBlackDesign.onclick = function() {
		return function() {
			console.log("apply black design" );
		};
	}();
	
	thumb.onclick = function() {
		for ( var i = 0; i < that.presentation.allthumbs.length; i++) { // to
			// make
			// all
			// other
			// non
			// selected
			// thumbs
			// have
			// the
			// same
			// background
			// color
			that.presentation.allthumbs[i].style.backgroundColor = "#C4C8CD";
		}
		thumb.style.backgroundColor = "#FFE48A"; // to make the selected
		// thumb have the background
		// color yellow
		// alert("thumb clicked");
		that.presentation.showSlide(that);
		that.presentation.editSlideText(that);
	};

};
function PictureSlide(presentation) {
	this.displayJson = {
		height : "530px",
		width : "700px",
		marginTop : "20px",
		marginLeft : "180px",
		backgroundColor : "#FFFFFF",
		boxShadow : "10px 10px 10px #888888",
		fontFamily : "cursive,sans-serif",
		content : [ {
			text : "Click to add picture",
			height : "315px",
			width : "420px",
			marginTop : "50px",
			marginLeft : "140px",
			backgroundColor : "#FFFFFF",
			fontFamily : "cursive,sans-serif",
			textAlign : "justified",
			lineHeight : "90px"
		},

		{
			text : "Click to add title",
			height : "45px",
			width : "420px",
			marginTop : "5px",
			marginLeft : "140px",
			backgroundColor : "#FFFFFF",
			fontFamily : "cursive,sans-serif",
			textAlign : "justified",
			lineHeight : "30px"
		}, {
			text : "Click to add text",
			height : "50px",
			width : "420px",
			marginTop : "5px",
			marginLeft : "140px",
			backgroundColor : "#FFFFFF",
			fontFamily : "cursive,sans-serif",
			textAlign : "justified",
			lineHeight : "30px"
		} ]

	};

	this.presentation = presentation;
	var that = this;

	var thumb = document.createElement("div");
	thumb.className = "picture thumb";
	thumb.setAttribute("id", that.presentation.slideArray.length - 1);
	thumb.style.marginTop = "2px";
	thumb.style.height = "100px";
	thumb.style.width = "100px";
	thumb.style.cursor = "pointer";
	thumb.style.lineHeight = "100px";
	thumb.style.textAlign = "center";
	thumb.style.fontFamily = "cursive,sans-serif";
	thumb.innerHTML = "Slide " + that.presentation.slideArray.length;
	that.presentation.sidePane.appendChild(thumb);
	
	that.presentation.newBlackDesign.onclick = function() {
		return function() {
			console.log("apply black design" );
		};
	}();
	
	thumb.onclick = function() {
		for ( var i = 0; i < that.presentation.allthumbs.length; i++) { // to
			// make
			// all
			// other
			// non
			// selected
			// thumbs
			// have
			// the
			// same
			// background
			// color
			that.presentation.allthumbs[i].style.backgroundColor = "#C4C8CD";
		}
		thumb.style.backgroundColor = "#FFE48A"; // to make the selected
		// thumb have the background
		// color yellow
		// alert("thumb clicked");
		that.presentation.showSlide(that);
		// that.presentation.editSlideText(that);
	};
};
var start = new Presentation();
start.init();