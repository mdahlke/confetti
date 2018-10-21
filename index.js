var settings = {
	size: 5,
	duration: (1.0 / 50),
	confettiRibbonCount: 11,
	ribbonPaperCount: 30,
	ribbonPaperDist: 8.0,
	ribbonPaperThick: 8.0,
	confettiPaperCount: 95,
	colors: [
		['#df0049', '#660671'],
		['#00e857', '#005291'],
		['#2bebbc', '#05798a'],
		['#ffd200', '#b06c00']
	]
};


document.addEventListener('DOMContentLoaded', function () {
	var confetti = new Confetti(settings);
});
