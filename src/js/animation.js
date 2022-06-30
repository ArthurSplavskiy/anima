export const playPreloaderAnimation = () => {
	const $preloader = document.querySelector('.preloader');
	const $logo = $preloader && $preloader.querySelector('.logo');
	const $headerLogo = document.querySelector('.header__logo');
	const { top, left } = $headerLogo.getBoundingClientRect();


	const $char_1 = $logo && $logo.children[0];
	const $char_2 = $logo && $logo.children[1];
	const $char_3 = $logo && $logo.children[2];
	const $char_4 = $logo && $logo.children[3];
	const $char_5 = $logo && $logo.children[4];

	const t = gsap.timeline({
		defaults: {
			ease: 'power2.ease'
		}
	});

	t
		.to($char_1, { opacity: 1, duration: 1 })
		.to($char_3, { opacity: 1, duration: 1 })
		.to($char_2, { opacity: 1, duration: 0.8 })
		.to($char_5, { opacity: 1, duration: 0.8 })
		.to($char_4, { opacity: 1, duration: 1 })
		.to($logo, { fontSize: '38px', top: top + 'px', left: left + 'px', x: 0, y: 0, xPercent: 0, yPercent: 0, duration: 1 })
		.to($logo, { autoAlpha: 0 })
		.to($preloader, { autoAlpha: 0 })

}

export const scrollAnimation = (el) => {
	const $scalableText = el.querySelector('.scroll-content__scalable-text');
	const $hero = el.querySelector('.scroll-content__hero');
	const $heroTitle = $hero.querySelector('h1');
	const $heroText = $hero.querySelector('p');
	const $heroButton = $hero.querySelector('a');
	const $blurSvges = el.querySelectorAll('.scroll-content__blur');

	gsap.set([$heroTitle, $heroText, $heroButton], {
		autoAlpha: 0
	});

	const t = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			start: 'top top',
			end: () => '+=5000px',
			scrub: true,
			pin: true
		}
	});

	t 
		.to($scalableText, { autoAlpha: 1, duration: 0.2 })
		.to($scalableText, { scale: 5, duration: 0.5 }, '<')
		.to($scalableText, { autoAlpha: 0, duration: 0.2 })
		.to($blurSvges[0], { autoAlpha: 1, duration: 0.05 })
		.to($heroTitle, { autoAlpha: 1, duration: 0.2 })
		.to($blurSvges[1], { autoAlpha: 1, duration: 0.05 })
		.to($heroText, { autoAlpha: 1, duration: 0.2 }, '-=0.1')
		.to($blurSvges[2], { autoAlpha: 1, duration: 0.05 })
		.to($heroButton, { autoAlpha: 1, duration: 0.2 }, '-=0.1')
		.to($blurSvges[3], { autoAlpha: 1, duration: 0.05 })
}