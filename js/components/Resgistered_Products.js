const main = document.querySelector("main");
import HasRegisteredProducts from "../validations/has_registered_products.js";
import products from "../../data.js";

export const DisplayRegisteredProducts = _ => {
    main.insertAdjacentHTML(
        
        'afterbegin', 
        
        products.map(product => (
            `
            <div class="preview-products" id=${product.id}>
                  <div class="d-flex">
                      <img src=${product.img} alt="" class="preview-products__img preview-products__items">
  
                      <div class="preview-products__container-description preview-products__item d-flex f-direction-column justify-space-between ">
                          <h3 class="preview-products__title">${product.title}</h3>
                          <span class="preview-products__amount">${product.amount}</span>
                          <p class="preview-products__description justify-space-between">
                          ${product.description}
                          </p>
                          <span class="preview-products__prince">R$ ${product.prince}</span>
                      </div>
  
                      <div class="preview-products__btn-container preview-products__item d-flex justify-space-between">
                          <button class="preview-products__btn">Editar</button>
                          <button class="preview-products__btn">Excluir</button>
                      </div>
                  </div>
          </div>
           `
        ))   
    ) 
}

HasRegisteredProducts(products)



const RegisterMore = () => {
    window.location.href = "../../pages/cadastrar_produtos.html"
}

document.querySelector(".preview-products__btn-register-more")
.addEventListener("click", RegisterMore)