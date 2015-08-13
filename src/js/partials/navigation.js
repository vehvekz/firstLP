var navigation = function(){

	var 
		itemLink = $('.nav__item-link');

	return{

		init: function(){
			this.setUpListeners();
			this.showSection(window.location.hash, false);
		},
		setUpListeners: function(){
			itemLink.on('click', this.menuShow);
			$(window).on('scroll', this.checkSection);
		},
		menuShow: function(e){
			e.preventDefault();
			navigation.showSection($(this).attr('href'), true);
		},
		showSection: function(section, isAnimate){
			var
				direction = section.replace(/#/, ''),
				reqSection = $('header, section').filter('[data-section="' + direction + '"]'),
				reqSectionPos = reqSection.offset().top;

			if (isAnimate) {
				$('body, html').animate({scrollTop: reqSectionPos}, 1000);
			} else {
				$('body, html').scrollTop(reqSectionPos);
			}
		},
		checkSection: function(){
			$('header, section').each(function(){
				var
					$this = $(this),
					topEdge = $this.offset().top - 200,
					bottomEdge = topEdge + $this.height(),
					wScroll = $(window).scrollTop();

				if (topEdge < wScroll && bottomEdge > wScroll) {
					var 
						currentId = $this.data('section'),
						reqLink = itemLink.filter('[href="#' + currentId + '"]');

					reqLink.closest('.nav__item').addClass('active')
						.siblings().removeClass('active');

					window.location.hash = currentId;
				}
			});
		}
	}

}();