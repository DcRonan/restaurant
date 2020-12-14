import image from '../images/bg-img.jpg';

const bgImg = () => {
  document.body.style.background = `url(${image})`;
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundSize = 'cover';
};

export {bgImg};
