define(["jquery"], function($) {
// ===========================================================
// SCROLL
// ===========================================================

  var height = $(window).scrollTop();

  if(height <= 150 ) {
    $('header').removeClass('back');
  }

  $(window).scroll(function() {
      var height = $(window).scrollTop();

      if(height < 150 ) {
            $('header').removeClass('back');
      } else {
           $('header').addClass('back');
      }
  });


// ===========================================================
// END SCROLL
// ===========================================================
  

// ===========================================================  
// Pixel Perfect MODUL
// ===========================================================  
    
//    $(document).ready(function() {
//                $('body').each(function() {
//                    var body = $(this);
//                    var img_url = $(this).data('img');
//                    var img = new Image();
//                    img.src = img_url;
//                    img.onload = function() {
//                        var ppbox = '<div id="images__back" style="background: url(' + img_url + ') no-repeat 50% 0%;top:0;width:100%;position:absolute;z-index:1000;opacity:.9;height:' + img.height + 'px"></div>';
//                        body.append(ppbox);
//                    };
//                });
//
//        $('html').click(function() {
//            $('#images__back').toggleClass('front__end');
//        });
//    }); 

// =========================================================== 
// END Pixel Perfect MODUL
// =========================================================== 
    
    

// =========================================================== 
// Scroll LINK
// =========================================================== 
    
   $('a[href^="#"].scroll').click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    
// =========================================================== 
// END Scroll LINK
// =========================================================== 
    
    
    
// =========================================================== 
// Scroll BAR
// ===========================================================  
    

    $(window).scroll(function() {
        // calculate the percentage the user has scrolled down the page
        var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());

        $('.bar-long').css('width', scrollPercent + "%");

    });
    
 
// =========================================================== 
// END Scroll BAR 
// ===========================================================



// =========================================================== 
// SLICK SLIDER FULL NAVIGATION
// ===========================================================    



    $('.block__slider').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 1000,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1500,
                settings: {
                    arrows: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
                     {
                breakpoint: 1300,
                settings: {
                    arrows: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 430,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });


// =========================================================== 
// END SLICK SLIDER FULL NAVIGATION 
// ===========================================================       
    

    
    

  
// =========================================================== 
// Fancybox
// =========================================================== 


    //$("#open-policy").on('click', function() {
    //  
    //  $.fancybox.open({
    //    src : '',
    //    type : 'html',
    //    smallBtn : false
    //  });
    //    
    ////    $('.next-form').click(function() {
    ////
    ////        $.fancybox.open({
    ////	   src  : '#trueModal'
    ////
    ////});
    ////});
    //  
    //});


    
// =========================================================== 
// END Fancybox
// ===========================================================    
    
    
    
    
    
// =========================================================== 
// INPUT MASK
// ===========================================================    



// =========================================================== 
// END INPUT MASK
// ===========================================================     
    
    
    
    
    
// =========================================================== 
// checkbox input click
// ===========================================================   


    //$(document).ready(function(){ 
    //    
    //    
    //    
    //  $('[type="checkbox"]').click(function(){
    //      
    ////      console.log('1');
    //      
    //  
    //      
    //
    //        if ($(this).prop('checked')) {
    //           $('#bot').addClass('chek');
    //          
    //              $('#bot').removeAttr('disabled');
    //             $('[type="checkbox"]').removeClass('errore');
    //            
    //            
    //        } else {
    //             $('#bot').attr('disabled', true);
    //            $('[type="checkbox"]').addClass('errore');
    //        };
    //
    //  });
    //
    //});


    
// =========================================================== 
// END checkbox input click
// ===========================================================    
    


});

