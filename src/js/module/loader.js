//gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

//loader
const loaderAnimation = () => {
    const loaderBg = document.querySelector('.js-loader-bg');//load時の背景
    const loaderName = document.querySelector('.js-loader-name');//load時の名前
    const header = document.querySelector(".js-header");//header要素
    const kvTtl = document.querySelector(".p-top__kv__ttl");//kvのttl
    const kvPeriod = document.querySelector(".p-top__kv__period");//kvの年数
    const kvScroll = document.querySelector(".p-top__kv__scroll");//scroll

    //notScroll
    function disableScroll() {
        document.body.classList.add('no-scroll');
    }
    function enableScroll() {
        document.body.classList.remove('no-scroll');
    }

    //countUp
    const countUp = () => {
        const duration = 3200;
        const count = document.querySelector(".js-count");
        const from = parseInt(count.dataset.from, 10);
        const to = parseInt(count.dataset.to, 10);
    
        const startTime = Date.now();
    
        const timer = setInterval(() => {
            const elapsedTime = Date.now() - startTime
            const progress = elapsedTime / duration
            if (progress < 1) {
                count.textContent = Math.floor(from + progress * (to - from))
            } else {
                count.textContent = to
                clearInterval(timer)
            }
        },20);
    }

    disableScroll();
  
    gsap.set(header,{
      opacity:0,
      y: -30,
    })
    gsap.set(kvTtl,{
      opacity:0,
      y: 50,
    })
    gsap.set(kvPeriod,{
      opacity:0,
      y: 50,
    })
    gsap.set(kvScroll,{
      opacity:0,
      y: 50,
    })
    gsap.set(loaderName,{
      opacity:0,
      y:0
    })
  
    //AnimationStart
    const tl = gsap.timeline();
    tl.to(
      loaderName,
      {
        opacity: 1,
        y:0,
        duration: 2,
      }
    )
    .to(loaderName,{
      opacity:0,
      duration: 2,
    })
    .to(loaderBg,{
      y:"-100%",
      duration:1,
      ease: "Power4.easeOut"
    })
    .to(kvTtl,{
      opacity:1,
      y:0,
      onComplete:() => {
        enableScroll();
      }
    })
    .to(kvPeriod,{
      opacity:1,
      y:0,
      onComplete:() => {
        countUp();
      }
    })
    .to(kvScroll,{
      opacity:1,
      y:0
    })
    .to(header,{
      opacity:1,
      y:0,
    })
}

loaderAnimation();