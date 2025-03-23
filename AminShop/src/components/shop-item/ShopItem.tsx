import React from "react";
import Container from "../container/Container";
import Button from "../button/button";

function ShopItem() {
  return (
    <>
      <Container>
        <div className="flex pb-3">
            <div className="w-60 mr-20">
          <img
            src="https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fcmsassets%2FPhotoConcepts-HERO.webp&w=1920&q=75"
            alt=""
          /></div>
          <div className="flex flex-col justify-around">
            <h2>title</h2>
            <div className="flex items-center gap-3">
              <Button variant="warning" className="w-13 h-8"> + </Button>
              <span>3</span>
              <Button variant="warning" className="w-13 h-8"> - </Button>
            </div>
            <div>
              <Button variant="danger" className="w-35 h-8"> remove </Button>
            </div>
          </div>
        </div>
        <hr className="text-neutral-300"/>
      </Container>
    </>
  );
}

export default ShopItem;
