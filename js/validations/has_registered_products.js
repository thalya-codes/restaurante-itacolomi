import {DisplayRegisteredProducts} from "../components/Registered_Products.js"

const HasRegisteredProducts = products => {
    if(products.length === 0 ) {
        window.location.href = "../../index.html"
    } else {
        DisplayRegisteredProducts()
    }
}

export default HasRegisteredProducts