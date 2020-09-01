const initSmoothScroll = () => {
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 400
  }, {
    easing: 'easeInOutQuad'
  });
}

export { initSmoothScroll };
