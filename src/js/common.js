define(["jquery"], function($) {
    
//    console.log('Fobiya'); 

  
    
    
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
    
    
    
    
    
    $('.blue').click(function progress() {
        var pers = 0;
        var interval = setInterval(function() {
            let t = pers++ + "%";
            $(".pers").text(t);
            $(".pl_l").css("width", t);
            if (pers == 60) $(".pr span").css("color", "#fff");
            if (pers > 80) clearInterval(interval);
        }, 1);
    });

    
$('.anim-button').click(function(){

  $('ul.menu__ul').toggleClass('open');

});  
    
// =========================================================== 
// SLICK SLIDER FULL NAVIGATION
// ===========================================================    


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


    $(document).ready(function(){
//        $('[type="tel"]').inputmask("+1(999)999-99-99");
//        $('[name="zipcode"]').inputmask('99999'); 
//        $('[name="ferstname"]').inputmask();
//        $('[name="lastname"]').inputmask();
    });

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