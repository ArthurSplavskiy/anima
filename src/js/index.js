import "../scss/style.scss"
import { playPreloaderAnimation, scrollAnimation } from './animation.js';

const $video = document.querySelector('[data-video]');
const $footer = document.querySelector('.footer');

const clickOnDocument = (e) => {
	const targetElement = e.target;

	if(targetElement.classList.contains('anchor') || targetElement.closest('.anchor')) {
		gsap.to(window, {scrollTo: { y: $footer.getBoundingClientRect().top }})
	}
	if(targetElement.classList.contains('footer__anchor') || targetElement.closest('.footer__anchor')) {
		gsap.to(window, {scrollTo: { y: $video.getBoundingClientRect().top }})
	}
	if(targetElement.classList.contains('about-link') || targetElement.closest('.about-link')) {
		gsap.to(window, {scrollTo: { y: $video.getBoundingClientRect().bottom }})
	}
	if(targetElement.classList.contains('contact-link') || targetElement.closest('.contact-link')) {
		gsap.to(window, {scrollTo: { y: $footer.getBoundingClientRect().top }})
	}
	if(
		(targetElement.classList.contains('fullscreen-video__video') || targetElement.closest('.fullscreen-video')) &&
		(!targetElement.classList.contains('anchor') && !targetElement.closest('.anchor'))
	) {
		$video.paused ? $video.play() : $video.pause();
	}
};

const loadVideo = () => {
	if(window.innerWidth <= 560) {
		$video && $video.insertAdjacentHTML('afterbegin', '<source type="video/webm" src="img/video/showreel-mobile.webm">')
		$video && $video.insertAdjacentHTML('afterbegin', '<source type="video/mp4" src="img/video/showreel-mobile.mp4">')
	} else if(window.innerWidth <= 768) {
		$video && $video.insertAdjacentHTML('afterbegin', '<source type="video/webm" src="img/video/showreel-tablet.webm">')
		$video && $video.insertAdjacentHTML('afterbegin', '<source type="video/mp4" src="img/video/showreel-tablet.mp4">')
	} else {
		$video && $video.insertAdjacentHTML('afterbegin', '<source type="video/webm" src="img/video/showreel-desktop.webm">')
		$video && $video.insertAdjacentHTML('afterbegin', '<source type="video/mp4" src="img/video/showreel-desktop.mp4">')
	}
};

const init = () => {
	const $html = document.documentElement;
	$html.classList.add('loaded');

	playPreloaderAnimation();
	loadVideo();
	scrollAnimation(document.querySelector('.scroll-content'));
	
	document.addEventListener('click', clickOnDocument)
};

const videoPlayWhenSmallBatteryPower = () => {
	if ($video && !$video.playing) {
		let playPromise = $video.play();

		if (playPromise !== undefined) {
			playPromise.then(_ => {
			})
			.catch(error => {
			});
		}
	}
}

window.addEventListener('load', init);
//document.addEventListener('touchstart', videoPlayWhenSmallBatteryPower);