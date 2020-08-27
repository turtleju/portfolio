const initUpdateNavbarOnScroll = () => {
  let scrollpos = window.scrollY
  const header = document.querySelector(".navbar")
  const header_height = header.offsetHeight


  const add_class_on_scroll = () => header.classList.add("navbar-white")
  const remove_class_on_scroll = () => header.classList.remove("navbar-white")


  window.addEventListener('scroll', function() {
    scrollpos = window.scrollY

    if (scrollpos >= header_height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

  })
}

export { initUpdateNavbarOnScroll };
