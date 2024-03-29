import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const interestFade = () => {
    const interestImg1 = document.querySelector(".js-interest-img01");
    const interestImg2 = document.querySelector(".js-interest-img02");
    const interestImg3 = document.querySelector(".js-interest-img03");
    const interestImg4 = document.querySelector(".js-interest-img04");
    const interestImg5 = document.querySelector(".js-interest-img05");
    const interestImg6 = document.querySelector(".js-interest-img06");
    const interestImg7 = document.querySelector(".js-interest-img07");

    gsap.set(interestImg1,{
        opacity:0,
        y:30,
    });
    gsap.set(interestImg2,{
        opacity:0,
        y:30,
    });
    gsap.set(interestImg3,{
        opacity:0,
        y:30,
    });
    gsap.set(interestImg4,{
        opacity:0,
        y:30,
    });
    gsap.set(interestImg5,{
        opacity:0,
        y:30,
    });
    gsap.set(interestImg6,{
        opacity:0,
        y:30,
    });
    gsap.set(interestImg7,{
        opacity:0,
        y:30,
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".p-top__interest",
        },
    });
    tl.to(
        interestImg1,
        {
            opacity: 1,
            y:0,
            duration: 0.4,
            visibility: "visible",
            display: "block",
        },
      )
      .to(
        interestImg6,
        {
            opacity: 1,
            y:0,
            duration: 0.7,
            visibility: "visible",
            display: "block",
        }
      )
      .to(
        interestImg3,
        {
            opacity: 1,
            y:0,
            duration: 0.4,
            visibility: "visible",
            display: "block",
        }
      )
      .to(
        interestImg2,
        {
            opacity: 1,
            y:0,
            duration: 0.3,
            visibility: "visible",
            display: "block",
        }
      )
      .to(
        interestImg4,
        {
            opacity: 1,
            y:0,
            duration: 0.3,
            visibility: "visible",
            display: "block",
        }
      )
      .to(
        interestImg5,
        {
            opacity: 1,
            y:0,
            duration: 0.3,
            visibility: "visible",
            display: "block",
        }
      )
      .to(
        interestImg7,
        {
            opacity: 1,
            y:0,
            duration: 0.3,
            visibility: "visible",
            display: "block",
        }
      )
}

if (window.matchMedia("(min-width: 768px)").matches) {
    interestFade();
}