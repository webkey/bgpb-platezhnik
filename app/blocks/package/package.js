app.package = {
	initEl: '.js_pack-slider_2',
	init() {
		const self = this;
		// app.common.initScript('slick.min', 'slick', () => {
		//
		// });
		// app.common.initStyle('slick');
		// app.common.initStyle('slick-theme');
		if ($(self.initEl).length) {
			this.run();
		}
	},
	run() {
		$(this.initEl).slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1279,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 1023,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	}
};

