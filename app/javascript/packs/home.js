

window.addEventListener('scroll', () => {
	let fadein = document.querySelectorAll(".home_fadein");
	let fadein_sec = document.querySelectorAll(".home_fadein_sec");
	let home_opacity = document.querySelectorAll(".home_opacity");
	fadein.forEach(el => {
		let point = el.getBoundingClientRect().top;
		if(550 > point){
			el.classList.add('home_scrollin');
		}
	});  
	fadein_sec.forEach(el => {
		let point = el.getBoundingClientRect().top;
		if(550 > point){
			el.classList.add('home_scrollin_sec');
		}
	});  
	home_opacity.forEach(el => {
		let point = el.getBoundingClientRect().top;
		if(550 > point){
			el.classList.add('home_come_out');
		}
	});  
});