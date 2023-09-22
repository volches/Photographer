import gsap from "gsap";

function headerAnimationFunc(){
    const tl = gsap.timeline();

	

	tl.to(".header__img", {opacity:1,duration:1})
	  .to (".header__img", { filter: 'blur(0px)', duration:1})
	  .to (".header__wrapper", {opacity:1, scaleX:0.1, scaleY:0.1, duration:0.2,delay:1})
	  .fromTo (".header__wrapper", { scaleX:0.1, scaleY:0.1}, {scaleX:1, scaleY:1, duration:1})
	  .to (".header__wrapper", { borderRadius:0, duration:1})
	  .to (".header__nav", {opacity:1, duration:2})
	  .to (".header__footer", {opacity:1, duration:2}, "<")
	  .to (".header-title__letter", {stagger:0.2,opacity:1, duration:2}, "<")
	  .to (".header-subtitle__letter", {stagger:0.1, opacity:1, duration:1},"-=1")
	  .to (".header-img-row.header-img-row--up", {opacity:1, height: '28vh', duration:2 },"<")
	  .to (".header-img-row.header-img-row--down", {opacity:1, height: '28vh', duration:2 }, "<");
}

export default headerAnimationFunc;