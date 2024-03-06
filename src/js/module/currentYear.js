const currentYear = () => {
    const yearNow = document.getElementById("js-current-year");
    yearNow.setAttribute("data-to", new Date().getFullYear());
}

let url = location.href;
let url_search = url.includes("index.html");
if (url_search) {
    currentYear();
}