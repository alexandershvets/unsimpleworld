/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
// import Swiper, { Navigation } from 'swiper';
import Swiper, { Navigation, Pagination, Parallax, Autoplay, Thumbs, EffectFade } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import '../../scss/base/swiper.scss';
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
  // Main Slider
  if (document.querySelector('.slider-main-section__slider')) {
    new Swiper('.slider-main-section__slider', {
      modules: [Navigation, Pagination, Parallax, EffectFade],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 5,
      speed: 800,
      parallax: true,
      watchOverflow: true,

      pagination: {
        el: '.main-slider__pagination',
        clickable: true,
      },

      breakpoints: {
        320: {
          effect: 'fade',
          fadeEffect: {
            crossFade: true,
          },
        },
        479.98: {
          effect: 'none',
        },
      },

      // События
      on: {
        init: function (swiper) {
          setTimeout(() => {
            document.querySelector('.slider-main-section__slider').classList.remove('overlay');
          }, 200);
        },
      },
    });
  }

  // Peculiarities Slider Left
  if (document.querySelector('.item-peculiarities_left')) {
    const thumbsSwiper = new Swiper('.item-peculiarities_left .thumbs-item-peculiarities__slider', {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 4,
      spaceBetween: 0,
      speed: 800,
      watchOverflow: true,

      navigation: {
        prevEl: '.item-peculiarities_left .thumbs-item-peculiarities__arrow_prev',
        nextEl: '.item-peculiarities_left .thumbs-item-peculiarities__arrow_next',
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
        },
        466: {
          slidesPerView: 3,
        },
        767.98: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 3,
        },
        1650: {
          slidesPerView: 4,
        },
      },

      on: {},
    });

    new Swiper('.item-peculiarities_left .item-peculiarities__slider', {
      modules: [Thumbs],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 16,
      speed: 800,
      watchOverflow: true,
      loop: true,
      thumbs: {
        swiper: thumbsSwiper,
      },
      on: {},
    });
  }

  // Peculiarities Slider Right
  if (document.querySelector('.item-peculiarities_right')) {
    const thumbsSwiper = new Swiper('.item-peculiarities_right .thumbs-item-peculiarities__slider', {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 4,
      spaceBetween: 0,
      speed: 800,
      watchOverflow: true,
      navigation: {
        prevEl: '.item-peculiarities_right .thumbs-item-peculiarities__arrow_prev',
        nextEl: '.item-peculiarities_right .thumbs-item-peculiarities__arrow_next',
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
        },
        479.98: {
          slidesPerView: 3,
        },
        767.98: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 3,
        },
        1650: {
          slidesPerView: 4,
        },
      },
      on: {},
    });

    new Swiper('.item-peculiarities_right .item-peculiarities__slider', {
      modules: [Thumbs],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 16,
      speed: 800,
      watchOverflow: true,
      loop: true,
      thumbs: {
        swiper: thumbsSwiper,
      },
      on: {},
    });
  }

  // Friends Slider
  if (document.querySelector('.friends__slider')) {
    new Swiper('.friends__slider', {
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 5,
      spaceBetween: 10,
      autoHeight: true,
      speed: 800,
      pagination: {
        el: '.slider-friends__pagination',
        clickable: true,
        dynamicBullets: false,
      },
      navigation: {
        prevEl: '.slider-friends__arrow_prev',
        nextEl: '.slider-friends__arrow_next',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        620: {
          slidesPerView: 2,
        },
        767.98: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1650: {
          slidesPerView: 5,
        },
      },
      // События
      on: {},
    });
  }
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener('load', function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
