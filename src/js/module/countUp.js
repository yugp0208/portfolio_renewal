// const countUp = () => {
//     const duration = 3600;
//     const count = document.querySelector(".js-count");
//     const from = parseInt(count.dataset.from, 10);
//     const to = parseInt(count.dataset.to, 10);

//     const startTime = Date.now();

//     const timer = setInterval(() => {
//         const elapsedTime = Date.now() - startTime
//         const progress = elapsedTime / duration
//         if (progress < 1) {
//             count.textContent = Math.floor(from + progress * (to - from))
//         } else {
//             count.textContent = to
//             clearInterval(timer)
//         }
//     },20);
// }

// countUp();