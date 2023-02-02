// 검색!
const headerEl = document.querySelector('header')
const searchWrapEl = headerEl.querySelector('.search-wrap')
const searchStarterEl = headerEl.querySelector('.search-starter')
const searchCloserEl = searchWrapEl.querySelector('.search-closer')
const searchShadowEl = searchWrapEl.querySelector('.shadow')
const searchInputEl = searchWrapEl.querySelector('input')

searchStarterEl.addEventListener('click', showSearch) 
searchCloserEl.addEventListener('click', hideSearch)
searchShadowEl.addEventListener('click', hideSearch)

function showSearch() {
  headerEl.classList.add('searching')
  searchInputEl.focus()
}
function hideSearch() {
  headerEl.classList.remove('searching')
  searchInputEl.value = ''
}


// SWIPER

new Swiper(".visual-swiper", {
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".visual-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".visual-btn-next",
      prevEl: ".visual-btn-prev",
    },
  });


  new Swiper(".issue-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 45,
    pagination: {
      el: ".issue-swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".isseu-btn-next",
      prevEl: ".issue-btn-prev",
    },
  });


  new Swiper(".biSwiper", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 15,
    navigation: {
      nextEl: ".best-bnt-next",
      prevEl: ".best-btn-prev",
    },
  });


  new Swiper('.eventSwiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: '.eventSwiper .event-btn-prev',
      nextEl: '.eventSwiper .event-bnt-next'
    }
  });


  new Swiper(".likeSwiper", {
    loop: true,
    slidesPerView: 5.3,
    spaceBetween: 15,
    
  });



  const brandbullet = ['Thursday Island', 'T.I FOR MEN', 'COVETBLAN', 'ETAPE'];
  const brandSwiper = new Swiper('.brand-wrap .swiper', {
    // autoplay: {
    //   delay: 5000,
    // },
    loop: true,
    speed: 500,
    autoHeight: true,
    navigation: {
      prevEl: '.brand-wrap .btn-prev',
      nextEl: '.brand-wrap .btn-next',
    },
    slidesPerView: 1,
    centeredSlides: true,
    pagination: {
      el: '.brand-wrap .category-area',
      clickable: true,
      bulletClass: 'btn-category',
      bulletActiveClass: 'active',
      bulletElement: 'a',
      renderBullet: function (index, className) {
        return '<a href="#" class="' + className + '" role="tab">' + '<span>' + (brandbullet[index]) + '</span>' + '</a>';
      }
    },
  });



const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    gsap.to(toTopEl, .3, {
      x: 0
    });
  } else {
    gsap.to(toTopEl, .3, {
      x: 150
    });
  }
}, 300));

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});



const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();


