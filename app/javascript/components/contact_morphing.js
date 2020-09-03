const initContactMorphing = () => {
  /** Inspired by coursetro.com **/

  // Refs
  const wrapAction  = document.querySelector('#wrap-action'),
        btnAction   = document.querySelector('#action'),
        content  = document.querySelector('#content'),
        btnClose = document.querySelector('#close');


  // Anime.js Commons Values for SVG Morph
  const common = {
    targets: '.polymorph',
    easing: 'easeOutQuad',
    duration: 600,
    loop: false
  };


  // Show content
  btnAction.addEventListener('click', () => {
    // Elements apparence
    wrapAction.classList.remove('active');
    content.classList.add('active');

    // Morph SVG
    anime({
      ...common,
      points: [
        { value: '215,110 0,110 186,86 215,0' }
      ],
    });
  });


  // Hide content
  btnClose.addEventListener('click', () => {
    // Elements apparence
    content.classList.remove('active');
    wrapAction.classList.add('active');

    // Morph SVG
    anime({
      ...common,
      points: [
        { value: '215,110 0,110 0,0 215,0' }
      ]
    });
  });
}

export { initContactMorphing };
