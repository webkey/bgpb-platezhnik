app.rolls = {
	name: 'menu',
	description: 'toggle menu',
	duration: 300,
	mod: {
		active: 'active'
	},
	init() {
		this.runRolls();
	},
	runRolls() {
		const self = this;
		const $rolls = $('.js-rolls');
		const $rollsSwitcher = $('.js-rolls-open');

		$.each($rollsSwitcher, function () {
			const $curSwitcher = $(this);

			if ($curSwitcher.hasClass(self.mod.active)) {
				self.show($curSwitcher);
			}
		});

		$rolls.on('click', '.js-rolls-open', function (event) {
			const $curSwitcher = $(this);

			if ($curSwitcher.hasClass(self.mod.active)) {
				self.hide($curSwitcher);
			} else {
				self.show($curSwitcher);
			}
			event.preventDefault();
		});
	},
	_isOpen: false,
	show(switcher) {
		const panel = switcher.next();
		const arrow = $('.js-rolls-arrow', switcher);

		switcher.add(panel).add(arrow).addClass(app.rolls.mod.active);
		panel.stop().slideDown(app.rolls.duration);
	},
	hide(switcher) {
		const panel = switcher.next();
		const arrow = $('.js-rolls-arrow', switcher);

		switcher.add(panel).add(arrow).removeClass(this.mod.active);
		panel.stop().slideUp(app.rolls.duration);
	}
};
