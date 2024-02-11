const currentYear = () => {
    const yearNow = document.getElementById("js-current-year");
    yearNow.setAttribute("data-to", new Date().getFullYear());
}

currentYear();