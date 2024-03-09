const currentYear = () => {
    const yearNow = document.getElementById("js-current-year");
    yearNow.setAttribute("data-to", new Date().getFullYear());
}

let url = window.location.pathname;
console.log(url)
if(url !== "/about.html" & url !== "/works.html"){
    currentYear();
}