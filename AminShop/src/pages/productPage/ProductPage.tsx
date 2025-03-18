import React from "react";
import { useParams } from "react-router";
import Container from "../../components/container/Container";
import Button from "../../components/button/button";

function ProductPage() {
  const params = useParams<{ id: string }>();
  return (
    <Container>
      <div className="grid grid-cols-12 gap-1 relative">
        

        <div className="col-span-5">
          <img
            src="https://px-web-images2.pixpa.com/xCpAipCkpmtuA2hJX7FBAAEDfsfqcHwxhJZ6znRKLvQ/rs:fit:1200:0/q:80/aHR0cHM6Ly9waXhwYWNvbS1pbWcucGl4cGEuY29tL2NvbS9hcnRpY2xlcy8xNTE1MTM1NjcyLXNodXR0ZXJzdG9ja18yODQ1ODE2NDkuanBn"
            alt=""
            className="rounded-l-2xl"
          />
        </div>
        <div className="col-span-7 shadow rounded-r-2xl p-4">
            <h2 className="text-xl font-bold mb-3 ">title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              ea, architecto quisquam quae dolorem inventore aliquam, veritatis
              natus quibusdam amet reprehenderit adipisci quod eius! Consectetur
              modi officiis id amet porro?
            </p>
            <div className="flex absolute bottom-6 w-135 justify-between items-center">
                <span className="text-neutral-500">12,000 $</span>
                
                <Button variant='primary'>buy now</Button>
            </div>
        </div>
      </div>
    </Container>
  );
}

export default ProductPage;
