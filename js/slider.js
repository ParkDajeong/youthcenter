$(function() {
  // ============= Slide Play & Pause =============
  $(".slider-dots-wrap .btn-play").click(function() {
    const slider = "." + $(this).data("slider");
    $(slider).slick("slickPlay");
  });

  $(".slider-dots-wrap .btn-pause").click(function() {
    const slider = "." + $(this).data("slider");
    $(slider).slick("slickPause");
  });

  // ============= 메인 배너 =============
  $(".main-content__banner").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1069,
        settings: {
          swipe: false,
        }
      }
    ],
  });

  // ============= 정책 리스트 =============
  const navList = ["취업지원", "창업지원", "주거·금융", "생활·복지", "정책참여"];

  $(".main-content__policy").slick({
    infinite: false,
    mobileFirst: true,
    arrows: false,
    dots: true,
    appendDots: $(".main-content__policy-nav"),
    customPaging:  function(slider, i) {
      return "<button class='nav-item' type='button'>" + navList[i] + "</button>"
    },
    responsive: [
      {
        breakpoint: 1069,
        settings: {
          arrows: true,
          swipe: false,
        }
      }
    ],
  });

  $(".main-content__policy").on("afterChange", function(event, slick, currentIdx){
    const cur_slide = $(".main-content__policy").find(".slick-current.slick-active");
    cur_slide.find(".main-content__policy-item:first-child a").addClass("active");
  });
  
  // ============= AD 배너 =============
  $(".main-content__ad-banner").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    mobileFirst: true,
    arrows: false,
    dots: true,
    appendDots: $(".main-content__ad-banner-wrap .slider-dot-list"),
    customPaging: function(slider, i) {
      return "<button class='slick-dot' type='button'><span class='sr-only'>" + i + "번 슬라이드로 이동</span></button>"
    },
    responsive: [
      {
        breakpoint: 1069,
        settings: {
          arrows: true,
          swipe: false,
        }
      }
    ],
  });
  
    // ============= 청년공간 =============
  $(".main-content__space-slider").slick({
    autoplay: true,
    autoplaySpeed: 6000,
    mobileFirst: true,
    arrows: false,
    dots: true,
    appendDots: $(".main-content__space-result .slider-dot-list"),
    customPaging: function(slider, i) {
      return "<button class='slick-dot' type='button'><span class='sr-only'>" + i + "번 슬라이드로 이동</span></button>"
    },
    responsive: [
      {
        breakpoint: 1069,
        settings: {
          arrows: true,
        }
      }
    ],
  });
});