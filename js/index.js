$(function(){
    $(".slide").slick({
        Infinity:true,
        dots:true,
        arrows:true,
        autoplay:true,
        autoplays:1000,
        fade:true,
        nav:true,
        dots: true,
		autoplay : true,



    });

    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
          $(".topbtn").fadeIn();


        } else {
          $(".topbtn").fadeOut();
        }

    });
    
    $('.topbtn').click(function() {
        $('html, body').animate({scrollTop: 0}, 400);
        return false;
    });


    $('.pink').on({
      mouseover:function(){
          $(this).stop(true).css({backgroundColor:'#EC4A95'})
      },
      mouseout:function(){
          $(this).stop(true).css({backgroundColor:'#ffffff'})
      }
  });
    $('.orange').on({
      mouseover:function(){
          $(this).stop(true).css({backgroundColor:'#F3A530'})
      },
      mouseout:function(){
          $(this).stop(true).css({backgroundColor:'#ffffff'})
      }
  });
    $('.green').on({
      mouseover:function(){
          $(this).stop(true).css({backgroundColor:'#88C543'})
      },
      mouseout:function(){
          $(this).stop(true).css({backgroundColor:'#ffffff'})
      }
  });
    $('.blue').on({
      mouseover:function(){
          $(this).stop(true).css({backgroundColor:'#367ABD'})
      },
      mouseout:function(){
          $(this).stop(true).css({backgroundColor:'#ffffff'})
      }
  });






    

   







    $("a.item").colorbox();



    AOS.init();

});
