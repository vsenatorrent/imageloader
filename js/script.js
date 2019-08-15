// var elem = document.querySelectorAll('img');

// function visible(e, i){
//   e.pos = {
//     top: window.pageYOffset + e.getBoundingClientRect().top,
//     bottom: window.pageYOffset + e.getBoundingClientRect().bottom
//   };
//   window.pos = {
//     top: window.pageYOffset,
//     bottom: window.pageYOffset + document.documentElement.clientHeight
//   };
//   if(e.pos.bottom > window.pos.top && e.pos.top < window.pos.bottom)
//     e.style.opacity = 1;
// }

// window.onscroll = function(){
//   for(var i = 0; i < elem.length; i++) {
//   visible(elem[i]);
// }
  
// };

document.addEventListener('DOMContentLoaded', function(){
  const images = document.querySelectorAll('.image-content');
  if("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver(function(images, observer){
      images.forEach(image => {
        if(image.isIntersecting){
          const img = image.target;
          img.src = img.dataset.src;
          imageObserver.unobserve(img);
        }
      });
    });
    [...images].forEach(image => {
      imageObserver.observe(image);
    })
  } else {
    const scrollHandler = (event) => {
      const scrollTop = window.pageYOffset;
      [...images].forEach(image => {
        // const imageTopCoord = image.getBoundingClientRect().top;
        const imageTopCoord = image.offsetTop;
        // const imageSrc = image.getAttribute('data-src');
        const imageSrc = image.dataset.src;
        image.src = imageTopCoord < scrollTop + window.innerHeight - 40 ? imageSrc : image.src;
      })
    }
    
    document.addEventListener('scroll', scrollHandler);
  }
})


// src: https://vc.ru/design/61079-uskorit-sayt-s-mnozhestvom-kartinok-rukovodstvo-po-otlozhennoy-zagruzke-izobrazheniy