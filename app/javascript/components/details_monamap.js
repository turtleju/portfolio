const initDetailsMonamap = () => {
  const detailsMonamap  = document.querySelector('#details-monamap'),
        detailsAction = document.querySelector('#details-action'),
        btnClose = document.querySelector('#close-project'),
        video = document.querySelector('#video');

  detailsAction.addEventListener('click', () => {
    detailsMonamap.classList.add('active');

    anime({
      targets: detailsMonamap,
      scale: 0.95,
      easing: 'easeInOutQuad',
      direction: 'alternate',
    });
  });

  btnClose.addEventListener('click', () => {
    detailsMonamap.classList.remove('active');
    // console.log(video)
    // video.pause();
  });
}

export { initDetailsMonamap };
