const funcCircle = () => {
    const circles = document.querySelectorAll('.js-morebtn');
    if (!circles.length) return;

    circles.forEach((circle) => {
        const circleIcon = circle.querySelector('.js-circle-01-icon');
        const rLength = 2 * Math.PI * circleIcon.getAttribute("r");
        let animation;
        circleIcon.style.strokeDasharray = rLength;
        circleIcon.style.strokeDashoffset = rLength;

        circle.addEventListener("mouseover", () => {
            animation = gsap.fromTo(circleIcon, {
                strokeDashoffset: rLength,
                opacity: 1,
            }, {
                duration: 1,
                strokeDashoffset: 0,
                ease: CustomEase.create("custom", "M0,0 C0.49,0 1,0.99 1,1 "),
            });
        })

        circle.addEventListener("mouseout", () => {
            animation.pause();
            gsap.to(circleIcon, {
                duration: 0.2,
                opacity: 0
            })
        })
    })
}

funcCircle();