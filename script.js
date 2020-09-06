
(function () {

    "use strict";

    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        });
    }

})();

document.querySelector('.c-hamburger').onclick = () => {
    menuCHamburger()
}

function menuCHamburger() {
    let bgDark = document.querySelector('.bg-dark');
    let menuMedia = document.querySelector('.menu-media');
    let lineVertical = document.querySelector('.opacity-vertical-line');

    bgDark.classList.toggle('hiiden-media-container');
    menuMedia.classList.toggle('hiiden-media-container');
    lineVertical.classList.toggle('opacity-vertical-line-toggle');
}

document.querySelector('.bg-dark').onclick = function () {
    let cHamb = document.querySelector(".c-hamburger");
    if (cHamb.classList.contains("is-active")) {
        cHamb.classList.remove("is-active")
        menuCHamburger()
    }
}

// document.querySelector('#startHere').onclick = function () {
//     closeStart()
// }

function closeStart() {
    let start = document.querySelector('.flexform');
    start.classList.toggle('flexform--start');
}

document.querySelector('.close').onclick = function () {
    closeStart()
}





