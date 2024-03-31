import $ from "jquery";

const visitButton = () => {
    const visitBtn = document.querySelector(".js-visitButton");

    //任意のスクロール値を超えたらボタンを消す
    const fixedBtn = document.querySelector(".fixed");
    let isScrolled = false;
    window.addEventListener("scroll", () => {
        //スクロール値が100pxを超えたら
        if (window.scrollY > 100) {
            if (!isScrolled) {
                isScrolled = true;
                fixedBtn.classList.add("is-scrolled");
                fixedBtn.inert = false;
            }
        }
        else {
            if (isScrolled) {
                isScrolled = false;
                fixedBtn.classList.remove("is-scrolled");
                fixedBtn.inert = true;
            }
        }
    });
}

visitButton();