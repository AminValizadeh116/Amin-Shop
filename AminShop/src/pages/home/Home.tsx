import React, { useContext } from "react";
import Container from "../../components/container/Container";
import Loading from "../../components/loading/Loading";
import {userShopingCartContext } from "../../context/shopingCartContext";
import ShoppingCart from "../shopping-cart/ShoppingCart";

function Home() {
  
  return (
    <div>
      <Loading />
      <Container>
        <h1>home</h1>
      </Container>
    </div>
  );
}

export default Home;
