const main = document.querySelector("main");
//main.innerHTML = "";

const ProdutosCadastrados = (img, title, amount, description, prince) => {
    main.innerHTML += `
        <div class="preview-products d-flex">
            <img src=${img} alt="" class="preview-products__img preview-products__items">

            <div class="preview-products__container-description preview-products__item d-flex f-direction-column justify-space-between ">
                <h3 class="preview-products__title">${title}</h3>
                <span class="preview-products__amount">${amount}</span>
                <p class="preview-products__description justify-space-between">
                   ${description}
                </p>
                <span class="preview-products__prince">R$ ${prince}</span>
            </div>

            <div class="preview-products__btn-container preview-products__item d-flex justify-space-between">
                <button class="preview-products__btn">Editar</button>
                <button class="preview-products__btn">Excluir</button>
            </div>
        </div>
    `
}
const urlImg = "https://images.pexels.com/photos/8385550/pexels-photo-8385550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
ProdutosCadastrados(
    urlImg,
    "Salada de polvo", 
    "Serve 1 pessoa", 
    "Polvo fresco com legumes refogados (Cenoura, cebola, pimentão, grão de bico e pepino)...",
    "100.00"
);
ProdutosCadastrados(
    urlImg,
    "Salada de polvo", 
    "Serve 1 pessoa", 
    "Polvo fresco com legumes refogados (Cenoura, cebola, pimentão, grão de bico e pepino)...",
    "100.00"
);
ProdutosCadastrados(
    urlImg,
    "Salada de polvo", 
    "Serve 1 pessoa", 
    "Polvo fresco com legumes refogados (Cenoura, cebola, pimentão, grão de bico e pepino)...",
    "100.00"
);