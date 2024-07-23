const btnMenu = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-links")

btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("active");
    menu.classList.toggle("show")
});




// Projects folders

const folders = document.querySelectorAll(".projects .folder")

folders.forEach(folder => {
    folder.addEventListener("click", () => {

        folder.classList.remove("close")
        folder.classList.add("open")

        folder.querySelector(".btn-close").addEventListener("click", (event) => {
            folder.classList.remove("open")
            folder.classList.add("close")
            event.stopPropagation()
        })

    })
})


// ABout me 

const itensAbout = document.querySelectorAll(".about .content div");
const navLinkItensAbout = document.querySelectorAll(
    ".about .nav-link li"
);

navLinkItensAbout.forEach((li) => {
    li.addEventListener("click", () => {

        document.querySelector(".about .nav-link li.active").classList.remove("active")
        document.querySelector(".about .content div.show").classList.remove("show")

        document
            .querySelector(`.about .content .${li.className}`)
            .classList.add("show");
        li.classList.add("active");
    });
});

// Envio de formulario

const form = document.querySelector(".wrapper-form form")

form.addEventListener("submit", () => {
    form.querySelector(".btn").classList.add("loading")
})
