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
				function open_subscribe_fn_lg() {
					subscribe.removeClass('animation-close-subscribe-lg animation-mode');
					subscribe.addClass('animation-open-subscribe-lg animation-mode');

					open_subscribe_button.removeClass('animation-subscribe-icon-show-lg animation-subscribe-icon-hide-lg animation-mode');
					open_subscribe_button.addClass('animation-subscribe-icon-hide-lg animation-mode');
					
					main.removeClass('animation-main-center-left-lg animation-main-left-center-lg animation-main-center-right-lg animation-main-right-center-lg animation-main-right-left-lg animation-main-left-right-lg animation-mode');
				}

			/**	CLOSE SUBSCRIBE LARGE SCREEN
			**************************************/
				function close_subscribe_fn_lg() {
					subscribe.removeClass('animation-open-subscribe-lg animation-mode');
					subscribe.addClass('animation-close-subscribe-lg animation-mode');

					open_subscribe_button.removeClass('animation-subscribe-icon-show-lg animation-subscribe-icon-hide-lg animation-mode');
					open_subscribe_button.addClass('animation-subscribe-icon-show-lg animation-mode');

					main.removeClass('animation-main-center-left-lg animation-main-left-center-lg animation-main-center-right-lg animation-main-right-center-lg animation-main-right-left-lg animation-main-left-right-lg animation-mode');
				}

			/**	OPEN CONTACT LARGE SCREEN			
			**************************************/
				function open_contact_fn_lg() {
					contact.removeClass('animation-close-contact-lg animation-mode');
					contact.addClass('animation-open-contact-lg animation-mode');

					open_contact_button.removeClass('animation-contact-icon-show-lg animation-contact-icon-hide-lg animation-mode');
					open_contact_button.addClass('animation-contact-icon-hide-lg animation-mode');
					
					main.removeClass('animation-main-center-left-lg animation-main-left-center-lg animation-main-center-right-lg animation-main-right-center-lg animation-main-right-left-lg animation-main-left-right-lg animation-mode');
				}

			/**	CLOSE CONTACT			
			**************************************/
				function close_contact_fn_lg() {
					contact.removeClass('animation-open-contact-lg animation-mode');
					contact.addClass('animation-close-contact-lg animation-mode');

					open_contact_button.removeClass('animation-contact-icon-show-lg animation-contact-icon-hide-lg animation-mode');
					open_contact_button.addClass('animation-contact-icon-show-lg animation-mode');

					main.removeClass('animation-main-center-left-lg animation-main-left-center-lg animation-main-center-right-lg animation-main-right-center-lg animation-main-right-left-lg animation-main-left-right-lg animation-mode');
				}

			/**	OPEN SUBSCRIBE TABLET			
			**************************************/
				function open_subscribe_fn_md() {
					subscribe.removeClass('animation-subscribe-show-md animation-subscribe-hide-md animation-mode');
					subscribe.addClass('animation-subscribe-show-md animation-mode');
				}

			/**	CLOSE SUBSCRIBE TABLET			
			**************************************/
				function close_subscribe_fn_md() {
					subscribe.removeClass('animation-subscribe-show-md animation-subscribe-hide-md animation-mode');
					subscribe.addClass('animation-subscribe-hide-md animation-mode');
				}

			/**	OPEN CONTACT TABLET			
			**************************************/
				function open_contact_fn_md() {
					contact.removeClass('animation-contact-show-md animation-contact-hide-md animation-mode');
					contact.addClass('animation-contact-show-md animation-mode');
				}

			/**	CLOSE CONTACT TABLET			
			**************************************/
				function close_contact_fn_md() {
					contact.removeClass('animation-contact-show-md animation-contact-hide-md animation-mode');
					contact.addClass('animation-contact-hide-md animation-mode');
				}
				
			/**	SHOW MAIN TABLET			
			**************************************/
				function show_main_fn_md() {
					main.removeClass('animation-main-hide-md animation-main-show-md animation-mode');
					main.addClass('animation-main-show-md animation-mode');
					open_contact_button.removeClass('animation-main-hide-md animation-main-show-md animation-mode');
					open_contact_button.addClass('animation-main-show-md animation-mode');
					open_subscribe_button.removeClass('animation-main-hide-md animation-main-show-md animation-mode');
					open_subscribe_button.addClass('animation-main-show-md animation-mode');
				}
				
			/**	HIDE MAIN TABLET			
			**************************************/
				function hide_main_fn_md() {
					main.removeClass('animation-main-hide-md animation-main-show-md animation-mode');
					main.addClass('animation-main-hide-md animation-mode');
					open_contact_button.removeClass('animation-main-hide-md animation-main-show-md animation-mode');
					open_contact_button.addClass('animation-main-hide-md animation-mode');
					open_subscribe_button.removeClass('animation-main-hide-md animation-main-show-md animation-mode');
					open_subscribe_button.addClass('animation-main-hide-md animation-mode');
				}

		/**************************************
			EVENTS
		*************************************/

			/**	OPEN SUBSCRIBE			
			**************************************/
				open_subscribe_icon.on('click', function() {

					if ( $(window).width() <= 992 ) {
						hide_main_fn_md();
						open_subscribe_fn_md();
					}

					if ( $(window).width() >= 992 ) {

						open_subscribe_fn_lg();

						if( contact.hasClass('animation-open-contact-lg')) {

							close_contact_fn_lg();

							main.addClass('animation-main-left-right-lg animation-mode');
						}

						if( !contact.hasClass('animation-open-contact-lg') ) {
							main.addClass('animation-main-center-right-lg animation-mode');
						};

					}

				});

			/**	CLOSE SUBSCRIBE			
			**************************************/
				close_subscribe_icon.on('click',function() {

					if ( $(window).width() <= 992 ) {
						show_main_fn_md();
						close_subscribe_fn_md()
					}

					if ( $(window).width() >= 992 ) {

						close_subscribe_fn_lg();

						if( subscribe.hasClass('animation-open-subscribe-lg') ) {

							main.addClass('animation-main-right-left-lg animation-mode');

						} else {
							main.addClass('animation-main-right-center-lg animation-mode');
						}

					}

				});

			/**	OPEN CONTACT			
			**************************************/
				open_contact_icon.on('click', function() {

					if ( $(window).width() <= 992 ) {
						hide_main_fn_md();
						open_contact_fn_md()
					}

					if ( $(window).width() >= 992 ) {

						open_contact_fn_lg();

						if( subscribe.hasClass('animation-open-subscribe-lg')) {

							close_subscribe_fn_lg();
							
							main.addClass('animation-main-right-left-lg animation-mode');
						}

						if( !subscribe.hasClass('animation-open-subscribe-lg') ) {
							main.addClass('animation-main-center-left-lg animation-mode');
						}

					}

				});

			/**	CLOSE CONTACT			
			**************************************/
				close_contact_icon.on('click',function() {

					if ( $(window).width() <= 992 ) {
						show_main_fn_md();
						close_contact_fn_md()
					}

					if ( $(window).width() >= 992 ) {

						close_contact_fn_lg();

						if( contact.hasClass('animation-open-contact-lg') ) {
							main.addClass('animation-main-left-right-lg animation-mode');
						} else {
							main.addClass('animation-main-left-center-lg animation-mode');
						}

					}

				});

	});

/******************************************************************
*******************************		2. HOVER ANIMATION
******************************************************************/
	
	$(document).ready(function() {
		
		var open_subscribe_button 	= $('#open-subscribe'),
			open_subscribe_icon		= $('.open-subscribe-icon'),
			open_subscribe_title	= $('.open-subscribe-title'),
			open_contact_button 	= $('#open-contact'),
			open_contact_icon 		= $('.open-contact-icon'),
			open_contact_title 		= $('.open-contact-title');

		open_subscribe_button.hover(function() {
			open_subscribe_title.css('opacity', 1);
			open_subscribe_icon.css('opacity', 0);
		}, function() {
			open_subscribe_title.css('opacity', 0);
			open_subscribe_icon.css('opacity', 1);
		});

		open_contact_button.hover(function() {
			open_contact_title.css('opacity', 1);
			open_contact_icon.css('opacity', 0);
		}, function() {
			open_contact_title.css('opacity', 0);
			open_contact_icon.css('opacity', 1);
		});

	});

/******************************************************************
*******************************		3. COUNTER
******************************************************************/

	// set the date we're counting down to
	var Month = counter.setMonth;
	var Day = counter.setDay;
	var Year = counter.setYear;
	var target_date = new Date(Month +','+ Day +','+ Year).getTime();
	 
	// variables for time units
	var days;
	 
	// get tag element
	var countdown = document.getElementsByClassName("countdown")[0];

	// update the tag with id "countdown" every 1 second
	setInterval(function () {
	 
	    // find the amount of "seconds" between now and target
	    var current_date = new Date().getTime();
	    var seconds_left = (target_date - current_date) / 1000;
	 
	    // do some time calculations
	    days = parseInt(seconds_left / 86400);
	     
	    // format countdown string + set tag value
	    countdown.innerHTML = days;
	 
	}, 1000);

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


