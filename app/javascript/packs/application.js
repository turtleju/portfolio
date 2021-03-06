// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require('jquery')

import "bootstrap";
import anime from 'animejs/lib/anime.es.js';

import { initSignature } from '../components/signature';
import { initUpdateNavbarOnScroll } from '../components/navbar';
import { initSmoothScroll } from '../components/smoothscroll';
import { initContactMorphing } from '../components/contact_morphing';
import { initDetailsMonamap } from '../components/details_monamap';
import { initDetailsIpm } from '../components/details_ipm';

document.addEventListener('turbolinks:load', () => {
  initSignature();
  initUpdateNavbarOnScroll();
  initSmoothScroll();
  initContactMorphing();
  initDetailsMonamap();
  initDetailsIpm();
});

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
