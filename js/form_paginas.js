const $All = document.querySelectorAll.bind(document);
const form = document.querySelector("form")
const quantPessoas = [...$All(".quant-pessoas")]
const disponibilidade = [...$All(".disponibilidade")]
const btnProximaPag = document.querySelector('[data-btn-next]')
const btnCadastrar = document.querySelector(".form__btn-actions--register")
const sSecond = document.querySelector(".form__second-step")
const sFirst = document.querySelector(".form__first-step")

const validaCampos = _ => {
    const quantEncontrada = quantPessoas.find(quantP => quantP.checked === true)
    const dispoEncontrada = disponibilidade.find(dispo => dispo.checked === true)

    if(quantEncontrada && dispoEncontrada) {
        btnProximaPag.removeAttribute("disabled")
    } 
}

btnProximaPag.addEventListener("click", e => {
    e.preventDefault()
    sFirst.style.display = "none" 
    btnProximaPag.style.display = "none" 
    
    sSecond.style.display = "flex" 
    btnCadastrar.style.display = "block" 

})

form.addEventListener("click", validaCampos)

