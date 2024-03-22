//gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const worksListFade = () => {
    const tl = gsap.timeline();
    const worksItem = document.querySelectorAll(".js-worksListFade");
    worksItem.forEach(function(e){
        gsap.set(e,{
            opacity:0,
            y: 10,
        });
        tl.to(e,{
            opacity:1,
            y:0,
            duration: 0.4,
            visibility: "visible",
            display: "block",
            stagger: {
                each: .5,
            },
        });
    });
}

worksListFade();