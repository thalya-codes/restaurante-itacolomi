import HasRegisteredProducts from "../../validations/has_registered_products.js";
import products from "../../../data.js";
const main = document.querySelector("main")


export const DisplayRegisteredProducts = () => {
    const btnResgisterMore = document.createElement("button")
    btnResgisterMore.classList.add("preview-products__btn-register-more",  "msg-no-product__button")
    btnResgisterMore.innerText = "Cadastrar mais produtos"

    main.innerHTML = `
        ${products.map(product => (
            `
            <div class="preview-products" id=${product.id}>
                <div class="d-flex" data-container-preview-products>
                    <img src=${product.img} alt=""
                    class="preview-products__img preview-products__items"
                    data-img-product
                    >

                    <div 
                    class="preview-products__container-description
                    preview-products__item d-flex f-direction-column 
                    justify-space-between " data-container-description>

                        <h3 class="preview-products__title" data-title-product>${product.title}</h3>
                        <span class="preview-products__amount"data-amount>${product.amount}</span>
                        <p class="preview-products__description justify-space-between" data-description>
                        ${product.description}
                        </p>
                        <span class="preview-products__prince" data-prince>R$ ${product.price}</span>
                    </div>

                    <div class="preview-products__btn-container preview-products__item d-flex justify-space-between">
                        <button class="preview-products__btn editar" data-edit>Editar</button>
                        <button class="preview-products__btn" data-delete>Excluir</button>
                    </div>
                </div>
           </div>
            `
        ))}
    
    `

    main.insertAdjacentElement("beforeend", btnResgisterMore)

}


HasRegisteredProducts(products)







