var elem = document.querySelectorAll('img');

function visible(e, i){
  e.pos = {
    top: window.pageYOffset + e.getBoundingClientRect().top,
    bottom: window.pageYOffset + e.getBoundingClientRect().bottom
  };
  window.pos = {
    top: window.pageYOffset,
    bottom: window.pageYOffset + document.documentElement.clientHeight
  };
  if(e.pos.bottom > window.pos.top && e.pos.top < window.pos.bottom)
    e.style.opacity = 1;
}

window.onscroll = function(){
  for(var i = 0; i < elem.length; i++) {
  visible(elem[i]);
}
  
};