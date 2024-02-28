$(".card").click(function () {
    $(".card").removeClass("active");
    $(this).addClass("active");
});

/*----When a card is click jquery removes the class "active" and then it adds it to the clicked element----*/
var mobileNav = document.getElementById("mobile-dropdown");
var open = document.getElementById("open");
var close = document.getElementById("close");

open.addEventListener("click", function (event) {
    event.preventDefault();
    mobileNav.style.display = "block";
    open.style.display = "none";
    close.style.display ="block";
})

close.addEventListener("click", function (event) {
    event.preventDefault();
    mobileNav.style.display = "none";
    close.style.display = "none";
    open.style.display = "block";
});

/*--------transition fuction--------*/
/*function easeIn() {
    open.addEventListener("click", function (event) {
        event.preventDefault();
        dropdown.style.transition = .5s easeIn;
    })
}*/

let list = document.querySelector(".list");
let items = document.querySelectorAll(".item");
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthItems = items.length - 1;
next.onclick = function () {
    if (active + 1 > lengthItems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlider();
}

prev.onclick = function () {
    if (active - 1 < 0) {
        active = lengthItems;
    } else {
        active = active - 1;
    }
    reloadSlider();
}

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    /*The offsetLeft property returns the left position 
    (in pixels) relative to the parent.*/
    list.style.left = -checkLeft + "px";

    let lastActiveDot = document.querySelector(".slider .dots li.active");
    lastActiveDot.classList.remove("active");
    dots[active].classList.add("active");
}





   

