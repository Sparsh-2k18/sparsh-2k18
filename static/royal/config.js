// KEN BURNS SLIDER CONFIG OBJECT
// ------------------------------

	var kenburns = {

		// DELAY BETWEEN SLIDES IN MILLISECONDS
		// ------------------------------------
		// DELAY : INTEGER[ 0 - 2147483647 ]

		delay:5000,



		// LOOP SLIDES
		// -----------
		// LOOP : BOOLEAN[ true | false ]
		loop:true,



		// SHOW TIMER PROGRESS BAR BETWEEN SLIDES
		// --------------------------------------
		// TIMER : BOOLEAN[ true | false ]

		timer: false,



		// TOGGLE SHUFFLE SLIDE IMAGES
		// ---------------------------
		// SHUFFLE : BOOLEAN[ true | false ]

		shuffle: false,



		// TRANSITION EFFECT OF THE FIRST SLIDE AFTER PAGE IS LOADED
		// ---------------------------------------------------------
		// TRANSITION:STRING[option]
		//
		// OPTIONS:
		// fade = FADE TRANSITION
		// fade2 = FADE 2 TRANSITION

		// slideLeft = SLIDE LEFT TRANSITION
		// slideLeft2 = SLIDE LEFT 2 TRANSITION
		// slideRight = SLIDE RIGHT TRANSITION
		// slideRight2 = SLIDE RIGHT 2 TRANSITION
		// slideUp = SLIDE UP TRANSITION
		// slideUp2 = SLIDE UP 2 TRANSITION
		// slideDown = SLIDE DOWN TRANSITION
		// slideDown2 = SLIDE DOWN 2 TRANSITION

		// zoomIn = ZOOM IN TRANSITION
		// zoomIn2 = ZOOM IN 2 TRANSITION
		// zoomOut = ZOOM OUT TRANSITION
		// zoomOut2 = ZOOM OUT 2 TRANSITION

		// swirlLeft = SWIRL LEFT TRANSITION
		// swirlLeft2 = SWIRL LEFT 2 TRANSITION
		// swirlRight = SWIRL RIGHT TRANSITION
		// swirlRight2 = SWIRL RIGHT 2 TRANSITION

		// burn = BURN TRANSITION
		// burn2 = BURN 2 TRANSITION
		// blur = BLUR TRANSITION
		// blur2 = BLUR 2 TRANSITION
		// flash = FLASH TRANSITION
		// flash2 = FLASH 2 TRANSITION

		firstTransition: 'zoomIn',



		// TRANSITION EFFECT DURATION OF THE FIRST SLIDE AFTER PAGE IS LOADED
		// ------------------------------------------------------------------
		// FIRST TRANSITION DURATION : INTEGER[ 0 - 2147483647 ]

		firstTransitionDuration: 500,



		// TRANSITION EFFECT FOR OTHER SLIDES
		// ----------------------------------
		// TRANSITION : STRING[option]
		//
		// OPTIONS:
		// fade = FADE TRANSITION
		// fade2 = FADE 2 TRANSITION

		// slideLeft = SLIDE LEFT TRANSITION
		// slideLeft2 = SLIDE LEFT 2 TRANSITION
		// slideRight = SLIDE RIGHT TRANSITION
		// slideRight2 = SLIDE RIGHT 2 TRANSITION
		// slideUp = SLIDE UP TRANSITION
		// slideUp2 = SLIDE UP 2 TRANSITION
		// slideDown = SLIDE DOWN TRANSITION
		// slideDown2 = SLIDE DOWN 2 TRANSITION

		// zoomIn = ZOOM IN TRANSITION
		// zoomIn2 = ZOOM IN 2 TRANSITION
		// zoomOut = ZOOM OUT TRANSITION
		// zoomOut2 = ZOOM OUT 2 TRANSITION

		// swirlLeft = SWIRL LEFT TRANSITION
		// swirlLeft2 = SWIRL LEFT 2 TRANSITION
		// swirlRight = SWIRL RIGHT TRANSITION
		// swirlRight2 = SWIRL RIGHT 2 TRANSITION

		// burn = BURN TRANSITION
		// burn2 = BURN 2 TRANSITION
		// blur = BLUR TRANSITION
		// blur2 = BLUR 2 TRANSITION
		// flash = FLASH TRANSITION
		// flash2 = FLASH 2 TRANSITION

		transition: 'fade',



		// TRANSITION EFFECT DURATION BETWEEN OTHER SLIDES
		// -----------------------------------------------
		// TRANSITION DURATION : INTEGER[ 0 - 2147483647 ]

		transitionDuration: 2000,



		// PATH TO THE SLIDE IMAGES ON YOUR SERVER
		// ---------------------------------------
		// SRC : STRING

		slides: [
			{ src: "{{ url_for('static', filename='royal/1.jpg') }}" },
			{ src: "{{ url_for('static', filename='royal/2.jpg') }}" },
			{ src: "{{ url_for('static', filename='royal/3.jpg') }}" },
		],



		// KEN BURNS OPTIONS
		// -----------------
		// ANIMATION : STRING[option]
		//
		// OPTIONS:
		// kenburns = BASIC KENBURNS EFFECT
		// kenburnsUp = KENBURNS UP EFFECT
		// kenburnsDown = KENBURNS DOWN EFFECT
		// kenburnsRight = KENBURNS RIGHT EFFECT
		// kenburnsLeft = KENBURNS LEFT EFFECT
		// kenburnsUpLeft = KENBURNS UP LEFT EFFECT
		// kenburnsUpRight = KENBURNS UP RIGHT EFFECT
		// kenburnsDownRight = KENBURNS DOWN RIGHT EFFECT
		// kenburnsDownLeft = KENBURNS DOWN LEFT EFFECT
		// random = RANDOM KENBURNS EFFECT

		animation: 'kenburns'

	}



// INITIALIZE KEN BURNS SLIDER
// ---------------------------

	$("#background-effect").vegas({
		delay: kenburns.delay,
		loop:kenburns.loop,
		timer: kenburns.timer,
		shuffle: kenburns.shuffle,
		firstTransition: kenburns.firstTransition,
		firstTransitionDuration: kenburns.firstTransitionDuration,
		transition: kenburns.transition,
		transitionDuration: kenburns.transitionDuration,
		slides: [
			kenburns.slides[0],
			kenburns.slides[1],
			kenburns.slides[2],
			kenburns.slides[3]
			],
		animation: kenburns.animation,
	});



// COUNTER CONFIG OBJECT
// ---------------------

	var counter = {

		// SET MONTH
		// ---------
		// SET MONTH : STRING[option]
		//
		// OPTIONS:"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"

		setMonth: 'February',



		// SET DAY
		// -------
		// SET DAY : INTEGER[ 1 - 31 ]

		setDay: 16,



		// SET YEAR
		// --------
		// SET YEAR : INTEGER

		setYear: 2018
	}



// CAROUSEL CONFIG OBJECT
// ----------------------

	var carousel = {

		// THE AMOUNT OF TIME TO DELAY BETWEEN AUTOMATICALLY CYCLING AN ITEM. IF FALSE, CAROUSEL WILL NOT AUTOMATICALLY CYCLE
		// -------------------------------
		// INTERVAL : INTEGER [ 0 - 2147483647 ] | BOOLEAN[ false ]
		interval: 3000,



		// WHETHER THE CAROUSEL SHOULD REACT TO KEYBOARD EVENTS
		// ----------------------------------------------------
		// KEYBOARD : BOOLEAN [ true | false ]

		keyboard: false,



		// IF SET TO "HOVER", PAUSES THE CYCLING OF THE CAROUSEL ON MOUSEENTER AND RESUMES THE CYCLING OF THE CAROUSEL ON MOUSELEAVE
		// IF SET TO NULL, HOVERING OVER THE CAROUSEL WON'T PAUSE IT.
		// -------------------------------------------------------------------------------------------------------------------------
		// PAUSE : STRING[ 'hover'] | null

		pause: null,



		// AUTOPLAYS THE CAROUSEL AFTER THE USER MANUALLY CYCLES THE FIRST ITEM. IF "CAROUSEL", AUTOPLAYS THE CAROUSEL ON LOAD
		// --------------------------------------------------------------------------------------------------------------------
		// RIDE : STRING[ 'carousel' ] | BOOLEAN[ false ]

		ride: false,



		// WHETHER THE CAROUSEL SHOULD CYCLE CONTINUOUSLY OR HAVE HARD STOPS
		// -----------------------------------------------------------------
		// WRAP : BOOLEAN [ true | false ]

		wrap: true

	}



// SUBSCRIBE CONFIG OBJECT
// ----------------------

	var subscribe = {

		// MAILCHIMP API KEY WHICH WILL BE USED TO CONNECT YOUR SUBSCRIBE FORM AND MAILCHIM ACCOUNT
		// ----------------------------------------------------------------------------------------
		// EMAIL : STRING

		apiKey: '07f194f089052200fe4bf9a2b1a3a104-us15',



		// MAILCHIMP LIST ID WHICH WILL BE USED TO INSERT NEW USER TO YOUR SUBSCRIBE LIST
		// -------------------------------------------------------------------------------
		// EMAIL : STRING

		listID: '9967cf16a5',



		// RESPONSE MESSAGE IF EMAIL IS VALID AND SENT TO YOUR SYSTEM
		// ----------------------------------------------------------
		// MESSAGE : STRING

		successMsg: '*Thanks for your interest!',



		// RESPONSE MESSAGE IF EMAIL IS NOT VALID
		// --------------------------------------
		// MESSAGE : STRING

		errorMsg: '*This email is invalid!'

	}
