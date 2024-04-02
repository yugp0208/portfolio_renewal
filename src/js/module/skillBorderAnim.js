//gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillBorderAnim = () => {
    const skillTtl = document.querySelectorAll(".p-top__skill__item__ttl");
    const skillSec = document.querySelector(".p-top__skill")
    const skillDesc = document.querySelectorAll(".p-top__skill__item__txt");

        ScrollTrigger.create({
            trigger: skillSec,
            start: "top 80%",
            ease: "power4.out",
            toggleClass: {
                targets: skillTtl,
                className: "is-active",
            },
            once: true,
        });

        skillTtl.forEach(function(fadeInItem){
            gsap.fromTo(fadeInItem,
                    {
                        opacity:0,
                        y:15,
                    },
                    {
                        opacity:1,
                        y:0,
                        duration: 1.8,
                        visibility: "visible",
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: fadeInItem,
                        },
                    }
            );
        });

        skillDesc.forEach(function(fadeInDesc){
            gsap.fromTo(fadeInDesc,
                {
                    opacity:0,
                    y:15,
                },
                {
                    opacity:1,
                    y:0,
                    duration:1,
                    visibility: "visible",
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: fadeInDesc,
                    },
                }
            )
        });

}

skillBorderAnim();