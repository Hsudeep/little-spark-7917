import axios from "axios";

export const getData = (page) => {
  return axios.get(
    `http://localhost:8080/Skin_Products?_page=${page}&_limit=18`
  );
};

export const setCartData = ({
  productImage,
  productName,
  productOffer,
  productPrice,
  id,
  count,
  subTotal,
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
      count,
      subTotal,
    },
  });
};

export const getCartData = () => {
  return axios.get("http://localhost:8080/CartData");
};

export const deleteCartData = (id) => {
  return axios({
    url: `http://localhost:8080/CartData/${id}`,
    method: "DELETE",
  });
};

export const CountIncrement = (dataOfCart) => {
  return axios({
    url: `http://localhost:8080/CartData/${dataOfCart.id}`,
    method: "PATCH",
    data: dataOfCart,
  });
};

export const CountDecrement = (dataOfCart) => {
  return axios({
    url: `http://localhost:8080/CartData/${dataOfCart.id}`,
    method: "PATCH",
    data: dataOfCart,
  });
};
