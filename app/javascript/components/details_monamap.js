const initDetailsMonamap = () => {
  const detailsMonamap  = document.querySelector('#details-monamap'),
        openMonamap = document.querySelector('#details-action-monamap'),
        closeMonamap = document.querySelector('#close-project-monamap'),
        video = document.querySelector('#video-monamap');

  openMonamap.addEventListener('click', () => {
    detailsMonamap.classList.add('active');

    anime({
      targets: detailsMonamap,
      scale: 0.98,
      easing: 'easeInOutQuad',
      direction: 'alternate',
    });
  });

  closeMonamap.addEventListener('click', () => {
    detailsMonamap.classList.remove('active');
    // console.log(video)
    // video.pause();
  });
}

export { initDetailsMonamap };
