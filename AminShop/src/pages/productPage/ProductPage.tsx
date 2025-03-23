import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from "../../components/container/Container";
import Button from "../../components/button/button";
import { getProduct } from "../../services/api";
import { IProducts } from "../../types/services";
import { userShopingCartContext } from "../../context/shopingCartContext";

function ProductPage() {
  const [productDetails, setProductDetails] = useState<IProducts>();
  const params = useParams<{ id: string }>();
  const { handleIncreaseProductQty, handleDecreaseProductQty, contextItems , getProductQty } =
    userShopingCartContext();

  console.log(contextItems);

  useEffect(() => {
    getProduct(params.id as string).then((result) => setProductDetails(result));
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-12 gap-1 relative">
        <div className="col-span-4">
          <img
            src={productDetails?.image}
            alt=""
            className="rounded-l-2xl h-100"
          />
        </div>
        <div className="col-span-8 shadow rounded-r-2xl p-8">
          <h2 className="text-xl font-bold mb-3 ">{productDetails?.title}</h2>
          <p>{productDetails?.description}</p>
          <div className="flex absolute bottom-6 w-150 justify-between items-center">
            <span className="text-neutral-500">{productDetails?.price} $</span>

            {contextItems.find(
              (item) => item.id == parseInt(params.id as string)
            ) ? ( 
              <div className="flex items-center gap-1">
                <Button
                  onClick={() =>
                    handleDecreaseProductQty(parseInt(params.id as string))
                  }
                  variant="danger"
                  size="2"
                >
                  -
                </Button>

                <span>{getProductQty(parseInt(params.id as string))}</span>


                <Button
                  onClick={() =>
                    handleIncreaseProductQty(parseInt(params.id as string))
                  }
                  variant="primary"
                  size="2"
                >
                  +
                </Button>
              </div>
            ) : (
              <Button
                onClick={() =>
                  handleIncreaseProductQty(parseInt(params.id as string))
                }
                variant="primary"
                size="2"
              >
                buy now
              </Button>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProductPage;
