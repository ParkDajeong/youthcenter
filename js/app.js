$(function() {
  // ============== mobile 검색영역 ==============
  $(".header__btn-search").click(function() {
    $(".header__search-wrap").fadeIn(700);
  });

  $(".search-wrap__btn-close").click(function() {
    $(".header__search-wrap").fadeOut(700);
  });

  // ============== mobile 메뉴 ==============
  function openMobileMenu() {
    $(".header__gnb-mobile").show();
    $(".header__gnb-mobile-bg").show();
    $(".gnb-mobile").animate({
      right: "0"
    });
  }

  function closeMobileMenu() {
    $(".header__gnb-mobile-bg").hide();
    $(".gnb-mobile").animate({
      right: "-100%"
    });
    setTimeout(function() {
      $(".header__gnb-mobile").hide();
    }, 400);
  }

  $(".header__btn-m-menu").click(openMobileMenu);
  $(".gnb-mobile__btn-close").click(closeMobileMenu);

  $(window).resize(function() {
    if($(window).width() >= 1070) {
      closeMobileMenu();
    }
  });

  $(".gnb-mobile__menu-item").click(function() {
    if($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(this).find(".gnb-mobile__sub-menu").slideUp();
    } else {
      $(".gnb-mobile__menu-item").removeClass("open");
      $(".gnb-mobile__sub-menu").slideUp();
      $(this).addClass("open");
      $(this).find(".gnb-mobile__sub-menu").slideDown();
    }
  });

  // ============== PC 메뉴 ==============
  function openSubMenu() {
    $(this).addClass("on");
    $(".gnb-pc__menu-list").addClass("open");
    $(".gnb-pc__sub-menu").stop().slideDown();
  }

  function closeSubMenu() {
    $(".gnb-pc__menu-item").removeClass("on");
    if(!$(".gnb-pc__menu-list").hasClass("fixed")) {
      $(".gnb-pc__menu-list").removeClass("open");
      $(".gnb-pc__sub-menu").stop().slideUp();
    }
  }

  $(".gnb-pc__menu-item").hover(openSubMenu, closeSubMenu);
  $(".gnb-pc__menu-item").focusin(openSubMenu).focusout(closeSubMenu);

  $(".gnb-pc__btn-menu").click(function() {
    $(this).toggleClass("open");
    $(".gnb-pc__menu-list").toggleClass("fixed");
    !$(".gnb-pc__menu-list").hasClass("open") ? openSubMenu() : closeSubMenu();
  });

  // ============== 게시판 ==============
  const noticeList = $(".main-content__board--notice ul li");
  const newsList = $(".main-content__board--news ul li");
  let notice_index = 0;
  let news_index = 0;
  noticeList.eq(notice_index++).addClass("on");
  newsList.eq(news_index++).addClass("on");

  setInterval(function() {
    if(notice_index >= noticeList.length) notice_index = 0;
    noticeList.removeClass("on");
    noticeList.eq(notice_index++).addClass("on");
  }, 3000);
  
  setInterval(function() {
    if(news_index >= newsList.length) news_index = 0;
    newsList.removeClass("on");
    newsList.eq(news_index++).addClass("on");
  }, 3500);

  // ============== 청년정책 ==============
  $(".main-content__policy-item a").hover(function() {
    $(".main-content__policy-item a").removeClass("active");
    $(this).addClass("active");
  }, function() {
    $(this).removeClass("active");
  });

  // ============== 청년공간 ==============
  $(".main-content__space-tab").click(function() {
    $(".main-content__space-tab").removeClass("active");
    $(this).addClass("active");
  });

  $(".main-content__map-list-item a").mouseover(function() {
    const mapName = $(this).attr("class");
    $(".main-content__map-area img").attr("src", "./assets/space/" + mapName + ".png");
  })

  $(".main-content__space-tab").first().addClass("active");

  // ============== footer - 관련사이트 ==============
  $(".select-box__default-option").click(function() {
    $(".select-box").toggleClass("open");
    $(".select-box__option-list").slideToggle();
  })
});