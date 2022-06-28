import products from "../../data.js"
const main = document.querySelector("main")

const $Create = document.createElement.bind(document)


const AlternativeRegistredProducts = () => {

    products.map(product => {
        //create 
        const divPreviewProdutcs = $Create("div")
        const divContainer = $Create("div")
        const img = $Create("img")
        const divContainerDescription = $Create("div")
        const descriptionTitle = $Create("h3")
        const descriptionAmount =  $Create("span")
        const descriptionP =  $Create("p")
        const descriptionPrice =  $Create("span")
        const btnContainer =  $Create("div")
        const btnEdit = $Create("button")
        const btnDelete = $Create("button")
        const btnResgisterMore = $Create("button")



        //add style
        divPreviewProdutcs.classList.add("preview-products")
        
        divContainer.classList.add("d-flex")

        img.classList.add(
        "preview-products__img",
        "preview-products__items"
        )

        divContainerDescription.classList.add(
        "preview-products__container-description",
        "preview-products__item",
        "d-flex",
        "f-direction-column",
        "justify-space-between"
        )
        
        descriptionTitle.classList.add("preview-products__title")

        descriptionAmount.classList.add("preview-products__amount")

        descriptionP.classList.add(
        "preview-products__description",
        "justify-space-between"
        )

        descriptionPrice.classList.add("preview-products__prince")

        btnContainer.classList.add(
        "preview-products__btn-container",
        "preview-products__item",
        "d-flex",
        "justify-space-between"
        )

        btnEdit.classList.add("preview-products__btn", "edit")
        
        btnDelete.classList.add("preview-products__btn", "delete")
        
        btnResgisterMore.classList.add(
        "preview-products__btn-register-more",
        "msg-no-product__button"
        )



        //add content
        img.src= product.img
        descriptionTitle.innerHTML = product.title
        descriptionAmount.innerHTML = product.amount
        descriptionP.innerHTML = product.description
        descriptionPrice.innerHTML = product.price
        btnEdit.innerHTML = "Editar"
        btnDelete.innerHTML = "Excluir"
        btnResgisterMore.innerHTML = "Cadastrar mais produtos"
        
 
        //append 
        divPreviewProdutcs.append(
            divContainer,
            btnResgisterMore
        )
            
        divContainer.append(
            img,
            divContainerDescription,
            btnContainer
        )

        divContainerDescription.append(
            descriptionTitle,
            descriptionAmount,
            descriptionPrice
        )

        btnContainer.append(
            btnEdit,
            btnDelete
        )

        main.append(divPreviewProdutcs)
    
    })

}

AlternativeRegistredProducts()