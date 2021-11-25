const $ = (selector) => document.querySelector(selector);

const event =  'onanimationend' in document.documentElement ? 'animationend' : 'webkitAnimationEnd';

$('.block').addEventListener(event, (e) => {
  $('.block').classList.add('end');
  $('.display-block').value = 'Animation ended';
});

$('.block').addEventListener("click", (e) => {
  e.target.style.animationPlayState = 'running';
  $('.block').classList.remove('end');
  $('.display-block').value = 'Animation running...';
});
