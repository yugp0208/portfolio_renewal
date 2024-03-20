const bodyFade = () => {
    window.onload = ()=> {
        const bodyElem = document.body;
        bodyElem.animate(
            [
                {background:"#000",opacity: '0'},
                {opacity: '1'}
            ]
        ,300)
    }
}


let url = location.pathname;
if (url !== "/") {
    bodyFade();
}
