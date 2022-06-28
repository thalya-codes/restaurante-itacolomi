import {DisplayRegisteredProducts} from "../components/Resgistered_Products.js"
import products from "../../data.js"

const HasRegisteredProducts = products => {
    if(products.length === 0 ) {
        window.location.href = "../../index.html"
    } else {
        DisplayRegisteredProducts()
    }
}


export default HasRegisteredProducts