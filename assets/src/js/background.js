import image from './images/bg-img.jpg';

const body = document.getElementById('body');

const bgImg = () => {
  body.style.background = `url(${image})`;
  body.style.backgroundRepeat = 'no-repeat';
  body.style.backgroundAttachment = 'fixed';
  body.style.backgroundPosition = 'center';
  body.style.backgroundSize = 'cover';
};

export {bgImg};
