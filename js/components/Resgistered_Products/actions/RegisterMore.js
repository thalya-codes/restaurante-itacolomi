const btn = document.querySelector(".preview-products__btn-register-more")
import products from "../../../../data.js"
const RegisterMore = () => {
    window.location.href = "../../../../pages/cadastrar_produtos.html"
}



btn.addEventListener("click", RegisterMore)