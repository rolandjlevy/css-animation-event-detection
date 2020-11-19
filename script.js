const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const event =  'onanimationend' in document.documentElement ? 'animationend' : 'webkitAnimationEnd';

// Standard syntax
$('.block').addEventListener(event, (e) => {
  $('.block').classList.add('end');
  $('.display-block').value = 'Animation ended';
});

$('.block').addEventListener("click", (e) => {
  e.target.style.animationPlayState = 'running';
  $('.block').classList.remove('end');
  $('.display-block').value = 'Animation running...';
});

$('.disk').addEventListener(event, (e) => {
  $('.disk').classList.add('end');
  $('.display-disk').value = 'Animation ended';
});

$('.start').addEventListener("click", (e) => {
  $('.disk').style.animationPlayState = 'running';
  $('.disk').style.animationIterationCount = 'infinite';
  $('.disk').classList.remove('end');
  $('.display-disk').value = 'Animation running...';
});

$('.stop').addEventListener("click", (e) => {
  let duration = 1000;
  let offset = 0;
  let counter;
  const timerId = setInterval(() => {
    duration += 1;
    offset += duration % 2 == 0;
    counter = duration + offset;
    $('.disk').style.animationDuration = `${counter}ms`;
    if (counter >= 5000) {
      $('.disk').style.animationPlayState = 'paused';
      $('.display-disk').value = 'Animation ended';
      clearInterval(timerId);
    }
  }, 1);
});