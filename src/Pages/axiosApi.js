import axios from "axios";

export const getData = (page=1) => {
  return axios.get(`http://localhost:8080/Skin_Products?_page=${page}&_limit=18`);
};


export const setCartData = ({
  productImage,
  productName,
  productOffer,
  productPrice,
  id,
}) => {
  return axios({
    url: "http://localhost:8080/CartData",
    method: "POST",
    data: {
      productImage,
      productName,
      productOffer,
      productPrice,
      id,
    },
  });
};

export const getCartData = () =>{
    return axios.get("http://localhost:8080/CartData")
}

export const deleteCartData = (id) =>{
    return axios({
        url: `http://localhost:8080/CartData/${id}`,
        method: "DELETE"
    })
}