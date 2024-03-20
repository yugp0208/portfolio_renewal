const headerInvert = () => {
    window.addEventListener("scroll",function(){
        const windowH = window.outerHeight;//ウィンドウの高さを取得
        const scroll = window.scrollY;//現在のスクロール量を取得
        const contentsTop = document.querySelector(".js-skill").offsetTop - 50;//skill要素までの高さ
        const contentsH = document.querySelector(".js-skill").offsetHeight;//skill要素自体の高さ
        const header = document.querySelector(".js-header");
        const footerTop = document.querySelector(".js-footer").footerTop - 50;
        const footerH = document.querySelector(".js-footer").offsetHeight;

        if(scroll >= contentsTop && scroll <= contentsTop+contentsH) {
            header.classList.add("js-invert");
        }
        else{
            header.classList.remove("js-invert");
        }
    });

}

if (window.matchMedia("(min-width: 768px)").matches) {
    headerInvert();
}