// not working very well

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
  let counter = 0;
  const timerId = setInterval(() => {
    duration += 1;
    offset += duration % 2 == 0;
    counter = duration + offset;
    $('.disk').style.animationDuration = `${counter}ms`;
    if (counter >= 5000) {
      $('.disk').style.animationPlayState = 'paused';
      $('.disk').style.animationIterationCount = '1';
      $('.disk').style.animationFillMode = 'initial';
      clearInterval(timerId);
    }
  }, 1);
});