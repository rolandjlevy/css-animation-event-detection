const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const event =  'onanimationend' in document.documentElement ? 'animationend' : 'webkitAnimationEnd';

// Standard syntax
$('.block').addEventListener(event, (e) => {
  $('.block').classList.add('end');
  $('.display').value = 'Animation ended';
});

$('.block').addEventListener("click", (e) => {
  e.target.style.animationPlayState = 'running';
  $('.block').classList.remove('end');
  $('.display').value = 'Animation running...';
});