//// NEED import
//import $ from 'jquery';
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


import Splide from '@splidejs/splide';



//  if (document.querySelector('.splide')) {
//    var splide = new Splide( '.splide' );
//  });

  if (document.querySelector('.coffee')) {
      var coffee = new Splide('.coffee', {
        
//        easing: 'ease-in-out',
        fixedWidth: '300px',
//        focus: 'center',
//        pagination: false,
        perPage  : 3,
//        start: 1,
//        perMove: 1,
//        trimSpace: false,
        type: 'loop',
//        arrows: false,

//        drag: false, 
        autoplay     : true,
        interval     : 1000,
//        speed: 3,
        autoScroll: {
          speed: 1,
        },

//        type: 'slide',
//        autoWidth: true,
//        gap: 30,
        arrows: false,
        perMove: 1,
        pagination: false,
        breakpoints: {
          991: {
//                   gap: 30,
          },
          600: {
//                   gap: 20,
          },
          500: {
            destroy: true,
          },
        },
      });
      coffee.mount();
//      document
//        .querySelector('.arrow>a:nth-child(1)')
//        .addEventListener('click', () => {
//          cacaovideoReviewSlider.go('<');
//          cacaovideoReviewSlider.go(2);
//        });
//      document
//        .querySelector('.arrow>a:nth-child(2)')
//        .addEventListener('click', () => {
//          cacaovideoReviewSlider.go('>');
//          cacaovideoReviewSlider.go(3);
//        });
    }



document.addEventListener('DOMContentLoaded', function () {
  jQuery(document).ready(function ($) {

      $('.coffee li a').click(function() {
          var num_data = $(this).data('slid');
          //            console.log();
          coffee.go(num_data);
      });  
  });
});




import './js/';
// NEED import

// SCSS import
import './scss/style.scss';
//import './scss/compress.scss';