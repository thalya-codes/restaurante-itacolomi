const main = document.querySelector("main");
import HasRegisteredProducts from "../validations/has_registered_products.js";

const urlImg = "https://images.pexels.com/photos/8385550/pexels-photo-8385550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

const products = [
    {
        id:  0,
        img: urlImg, title: "Salada de polvo",
        amount: "Serve 1 pessoa",
        description: "Polvo fresco com legumes refogados (Cenoura, cebola, pimentão, grão de bico e pepino)...",
        prince: "100.00",

    },
    {
        id:  1,
        img: urlImg, title: "Salada de polvo",
        amount: "Serve 1 pessoa",
        description: "Polvo fresco com legumes refogados (Cenoura, cebola, pimentão, grão de bico e pepino)...",
        prince: "100.00",
    },
    
]

export const DisplayRegisteredProducts = _ => {
    main.innerHTML += products.map((product) => (
        `
          <div class="preview-products d-flex" id=${product.id}>
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
    `
    ))
}

HasRegisteredProducts(products)
