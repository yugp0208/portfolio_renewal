const hamburgerBtn = () => {
    const hamburgerButton = document.querySelector('#js-hamburger');
    const hamburgerDrawer = document.querySelector("#js-hamburgerDrawer");
    const drawerNav = document.querySelectorAll(".c-hamburger__drawer__nav__item");
    const drawerNavLink = document.querySelectorAll(".c-hamburger__drawer__nav__item a");

    hamburgerButton.addEventListener('click', (e) => {
        const isExpanded = e.currentTarget.getAttribute("aria-expanded") !== "false";
        e.currentTarget.setAttribute("aria-expanded", !isExpanded);
        document.documentElement.classList.toggle("is-drawerActive");
        hamburgerDrawer.classList.toggle("is-active");
        document.body.classList.toggle("no-scroll");
        drawerNav.forEach(function(e) {
            e.classList.toggle("is-active");
        })
    })

    drawerNavLink.forEach(function(e) {
        e.addEventListener('click',(e) => {
            hamburgerDrawer.classList.remove("is-active");
            hamburgerButton.setAttribute('aria-expanded', 'true');
            document.body.classList.remove("no-scroll");
            drawerNav.forEach(function(e){
                e.classList.remove("is-active");
            });
        });
    });
}

hamburgerBtn();


