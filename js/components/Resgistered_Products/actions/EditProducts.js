const containerDescription = document.querySelectorAll("[data-container-description]")
const btnsEdit = document.querySelectorAll("[data-edit]")
import products from "../../../../data.js"


export const  EditProducts =  _ => {
    let isClicked = false
    btnsEdit.forEach((btnEdit,index) => btnEdit.addEventListener("click", () =>  {
        isClicked = true

        const infosProducts = {
            img: containerDescription[index].parentNode.children[0].src,
            title: containerDescription[index].childNodes[1].innerText,
            amount: containerDescription[index].childNodes[3],
            description: containerDescription[index].childNodes[5].innerText,
            price: containerDescription[index].childNodes[7].innerText.replace("R$","").trim()            
        }
        // preeche campos
        document.querySelector("[data-title]").value= infosProducts.title
        const radioAmount = document.querySelectorAll(".quant-pessoas")
        document.querySelector("[data-description-product]").value = infosProducts.description
        document.querySelector("[data-price]").value = infosProducts.price
       
       
        // Categories 
        const optionsCategory = document.querySelector(".form__input-select-categories")
        const selectField = document.querySelector(".select-category")
        selectField.addEventListener("click", e => {
            if(e.target.value != "categoria") {
                products[index].category = e.target.value
                
            } else {
                console.log("por favor selecione outro campo")
            }

         })


        // input radio amount
        if(infosProducts.amount.innerText.includes("Serve 2 pessoa")) {
            radioAmount[index].checked = true
        } else if (infosProducts.amount.innerText.includes("Serve 1 pessoa")) {
            radioAmount[index].checked = true
        } else if(infosProducts.amount.innerText.includes("Familia")) {
            radioAmount[index].checked = true
        }

        // input radio  disponibility
        const disponibility = document.querySelectorAll(".disponibilidade")      
        disponibility.forEach((item, i) => item.addEventListener("click", e => {
            if(e.target.value.includes("produto-disponivel")) {
                products[i].disponibility = true
            } else if(e.target.value.includes("produto-indisponivel")) {
                products[i].disponibility = false
            }
        }))

        

        // exibir e ocultar componentes 
        const main = document.querySelector("main")
        const form = document.querySelector("form")
        if(isClicked) {
            main.classList.remove("d-flex" , "f-direction-column","align-center")
            main.classList.add("d-none")

            form.classList.remove("d-none")
            form.classList.add("form")
        }
        //logica
        //console.log(`index btn clicado: ${index} | index container pai: ${containerDescription[index].innerHTML}`)
    }))
}

EditProducts()




