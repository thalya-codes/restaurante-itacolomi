const containerDescription = document.querySelectorAll("[data-container-description]")
const btnsEdit = document.querySelectorAll("[data-edit]")
import products from "../../../../data.js"
import formValidation from "../../../validations/form_validation.js"

export const  EditProducts =  _ => {
    let isClicked = false
    btnsEdit.forEach((btnEdit,index) => btnEdit.addEventListener("click", (e) =>  {
        isClicked = true

        //exibição
        const infosProducts = {
            img: containerDescription[index].parentNode.children[0].src,
            title: containerDescription[index].childNodes[1],
            amount: containerDescription[index].childNodes[3],
            description: containerDescription[index].childNodes[5],
            price: containerDescription[index].childNodes[7]           
        }



        // preeche campos
        document.querySelector("[data-title]").value= infosProducts.title.innerText
        const radioAmount = document.querySelectorAll(".quant-pessoas")
        document.querySelector("[data-description-product]").value = infosProducts.description.innerText
        document.querySelector("[data-price]").value = infosProducts.price.innerText.replace("R$","").trim() 
        const disponibility = document.querySelectorAll(".disponibilidade")      
        console.log(disponibility.value)


        // Categories 
        const optionsCategory = document.querySelectorAll("[data-select-categories]")

        optionsCategory.forEach(item => {
            if(item.value.includes(products[index].category)) {
              item.selected = true                
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

            // traz o valor default do produto para preecher os campos
            if(disponibility[index].value.includes("produto-disponivel")) {
                disponibility[index].checked = true
     
            } else if(disponibility[index].value.includes("produto-indisponivel")) {
                disponibility[index].checked = true
            }

            // amazena a alteração
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


        // voltar a pagina anterior
        const btnToGoBack = document.querySelector("[data-to-go-back]")
        btnToGoBack.onclick = _ => {
            main.classList.add("d-flex" , "f-direction-column","align-center")
            main.classList.remove("d-none")
            form.classList.remove("form")
            form.classList.add("d-none")
        }

        const $ = document.querySelector.bind(document)
        const title =$("[data-title]")
        const description = $("[data-description-product]")
        const price = $("[data-price]")
        
        formValidation(title, description, price)
        //logica
        //console.log(`index btn clicado: ${index} | index container pai: ${containerDescription[index].innerHTML}`)
    }))
}




EditProducts()
