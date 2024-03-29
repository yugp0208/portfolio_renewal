import simpleParallax from 'simple-parallax-js';

const parallaxElem = document.getElementsByClassName("js-parallax");
console.log(parallaxElem)
new simpleParallax(parallaxElem,{
    scale: 1.2
});