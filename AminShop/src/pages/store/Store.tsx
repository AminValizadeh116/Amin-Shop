import React, { useEffect, useState } from "react";
import Container from "../../components/container/Container";
import { Link } from "react-router";
import { getProducts } from "../../services/api";
import { IProducts } from "../../types/services";

function Store() {
  const [productsList, setProductList] = useState<IProducts[]>([]);

  useEffect(() => {
    getProducts().then((result) => setProductList(result));
  }, []);

  console.log(productsList);

  return (
    <Container>
      <div className="grid grid-cols-12 gap-5 ">
        {productsList.map((item) => (
          <Link to={`/store/${item.id}`} className="col-span-3 rounded shadow cursor-pointer">
            <img className="h-80" src={item.image} alt="" />
            <div className="flex justify-between pb-2 px-7 font-bold">
              <span className="w-40 line-clamp-1">{item.title}</span>
              <span>{item.price} $</span>
            </div>
            <div className="pb-4 px-5">
              <p className="line-clamp-2">{item.description}</p>
            </div>
          </Link>

        ))}
      </div>
    </Container>
  );
}

export default Store;
