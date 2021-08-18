const initDetailsIpm = () => {
  const detailsIpm  = document.querySelector('#details-ipm'),
        openIpm = document.querySelector('#details-action-ipm'),
        closeIpm = document.querySelector('#close-project-ipm');

  openIpm.addEventListener('click', () => {
    detailsIpm.classList.add('active');

    anime({
      targets: detailsIpm,
      scale: 0.98,
      easing: 'easeInOutQuad',
      direction: 'alternate',
    });
  });

  closeIpm.addEventListener('click', () => {
    detailsIpm.classList.remove('active');
  });
}

export { initDetailsIpm };
