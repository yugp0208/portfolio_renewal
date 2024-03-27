//gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const worksListFade = () => {
    const worksItem = document.querySelectorAll(".js-worksListFade");
    const worksListTrigger = document.querySelector(".js-worksListTrigger");
    gsap.fromTo(worksItem,
        {
            opacity:0,
            y:15,
        },
        {
            opacity:1,
            y:0,
            duration: 0.4,
            visibility: "visible",
            display: "block",
            stagger: {
                each: 0.3,
            },
            scrollTrigger: {
                trigger: worksListTrigger,
                start: 'top center',
            },
        }
    );
}

worksListFade();