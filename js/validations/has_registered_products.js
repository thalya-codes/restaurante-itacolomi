import {DisplayRegisteredProducts} from "../components/Resgistered_Products/Resgistered_Products.js"

const HasRegisteredProducts = products => {
    if(products.length === 0 ) {
        window.location.href = "../../index.html"
    } else {
        DisplayRegisteredProducts()
    }
}


export default HasRegisteredProducts