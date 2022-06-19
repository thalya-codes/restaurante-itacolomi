import axios from "axios";

const sendInfosProducts = () => {

    axios.post("https://bootcamp-code-like-a-girl.herokuapp.com/products", data)
    .then(response => console.log(response))
} 


const data = {
    "name": "Prato de salada",
    "category_id": 4
}

