import React from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "../Pages/Cart/CartPage.jsx";
import HomePage from "../Pages/HomePage/HomePage.jsx";
import SigninPage from "../Pages/Sign-In/SigninPage.jsx";
import SignupPage from "../Pages/Sign-Up/SignupPage.jsx";
import SkinCarePage from "../Pages/SkinCare/SkinCarePage.jsx";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/skincare" element={<SkinCarePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/signup" element={<SignupPage/>}></Route>
      <Route path="/signin" element={<SigninPage/>}></Route>
    </Routes>
  );
};

export default AllRoutes;
