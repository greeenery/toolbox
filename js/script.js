function TabMenu__init() {
  $(".tab-box .btn").click(function () {
    let $this = $(this);
    let indexNum = $(this).index();
    // .index() : 선택한 요소의 인덱스 번호를 가져온다.
    // indexNum 변수에 내가 클릭한 버튼의 인덱스 번호를 저장한다.

    $(this).addClass("active");
    $(this).siblings(".active").removeClass("active");

    $(".content").removeClass("active");
    $(".content").eq(indexNum).addClass("active");
    // $("선택자").eq(인덱스번호) : 선택한 요소의 인덱스 번호에 해당하는 요소를 선택한다.
    // 내가 클릭한 버튼의 인덱스 번호와 같은 인덱스 번호를 가진 컨텐츠에 active 클래스를 추가한다.
  });
}

TabMenu__init();

function Hamburger__init() {
  $(".hamburger").click(function () {
    if ($(".hamburger").hasClass("active")) {
      $(".hamburger").removeClass("active");
    } else {
      $(".hamburger").addClass("active");
    }
  });
}

Hamburger__init();

function SliderBox1__init() {
  const swiper = new Swiper(".slider-box-1 .swiper", {
    // Optional parameters
    slidesPerView: 1.2,
    spaceBetween: 10,

    // Navigation arrows
    navigation: {
      nextEl: ".slider-box-1 .swiper-button-next",
      prevEl: ".slider-box-1 .swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".slider-box-1 .swiper-scrollbar",
    },

    // 반응형 작업
    breakpoints: {
      // 화면의 넓이 >= 320px
      320: {
        slidesPerView: 2.2,
        spaceBetween: 10,
      },
      // 화면의 넓이 >= 640px
      640: {
        slidesPerView: 3.2,
        spaceBetween: 20,
      },
      // 화면의 넓이 >= 1024px
      1024: {
        slidesPerView: 4.2,
        spaceBetween: 20,
      },
    },
  });
}

SliderBox1__init();

function MegaMenu__init() {
  // header__menu에 마우스를 올리면 header에 on 클래스가 붙는다.
  // 즉, header__menu 부분에 마우스를 올리면 header의 키가 커진다.

  $(".header__menu").mouseenter(function () {
    $("header").addClass("on");
  });

  // 중요 !!
  // 마우스를 뗐을 경우는 ! header__menu에서 뗐을 때가 아닌, header에서 뗐을 때여야만 한다.
  // 2차 메뉴가 header의 안이며 header__menu 바깥에 있기 때문에, header__menu가 아닌 곳에 마우스를 올렸을 때 닫히면 안 되기 때문이다.
  $("header").mouseleave(function () {
    $("header").removeClass("on");
  });
}

MegaMenu__init();
