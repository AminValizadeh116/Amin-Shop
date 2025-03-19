import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from "../../components/container/Container";
import Button from "../../components/button/button";
import { getProduct } from "../../services/api";
import { IProducts } from "../../types/services";

function ProductPage() {
  const [productDetails, setProductDetails] = useState<IProducts>()
  const params = useParams<{ id: string }>();

  useEffect(() => {
    getProduct(params.id as string).then(result => setProductDetails(result))
  }, [])

  console.log(productDetails)

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
            <p>
              {productDetails?.description}
            </p>
            <div className="flex absolute bottom-6 w-150 justify-between items-center">
                <span className="text-neutral-500">{productDetails?.price} $</span>
                
                <Button variant='primary'>buy now</Button>
            </div>
        </div>
      </div>
    </Container>
  );
}

export default ProductPage;
