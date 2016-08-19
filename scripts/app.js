function ConfirmationPopup(redirectUrl) {

	// get the url for each button
	this.url = redirectUrl;
	this.el = $('#payment-popup');

	var self = this;

	// when this starts...
	this.initialize = function() {
		$(self.el).hide();
		// $('#popup').on('click', function() { ... }
	};
	// listen to the onclick button
	this.attachButtonListener = function() {

	};
	// render popup
	this.renderRedirectPopup = function() {
		$(self.el).fadeIn();
	};
	// hide popup
	this.hideRedirectPopup = function() {
		$(self.el).fadeOut();
	};
	// redirect from the popup
	this.redirect = function() {
		window.location = this.url;
		return;
	};

	// kickstart
	self.initialize();

};

$(document).ready(function(event) {

	var testPopup = new ConfirmationPopup('http://google.com');

	$('#show-popup').on('click', function(evt) {
		testPopup.renderRedirectPopup();
		$('.lightbox').addClass('on')
	});

	$('#no').on('click', function(evt) {
		testPopup.hideRedirectPopup();
		$('.lightbox').removeClass('on')
	});

	$('.lightbox').on('click', function(evt) {
		testPopup.hideRedirectPopup();
		$('.lightbox').removeClass('on')
	});




});