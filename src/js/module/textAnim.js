import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let splitTarget = document.querySelectorAll('.js-split');
splitTarget.forEach((target) => {
    if(!target.classList.contains('is-active')){
        let newText = '';
        let spanText = target.innerHTML;
        spanText.split('').forEach((char) => {
            newText += '<span>' + char + '</span>';
        });
        target.innerHTML = newText;
    }
});

let textEffect = document.querySelectorAll('.js-split-effect');
textEffect.forEach((target)=>{
    let spans = target.querySelectorAll('span');
    gsap.to(spans,{
        duration:0.2,
        autoAlpha:1,
        rotateY:'0deg',
        stagger:{
            each:0.16
        },
        scrollTrigger:{
            trigger:target,
            start:'bottom bottom',
        }
    })
})