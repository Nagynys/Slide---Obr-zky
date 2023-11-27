const slides = document.querySelectorAll(".slide")

slides.forEach( (oneSlide) => {
    oneSlide.addEventListener("click", () => {
        deleteActiveClass()
        oneSlide.classList.add("active")
    })
})

function deleteActiveClass() {
    slides.forEach( (mySlide) => {
        mySlide.classList.remove("active")
    })
}