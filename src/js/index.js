import '../scss/main.scss';

const images = document.querySelectorAll('.grid-gallery__image--js');

images.forEach((item) => {
  item.style.opacity = 0;

  if (!item.complete) {
    item.addEventListener('load', (e) => {
      item.style.opacity = 1;
    });
  } else {
    item.style.opacity = 1;
  }
});
