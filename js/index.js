const navLinks = document.querySelectorAll(".nav__link")

navLinks.forEach((link, index) => link.addEventListener("click", (e) => {
    e.preventDefault()

    console.log(e)
    e.target.classList.toggle("corzinha")
    alert(e.target.id )
}))