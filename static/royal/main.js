/** ***************************************

	TABLE OF CONTENTS
	---------------------------
	 1. Slide Animation
	 	- Functions:
		 	- Open Subscribe On Large Screens
		 	- Close Subscribe On Large Screens
		 	- Open Contact On Large Screens
		 	- Close Contact On Large Screens
		 	- Open Subscribe On Tablets
		 	- Close Subscribe On Tablets
		 	- Open Contact On Tablets
		 	- Close Contact On Tablets
		 	- Show Main On Tablets
		 	- Hide Main On Tablets
		- Events:
	 		- Open Subscribe Button
	 		- Close Subscribe Button
	 		- Open Contact Button
	 		- Close Contact Button
	 2. Hover Animation
	 	- Open Subscribe
	 	- Close Subscribe
	 	- Open Contact
	 	- Close Contact
	 3. Counter
	 4. Subscribe Input Field
	 5. Subscribe Email Sending
	 6. Carousel

 **  ***************************************/

/******************************************************************
*******************************		1. SLIDE ANIMATION
******************************************************************/
	$(document).ready(function() {

		var subscribe 				= $('#subscribe'),
			contact   				= $('#contact'),
			main   	  				= $('#main'),
			close_subscribe 		= $('#close-subscribe'),
			close_contact 			= $('#close-contact'),
			open_subscribe_button 	= $('#open-subscribe'),
			open_subscribe_icon		= $('.icon-container-open-subscribe'),
			close_subscribe_button 	= $('#close-subscribe'),
			close_subscribe_icon	= $('.icon-container-close-subscribe'),
			open_contact_button 	= $('#open-contact'),
			open_contact_icon 		= $('.icon-container-open-contact'),
			close_contact_button 	= $('#close-contact'),
			close_contact_icon		= $('.icon-container-close-contact');

		/**************************************
			FUNCTIONS
		*************************************/

			/**	OPEN SUBSCRIBE LARGE SCREEN
			**************************************/
s

/******************************************************************
*******************************		2. HOVER ANIMATION
******************************************************************/

/******************************************************************
*******************************		3. COUNTER
******************************************************************/



/******************************************************************
*******************************		4. SUBSCRIBE INPUT FIELD
******************************************************************/

	/*!
	 * classie - class helper functions
	 * from bonzo https://github.com/ded/bonzo
	 *
	 * classie.has( elem, 'my-class' ) -> true/false
	 * classie.add( elem, 'my-new-class' )
	 * classie.remove( elem, 'my-unwanted-class' )
	 * classie.toggle( elem, 'my-class' )
	 */

	/*jshint browser: true, strict: true, undef: true */
	/*global define: false */

	( function( window ) {

	'use strict';

	// class helper functions from bonzo https://github.com/ded/bonzo

	function classReg( className ) {
	  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
	}

	// classList support for class management
	// altho to be fair, the api sucks because it won't accept multiple classes at once
	var hasClass, addClass, removeClass;

	if ( 'classList' in document.documentElement ) {
	  	hasClass = function( elem, c ) {
	    	return elem.classList.contains( c );
	  	};
	  	addClass = function( elem, c ) {
	    	elem.classList.add( c );
	  	};
	  	removeClass = function( elem, c ) {
	    	elem.classList.remove( c );
	  	};
	}
	else {
	  	hasClass = function( elem, c ) {
	    	return classReg( c ).test( elem.className );
	  	};
	  	addClass = function( elem, c ) {
	    	if ( !hasClass( elem, c ) ) {
	    		elem.className = elem.className + ' ' + c;
	    	}
	  	};
	  	removeClass = function( elem, c ) {
	    	elem.className = elem.className.replace( classReg( c ), ' ' );
	  	};
	}

	function toggleClass( elem, c ) {
	  	var fn = hasClass( elem, c ) ? removeClass : addClass;
	  	fn( elem, c );
	}

	var classie = {
		// full names
		hasClass: hasClass,
		addClass: addClass,
		removeClass: removeClass,
		toggleClass: toggleClass,
		// short names
		has: hasClass,
		add: addClass,
		remove: removeClass,
		toggle: toggleClass
	};

	// transport
	if ( typeof define === 'function' && define.amd ) {
	  	// AMD
	  	define( classie );
	} else {
	  	// browser global
	  	window.classie = classie;
	}

	})( window );

	(function() {

		// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
		if (!String.prototype.trim) {
			(function() {
				// Make sure we trim BOM and NBSP
				var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
				String.prototype.trim = function() {
					return this.replace(rtrim, '');
				};
			})();
		}

		[].slice.call( document.querySelectorAll( 'input.subscribe-email-field' ) ).forEach( function( inputEl ) {
			// in case the input is already filled..
			if( inputEl.value.trim() !== '' ) {
				classie.add( inputEl.parentNode, 'subscribe-email-field-on-focus' );
			}

			// events:
			inputEl.addEventListener( 'focus', onInputFocus );
			inputEl.addEventListener( 'blur', onInputBlur );
		} );

		function onInputFocus( ev ) {
			classie.add( ev.target.parentNode, 'subscribe-email-field-on-focus' );
		}

		function onInputBlur( ev ) {
			if( ev.target.value.trim() === '' ) {
				classie.remove( ev.target.parentNode, 'subscribe-email-field-on-focus' );
			}
		}

	})();

/******************************************************************
*******************************		5. SUBSCRIBE EMAIL SENDING
******************************************************************/

	$(document).ready(function() {

		// Event on submit subscribe form
		$('.submit-form-icon, .submit-mobile').on('click', function() {

			// Get value from input field
          	var email = $('.subscribe-email-field').val();

          	// Ajax request for sending mails
            $.ajax({
				type: 'POST',
				url: 'assets/subscribe.php',
				data: {
					// Field value
					email: email,
					// Mailchimp api key
					api_key: subscribe.apiKey,
					// Mailchimp list id
					list_id: subscribe.listID,
					// Server success message
					success_msg: subscribe.successMsg,
					// Server error message
					error_msg: subscribe.errorMsg
				},
				dataType: 'json',
				success: function(json) {
	                if(json.valid === 0) {
	                	// Set response text below field
	                	$('.subscribe-response').text( json.error);
	                }
	                else {
	                	// Set response text below field
	                  	$('.subscribe-response').text(json.message);
	                }
              	},
              	error: function (jqXHR, textStatus, errorThrown) {
                    console.log(textStatus, errorThrown);
                }

          });

          return false;

        });

	});

/******************************************************************
*******************************		6. CAROUSEL
******************************************************************/

	$('.carousel').carousel({
		interval: carousel.interval,
		keyboard: carousel.keyboard,
		pause: carousel.pause,
		ride: carousel.ride,
		wrap: carousel.wrap
		}
	);
