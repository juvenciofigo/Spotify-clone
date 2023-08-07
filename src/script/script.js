const divmusi = document.querySelectorAll(".divmusic");
const crol = document.querySelector("section");

function meuEvento(event) {
    event.target.children[0].classList.toggle("hidden");
}

divmusi.forEach(function (div) {
    div.addEventListener("mouseenter", meuEvento);
    div.addEventListener("mouseleave", meuEvento);
});

document.querySelector(".closeHeaderMobile").addEventListener("click", () => (document.querySelector(".headerMobile").style.display = "none"));
document.querySelector(".cogIcon").addEventListener("click", () => (document.querySelector(".headerMobile").style.display = "flex"));
