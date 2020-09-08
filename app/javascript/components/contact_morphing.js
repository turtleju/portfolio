const initContactMorphing = () => {
  const wrapAction  = document.querySelector('#wrap-action'),
        btnAction   = document.querySelector('#action'),
        content  = document.querySelector('#content'),
        btnClose = document.querySelector('#close');


  const common = {
    targets: '.polymorph',
    easing: 'easeOutQuad',
    duration: 600,
    loop: false
  };


  btnAction.addEventListener('click', () => {
    wrapAction.classList.remove('active');
    content.classList.add('active');

    anime({
      ...common,
      points: [
        { value: '215,110 0,110 186,86 215,0' }
      ],
    });
  });


  btnClose.addEventListener('click', () => {
    content.classList.remove('active');
    wrapAction.classList.add('active');

    anime({
      ...common,
      points: [
        { value: '215,110 0,110 0,0 215,0' }
      ]
    });
  });
}

export { initContactMorphing };
