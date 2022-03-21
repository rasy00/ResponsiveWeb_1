// get html in id="Hero" (.hero-left) & .about-right
const heroLeft = $("#hero div:first")[0].innerHTML;
const aboutRight = $(".about-right")[0].innerHTML;
const navLeft = '<div class="nav nav-left"><p><a href="">shop now</a></p><p><a href="">lookbook</a></p></div>';
const navRight = '<div class="nav nav-right"><p><a href="">search</a></p><p><a href="">cart</a></p></div>';
$(document).ready(function () {
  // Adds and removes body class depending on screen width.
  function screenClass() {
    if ($(window).innerWidth() > 1480) {
      // reset semua
      $("header .nav-left").remove();
      $("header .nav-right").remove();
      $(".container .mod-nav").remove();
      $("header .modalTrigger").remove();
      $(".hero-left").html("");
      $(".about-right").html("");
      $(".hero-left").append(heroLeft);
      $(".about-right").append(aboutRight);
      $("header").prepend(navLeft);
      $("header").append(navRight);
    } else if ($(window).innerWidth() < 415) {
      // reset
      $(".hero-left").html("");
      $(".about-right").html("");
      $(".container .mod-nav").remove();
      $("header .modalTrigger").remove();

      // reset end
      const modal = `<div class="mod-nav">
                    <p><a href="">shop now</a></p>
                    <p><a href="">lookbook</a></p>
                    <p><a href="">search</a></p>
                    <p><a href="">cart</a></p>
                  </div>`;

      $("header").after(modal);
      const modalTrigger = `<div class="modalTrigger">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                <path stroke="rgba(0, 0, 0, 0.55)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"/>
                              </svg>
                            </div>`;
      // remove nav
      $("header .nav-left").remove();
      $("header .nav-right").remove();

      // add modal
      $("header").append(modalTrigger);

      $(".hero-left").html("");
      $(".about-right").html("");
    } else if ($(window).innerWidth() < 1480 && $(window).innerWidth() > 415) {
      if ($("header .modalTrigger")[0] !== undefined) {
        $(".container .mod-nav").remove();
        $("header .modalTrigger").remove();
        $("header").prepend(navLeft);
        $("header").append(navRight);
      }
      $(".hero-left").html("");
      $(".about-right").html("");
    }
  }

  // hit a function
  screenClass();

  // And recheck when window gets resized.
  $(window).bind("resize", function () {
    screenClass();
  });

  $("header").bind("click", ".modalTrigger", () => {
    $(".mod-nav").toggleClass("mod-active");
    $(".mod-nav").css(
      "transform",
      "translateY(" +
        $("header")
          .css("transform")
          .match(/matrix.*, (\d+)\)/)[1] +
        "px)"
    );
  });

  // check if window scrolling
  $(window).bind("scroll", () => {
    let Wscroll = $(this).scrollTop();
    // set header and modul navbar to fixed
    $("header").css("transform", "translateY(" + Wscroll + "px)");
    $(".container .mod-nav").css(
      "transform",
      "translateY(" +
        $("header")
          .css("transform")
          .match(/matrix.*, (\d+)\)/)[1] +
        "px)"
    );
  });
});
