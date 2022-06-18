const $All = document.querySelectorAll.bind(document);
const form = document.querySelector("form")
const quantPessoas = [...$All(".quant-pessoas")]
const disponibilidade = [...$All(".disponibilidade")]
const btnProximaPag = document.querySelector('[data-btn-next]')
const btnCadastrar = document.querySelector(".form__btn-actions--register")
const sSecond = document.querySelector(".form__second-step")
const sFirst = document.querySelector(".form__first-step")
const imgSeta = document.querySelector("[data-img-seta]")

const validaCampos = _ => {
    const quantEncontrada = quantPessoas.find(quantP => quantP.checked === true)
    const dispoEncontrada = disponibilidade.find(dispo => dispo.checked === true)

    if(quantEncontrada && dispoEncontrada) {
        btnProximaPag.removeAttribute("disabled")
    } 
}

//visibilidade das páginas
btnProximaPag.addEventListener("click", e => {
    e.preventDefault()
    sFirst.style.display = "none" 
    btnProximaPag.style.display = "none" 
    
    sSecond.style.display = "flex" 
    btnCadastrar.style.display = "block" 

})
//voltar etapas
imgSeta.addEventListener("click", _ => {    
    sFirst.style.display = "flex"
    sSecond.style.display = "none"
    btnCadastrar.style.display = "none" 
    btnProximaPag.style.display = "block" 

})
//escuta clicks no form
form.addEventListener("click", validaCampos)

