import axios from "axios";

export const getProduct = (callback) => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
        console.log(res.data);
    }).catch(err => {
        console.log(err);
    })

}