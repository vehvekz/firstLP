var app = function() {

	var win = $(window),
		mainMenu = $('.toogle_list-wrap'),
		sandwich = mainMenu.prev().find('.sandwich'),
		menuItems = mainMenu.find('.nav__item');

	return {
		init: function(){
			this.setUpListeners();
			this.mixItUp();
			this.popUp();
			this.teamGallery();
			this.validation();
		},
		setUpListeners: function(){
			$('.toogle_menu').on('click', this.toogleMenu);
			mainMenu.on('click', this.mainMenu);
			win.on('resize', this.hiddenToogleMenu);
			win.on('scroll', this.fixedMainMenu);
		},
		toogleMenu: function(){

			sandwich.toggleClass('active');
			
			if (mainMenu.is(':visible')) {
				mainMenu.fadeOut(600);
				menuItems.removeClass('animated fadeInUp');
			} else {
				mainMenu.fadeIn(600);
				menuItems.addClass('animated fadeInUp');
			}
		},
		mainMenu: function(){
			mainMenu.fadeOut(600);
			menuItems.removeClass('animated fadeInUp');
			sandwich.toggleClass('active');
		},
		hiddenToogleMenu: function(){
			if (win.width() > 970) {
				mainMenu.fadeOut(600);
				menuItems.removeClass('animated fadeInUp');
				sandwich.removeClass('active');
			}
		},
		fixedMainMenu: function() {
			var fixedMenu = $('.main_menu-wrap'),
				header = $('header'),
				offsetTop = header.offset().top,
				offsetBottom = offsetTop + header.height(),
				wScroll = $(window).scrollTop();

			if (wScroll > offsetBottom) {
				fixedMenu.addClass('fixed');
			} else {
				fixedMenu.removeClass('fixed');
			}
		},
		mixItUp: function(){
			$('.gallery-content').mixItUp();
		},
		popUp: function(){
			$('.gallery-item--link').magnificPopup({
				type:"inline",
				gallery: {
					enabled: true,
					preload: [0,1],
					navigateByImgClick: true,
					arrowMarkup: '<button type="button" class="mfp-arrow-%dir%"><i class="fa fa-angle-%dir%"></i></button>', // markup of an arrow button
					tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
			}});
		},
		validation: function(){
			$("input, select, textarea").jqBootstrapValidation();
		},
		teamGallery: function(){
			$('.team__slider-wrap').slick({
				appendArrows: $('.ctr-wrap'),
				prevArrow: '<button class="ctr-prev"><i class="fa fa-angle-left"></i></button>',
				nextArrow: '<button class="ctr-next"><i class="fa fa-angle-right"></i></button>',
				slidesToShow: 4,
				slidesToScroll: 1,
				responsive: [
				   {
					 breakpoint: 1024,
					 settings: {
					   slidesToShow: 3,
					   slidesToScroll: 1
					 }
				   },
				   {
					 breakpoint: 768,
					 settings: {
					   slidesToShow: 2,
					   slidesToScroll: 1
					 }
				   },
				   {
					 breakpoint: 480,
					 settings: {
					   slidesToShow: 1,
					   slidesToScroll: 1
					 }
				   }
				]
			});
		}
	}

}();