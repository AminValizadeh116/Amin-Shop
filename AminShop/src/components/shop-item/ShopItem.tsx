import React, { useEffect, useState } from "react";
import Container from "../container/Container";
import Button from "../button/button";
import { getProduct } from "../../services/api";
import { IProducts } from "../../types/services";
import { userShopingCartContext } from "../../context/shopingCartContext";

interface IShopItem{
  id: number
  Qty: number
}

function ShopItem({id, Qty}:IShopItem) {
  const {handleDecreaseProductQty, handleIncreaseProductQty, handleRemoveProduct} = userShopingCartContext()
  const [product, setProduct] = useState<IProducts>()
  useEffect(() => {
    getProduct(id as number).then(result => setProduct(result))
  }, [])

  return (
    <>
      <Container>
          <div className="flex pb-3">
            <div className="h-40 mr-20">
          <img
            className="w-25"
            src={product?.image}
            alt=""
          /></div>
          <div className="flex flex-col justify-around">
            <h2>{product?.title}</h2>
            <div className="flex items-center gap-3">
              <Button onClick={() => handleIncreaseProductQty(id)} variant="warning" className="w-13 h-8"> + </Button>
              <span>{Qty}</span>
              <Button onClick={() => handleDecreaseProductQty(id)} variant="warning" className="w-13 h-8"> - </Button>
            </div>
            <div>
              <Button onClick={() => handleRemoveProduct(id)} variant="danger" className="w-35 h-8"> remove </Button>
            </div>
          </div>
        </div>
        <hr className="text-neutral-300"/> 
      </Container>
    </>
  );
}

export default ShopItem;
