const initSignature = () => {
  const svgPath = document.querySelectorAll('.signature');

  const svgText = anime({
    targets: svgPath,
    loop: true,
    direction: 'alternate',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 500,
    delay: (el, i) => { return i * 500 }
  });
}

export { initSignature };
