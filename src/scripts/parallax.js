const sky = document.querySelector('.sky');
const mountains = document.querySelector('.mountains');
const train = document.querySelector('.train');
const grass = document.querySelector('.grass');

window.onscroll = () => {
  let yOffset = window.pageYOffset;

  if (yOffset < 870) {
    sky.style.transform = `translate3d(0, ${-(yOffset / 100) + '%'}, 0)`;
    mountains.style.transform = `translate3d(0, ${-(yOffset / 75) + '%'}, 0)`;
    train.style.transform = `translate3d(0, ${-(yOffset / 50) + '%'}, 0)`;
    grass.style.transform = `translate3d(0, ${-(yOffset / 25) + '%'}, 0)`;
  }
}
