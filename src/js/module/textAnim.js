import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

let targets = document.querySelectorAll('.js-target-inview');

const cb = function(entries, observer) {
    entries.forEach(function(entry){
        if(entry.isIntersecting) {
              const split = new SplitType("#js-split");
              const splitChar = document.querySelectorAll("#js-split .char");
              gsap.to(splitChar, {
                y: 0,
                stagger: 0.02
              });
            observer.unobserve(entry.target);
        }
    });
}

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
}

const io = new IntersectionObserver(cb, options);

targets.forEach(function(object){
    io.observe(object);
});