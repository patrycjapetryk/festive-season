import '../scss/main.scss';

// show images when loaded

const images = document.querySelectorAll('.grid-gallery__image--js');

const showImagesOnload = (item) => {
  item.style.opacity = 0;

  if (!item.complete) {
    item.addEventListener('load', (e) => {
      item.style.opacity = 1;
    });
  } else {
    item.style.opacity = 1;
  }
};

images.forEach((item) => {
  showImagesOnload(item);
});

// packshots animation on mobile

const animatedItems = document.querySelectorAll('.animation-on-mobile--js');

let animationInterval;
let opacity = 0;

const changeItemsOpacity = () => {
  if (opacity === 1) {
    opacity = 0;
  } else {
    opacity = 1;
  }
  animatedItems.forEach((item) => {
    item.style.opacity = opacity;
  });
};

const clearAnimateOpacityInterval = () => {
  if (animationInterval) {
    clearInterval(animationInterval);
  }
};

const setAnimateOpacityInterval = () => {
  clearAnimateOpacityInterval();
  animationInterval = setInterval(changeItemsOpacity, 2000);
};

const animateItemsOnMobile = () => {
  if (window.innerWidth < 455) {
    setAnimateOpacityInterval();
  } else {
    clearAnimateOpacityInterval();
  }
};

animateItemsOnMobile();

window.addEventListener('resize', animateItemsOnMobile);
