"use strict";
define(["jquery"], function($) {

  $(function () {
      $("[name=send]").click(function () {

          $(":input.error").removeClass('error');
          $(".allert").remove();
          var error;
          var btn = $(this);
          var ref = btn.closest('form').find('[required]');
          var msg = btn.closest('form').find('input, textarea, select');
          var send_btn = btn.closest('form').find('[name=send]');

           $(ref).each(function() {
              if ($(this).val() == '') {
                  var errorfield = $(this);
                  $(this).addClass('error').parent('.field') /*.append('<span class="allert">Fill this field</span>') */;
                  error = 1;
                  $(":input.error:first").focus();
                  return;
              } else {
                  var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                  if ($(this).attr("type") == 'email') {
                      if(!pattern.test($(this).val())) {
  //                        $("[name=email]").val('');
                          $(this).addClass('error').parent('.field') /*.append('<span class="allert">Enter a valid e-mail</span>') */;
                          error = 1;
                          $(":input.error:first").focus();
                      }
                  }
                  var patterntel = /^()[0-9]{9,18}/i;
                  if ( $(this).attr("type") == 'tel') {
                      if(!patterntel.test($(this).val())) {
  //                        $("[name=phone]").val('');
                          $(this).addClass('error').parent('.field') /*.append('<span class="allert">Enter a valid phone number</span>') */;
                          error = 1;
                          $(":input.error:first").focus();
                      }
                  }

                   var patterntext = /^([a-z])[a-z]/i;
                  if ($(this).attr("type") == 'text') {
                      if(!patterntext.test($(this).val())) {
                          var errorfield = $(this);
                          $(this).addClass('error').parent('.field') /*.append('<span class="allert">input letters only</span>') */;
                          error = 1;
                          $(":input.error:first").focus();
                      }
                  }

                     if ($(this).attr("type") == 'checkbox') {
                     if (!$(this).prop('checked')) {



                          $(this).addClass('errore');
                          $('label.p').addClass('errore');



                          error = 1;

                      }
                  }


              }
          })


          if (!(error == 1)) {
              $(send_btn).each(function () {
                  $(this).attr('disabled', true);
              });
              $(function () {
                  var form = $(this).closest('form'),
                      name = form.find('.name').val();
                  if ($(this).val() == '') {


                      $.ajax({
                          type: 'POST',
                          url: 'send.php',
                          data: msg,
                          success: function() {
                              $('form').trigger("reset");
                              setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 1000);


                           $( document ).ready(function() {
                                console.log( "ready!" );
                            });


                          },
                          error: function(xhr, str) {
                              alert('ERROR: ' + xhr.responseCode);
                          }
                      });

                  }


              });
          } ;


          return false;
      })
  });

});

