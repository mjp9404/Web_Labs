var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

setInterval( slideTransition, 3000 );

function loadingSlides(){
    slides[currentSlide].style.zIndex = 1;
}

function nextSlide() {
	currentSlide++;
	if( currentSlide > (slides.length - 1) ){
		currentSlide = 0;
	}
	for( let i = 0; i < slides.length; i++ ){
		if( currentSlide == i ){
			slides[i].style.zIndex = 1;
		} else {
			slides[i].style.zIndex = 0;
		}
	}

}

function slideTransition() {
	var overlay = document.querySelector('.overlay');
	overlay.classList.add('hide');
	setTimeout( function(){
		overlay.classList.remove('hide');
	}, 800 );
	setTimeout( nextSlide, 500 );


	
}



