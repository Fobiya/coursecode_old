//// NEED import
//import $ from 'jquery';
////import '@fancyapps/fancybox';
//import 'slick-carousel';
//
//
//import './js/';
//// NEED import
//
//// SCSS import
//import './scss/style.scss';
////import './scss/compress.scss';

// NEED import
import $ from 'jquery';
import '@fancyapps/fancybox';
//import 'slick-carousel';


import Splide from '@splidejs/splide';

    var splide = new Splide( '.splide' );

if(document.getElementById('post__slid')){
    var spliden = new Splide('#post__slid',{
        easing: 'ease-in-out',
    //    fixedWidth: '300px',
        gap: '24px',
    //    focus: 'center',
        pagination: false,
        perPage  : 3,
//        start: 1,
  perMove: 1,
        trimSpace: false,
        type: 'loop',
        arrows: false,
        
// drag: false, 
        
              autoplay     : true,
              interval     : 5000,
//         speed: 3,
        
//  autoScroll: {
//    speed: 1,
//  },
        
        breakpoints: {
          '992': {
                perPage  : 3,
    //				direction: 'ltr',
    //				fixedWidth: 90,
    //              	fixedHeight: 110,
    //                drag: true,
    //                arrows: true,
    //				perPage: 4,
    //              	height: '110px',
    //				cover: true,
    //				focus: 'left',
          },
          '768': {
                      perPage  : 2,
 
    //				direction: 'ltr',
    //				fixedWidth: 90,
    //              	fixedHeight: 110,
    //                drag: true,
    //                arrows: true,
    //				perPage: 4,
    //              	height: '110px',
    //				cover: true,
    //				focus: 'left',
          },
          '600': {
                      perPage  : 1,
 
    //				direction: 'ltr',
    //				fixedWidth: 90,
    //              	fixedHeight: 110,
    //                drag: true,
    //                arrows: true,
    //				perPage: 4,
    //              	height: '110px',
    //				cover: true,
    //				focus: 'left',
          }
        },
      


    classes: {
//      arrows: 'splide__arrows your-class-arrows',
//      arrow : 'splide__arrow your-class-arrow',
//      prev  : 'splide__arrow--prev your-class-prev',
//      next  : 'splide__arrow--next your-class-next',
    },
      }).mount();


}




import './js/';
// NEED import

// SCSS import
import './scss/style.scss';
//import './scss/compress.scss';