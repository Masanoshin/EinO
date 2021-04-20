let menu = document.querySelector('.menu');

menu.addEventListener('click', comeout_menu);
function comeout_menu() {
    const menu = document.querySelector('.header-link');
    const header = document.querySelector('.header');
    if (header.classList.contains('header-height') === false){
        header.classList.add('header-height');
    } else {
        console.log('tets');
        header.classList.remove('header-height');
    }

    if (menu.classList.contains('header-link-comeout') === false){
        menu.classList.add('header-link-comeout');
    } else {
        menu.classList.remove('header-link-comeout');
    }
}

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