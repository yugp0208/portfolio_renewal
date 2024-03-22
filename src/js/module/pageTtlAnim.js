//gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const pageTitleAnim = () => {
    const tl = gsap.timeline();
    const pageTtl = document.querySelectorAll(".js-pageTtl");
    pageTtl.forEach(function(e){
        gsap.set(e,{
            opacity:0,
            y: 20,
        });
        tl.to(
            e,
            {
                opacity:1,
                y:0,
                duration: 0.6,
                visibility: "visible",
                display: "block",
            }
        )
    });
}

pageTitleAnim();