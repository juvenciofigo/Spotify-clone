const divmusi = document.querySelectorAll(".divmusic");
const crol = document.querySelector("section");


function meuEvento(event) {
    if (event.target.children[0].classList.contains("hidden")) {
        event.target.children[0].classList.remove("hidden");
    } else {
        event.target.children[0].classList.add("hidden");
    }
}

divmusi.forEach(function (div) {
    div.addEventListener("mouseenter", meuEvento);
    div.addEventListener("mouseleave", meuEvento);
});
