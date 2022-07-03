
const formValidation = (title, description, price) => {
    const btnNext = document.querySelector("[data-btn-next]")
    const fields = [title, description, price]
    btnNext.removeAttribute("disabled")
    fields.forEach(field => field.addEventListener("change", _ => {
        if(title.value != "" && description.value != "" && price.value !="") {
            btnNext.removeAttribute("disabled")
        } else {
            btnNext.setAttribute("disabled", "disabled")
        }

    }) )
}

export default formValidation

