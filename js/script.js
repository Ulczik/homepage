{
    const welcome = () => {
        console.log("Hejka!")
    }

    const toggleBackground = () => {
        body = document.documentElement;
        const themeName = document.querySelector(".js-themeNameBackground");

        body.classList.toggle("whiteBackground");
        themeName.innerText = body.classList.contains("whiteBackground") ? "Ciemne" : "Jasne"
    }

    const toggleList = () => {
        const listTohide = document.querySelector(".js-list");
        const listThemeName = document.querySelector(".js-list__themeName");

        listTohide.classList.toggle("list-hide");
        listThemeName.innerText = listTohide.classList.contains("list-hide") ? "Pokaż" : "Ukryj"
    }

    const onFullScrDog = () => {
        const imgDog = document.querySelector(".js-section__image-fullScrDog");
        imgDog.requestFullscreen();
    }

    const onFullScrLizard = () => {
        const imgLizard = document.querySelector(".js-section__image-fullScrLizard");
        imgLizard.requestFullscreen();
    }

    const init = () => {
        const listButton = document.querySelector(".js-list__button");
        listButton.addEventListener("click", toggleList);

        const buttonDog = document.querySelector(".js-button-fullScrDog");
        buttonDog.addEventListener("click", onFullScrDog);
        
        const buttonLizard = document.querySelector(".js-button-fullScrLizard");
        buttonLizard.addEventListener("click", onFullScrLizard);

        const buttonChangeBackground = document.querySelector(".js-button-changeBackground");
        buttonChangeBackground.addEventListener("click", toggleBackground);

        welcome();
    }
    init();
}