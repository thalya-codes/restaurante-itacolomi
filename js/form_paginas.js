const $All = document.querySelectorAll.bind(document);
const form = document.querySelector("form")
const quantPessoas = [...$All(".quant-pessoas")]
const disponibilidade = [...$All(".disponibilidade")]
const btnProximaPag = document.querySelector('[data-btn-next]')
const btnCadastrar = document.querySelector(".form__btn-actions--register")
const sSecond = document.querySelector(".form__second-step")
const sFirst = document.querySelector(".form__first-step")
const imgSeta = document.querySelector("[data-img-seta]")

const validaCampos = e => {
    const quantEncontrada = quantPessoas.find(quantP => quantP.checked === true)
    const dispoEncontrada = disponibilidade.find(dispo => dispo.checked === true)
    const inputsText =  $All(".form__input-text")
    const selectCategoria = document.querySelector(".form__input-select--categoria")
    const options = [...document.querySelectorAll('option')]

    selectCategoria.addEventListener("change", (e, indx) => {
        console.log(e.target)
    })
    /*  convertendo value para string ++ condicional
    const str = options[0].value.toString()
    console.log(str.indexOf("parraa"))
    
    */
    if(quantEncontrada && dispoEncontrada) {
        btnProximaPag.removeAttribute("disabled")
        return true
    }  else {
        return false
    }
}

//visibilidade das páginas
btnProximaPag.onclick = e => {
    e.preventDefault()
}
/*
btnProximaPag.addEventListener("click", e => {
    e.preventDefault()


    if(validaCampos()) {
        sFirst.style.display = "none" 
        btnProximaPag.style.display = "none" 
        
        sSecond.style.display = "flex" 
        btnCadastrar.style.display = "block" 
    }
    

})
*/

//voltar etapas

//escuta clicks no form
form.addEventListener("click", validaCampos)

