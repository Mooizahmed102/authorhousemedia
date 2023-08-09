var currentTab = 0;

    function showTab(t) {
        var e = document.getElementsByClassName("tab");
        e[t].style.display = "block", 0 == t ? (document.getElementById("prevBtn").style.display = "none", document.getElementById("signupBtn2").style.display = "none", document.getElementById("nextBtn").style.display = "inline") : document.getElementById("prevBtn").style.display = "inline", t == e.length - 1 ? (document.getElementById("nextBtn").style.display = "none", document.getElementById("signupBtn2").style.display = "inline") : document.getElementById("nextBtn").innerHTML = "Next"
    }
    
    function nextPrev(t) {
        var e = document.getElementsByClassName("tab");
        if (1 == t && !validateForm()) return !1;
        e[currentTab].style.display = "none", showTab(currentTab += t)
    }
    
    function validateForm() {
        var t, e, a = !0;
        for (t = document.getElementsByClassName("tab")[currentTab].getElementsByTagName("input"), e = 0; e < t.length; e++) "" == t[e].value && (t[e].className += " invalid", a = !1);
        return a
    }

    jQuery(document).ready(function($) {
      $('.logos-partner').slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false
      });
    });


$('.portfolio_slider').slick({
  dots: false,
  infinite: false,
  speed: 200,
  centermode: true,
  arrows: false,
  autoplay: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// WOW ANIMATION

  new WOW().init();

// WOW ANIMATION

$('.mobile-nav-btn').click(function() {

    $('.mobile-nav-btn, .mobile-nav, .app-container').toggleClass('active');

});

$('.firstlevel li a').click(function() {

    if ($(this).hasClass('active')) {

        $(this).removeClass('active');

        $(this).siblings('ul').slideUp();

    } else {

        $('.firstlevel li a').removeClass('active');

        $(this).addClass('active');

        $('.dropdown').slideUp();

        $(this).siblings('ul').slideDown();

    }

});


$('.mainnav > li > a').click(function() {

    if ($(this).hasClass('active')) {

        $(this).removeClass('active');

        $(this).parents('li').children('.firstlevel').slideUp();

    } else {

        $(this).addClass('active');

        $(this).parents('li').children('.firstlevel').slideDown();

        $(this).parents('li').siblings('li').children('a').removeClass('active');

        $(this).parents('li').siblings('li').children('.firstlevel').slideUp();

    }

});


// $('.team_slider').slick({
//   dots: false,
//   infinite: false,
//   speed: 200,
//   centermode: true,
//   arrows: false,
//   autoplay: true,
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       autoplay: true,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: false
//       }
//     },
//     {
//       breakpoint: 850,
//       autoplay: true,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 750,
//       autoplay: true,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     {
//       breakpoint: 767,
//       autoplay: true,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });


$('.review_slider').slick({
  dots: false,
  infinite: false,
  speed: 50,
  centermode: true,
  arrows: false,
  focusOnSelect: true,
  pauseOnHover:false,
  autoplay: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 590,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.review_slider1').slick({
  dots: false,
  infinite: false,
  speed: 50,
  centermode: true,
  arrows: false,
  focusOnSelect: true,
  pauseOnHover:false,
  autoplay: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 590,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

function setButtonURL()
{
    $zopim.livechat.window.toggle();
}



 // intel Tel Input


setTimeout(function(){
    $('input[name="pc"]').val($('.selected-dial-code').text());
    $('input[name="cip"]').val(ip);
    $('input[name="ctry"]').val( $('.country-list .country.active .country-name').text());
}, 3000);


$('body').delegate('.country','click',function(){
$('input[name="pc"]').val($(this).find('.dial-code').text());
$('input[name="cip"]').val(ip);
$('input[name="ctry"]').val($(this).closest("form").find('.country-list .country.active .country-name').text());

/*var oldString2=$('.selected-flag').attr('title').toUpperCase();
  var newString12 = oldString2.split(':',1)[0];
               $('input[name="ctry"]').val(newString12);*/
 });



 if($(window).innerWidth() <= 751) {
  $('.portfolio_slid').slick({
       dots: true,
       infinite: true,
       autoplay:true,
       speed: 300,
       arrows:false,
       slidesToShow: 1,
       adaptiveHeight: true
    });
 }








// document.onkeydown = function(e) {
//   if(event.keyCode == 123) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//      return false;
//   }
// }


// $(document).on({
//     "contextmenu": function(e) {
//         console.log("ctx menu button:", e.which); 

//         // Stop the context menu
//         e.preventDefault();
//     },
//     "mousedown": function(e) { 
//         console.log("normal mouse down:", e.which); 
//     },
//     "mouseup": function(e) { 
//         console.log("normal mouse up:", e.which); 
//     }
// });

//*****************************

// Mobile Navigation

//*****************************


