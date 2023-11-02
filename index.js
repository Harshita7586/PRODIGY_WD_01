let navbar = document.getElementById("navbar");

window.onscroll = function () {
    changeOnScroll();
};

function changeOnScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

let menuItems = document.getElementsByClassName("menu-item");
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("mouseover", function () {
        this.style.backgroundColor = "#111";
    });
    menuItems[i].addEventListener("mouseout", function () {
        this.style.backgroundColor = "";
    });
}