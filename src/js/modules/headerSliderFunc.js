import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function headerSliderFunc(){
    let myImageSlider = new Swiper('.header-slider', {
        mousewheel: true,
        // loop: true,
        slidesPerView: 1,
        speed:4000,
        slidesPerView: 1,
        spaceBetween: 100,
      });
    
      
      
    
      let myBgSlider = new Swiper('.header-bg-slider', {
        direction: 'vertical',
        effect: 'fade',
        mousewheel: true,
        // loop: true,
        slidesPerView: 1,
        speed:4000,
        slidesPerView: 1,
        spaceBetween: 0,
      });
    
      myImageSlider.controller.control = myBgSlider;
      myBgSlider.controller.control = myImageSlider;
}

export default headerSliderFunc;