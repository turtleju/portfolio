const initTitle = () => {
  const textWrapper = document.querySelector('.main-subtitle .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
      .add({
        targets: '.main-subtitle .line',
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 700
      })
      .add({
        targets: '.main-subtitle .line',
        translateX: [0, document.querySelector('.main-subtitle .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 900,
        delay: 100
      }).add({
        targets: '.main-subtitle .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 800,
        offset: '-=775',
        delay: (el, i) => 34 * (i+1)
      }).add({
        targets: '.main-subtitle',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
}



export { initTitle };
