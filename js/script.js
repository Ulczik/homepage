console.log("Hejka!");

let listTohide = document.querySelector(".js-list");
let listButton = document.querySelector(".js-list__button");
let listThemeName = document.querySelector(".js-list__themeName");

listButton.addEventListener("click", () => {
    listTohide.classList.toggle("list-hide");
    listThemeName.innerText = listTohide.classList.contains("list-hide") ? "Pokaż" : "Ukryj"
});

let imgDog = document.querySelector(".js-section__image-fullScrDog");
let buttonDog = document.querySelector(".js-button-fullScrDog");

buttonDog.addEventListener("click", () => {
    imgDog.requestFullscreen();
})

let buttonLizard = document.querySelector(".js-button-fullScrLizard");
let imgLizard = document.querySelector(".js-section__image-fullScrLizard");

buttonLizard.addEventListener("click", () => {
    imgLizard.requestFullscreen();
})

let buttonChangeBackground = document.querySelector(".js-button-changeBackground");
let themeName = document.querySelector(".js-themeNameBackground");
let body = document.querySelector(".body");

buttonChangeBackground.addEventListener("click", () => {
    body.classList.toggle("whiteBackground");
    themeName.innerText = body.classList.contains("whiteBackground") ? "Ciemne" : "Jasne"
});

