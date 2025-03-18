import React from "react";
import Container from "../../components/container/Container";
import { Link } from 'react-router'

function Store() {
  return (
    <Container>
      <div className="grid grid-cols-12 gap-5 ">
        <Link to='/store/1' className="col-span-3 rounded shadow cursor-pointer">
          <img
            src="https://px-web-images2.pixpa.com/xCpAipCkpmtuA2hJX7FBAAEDfsfqcHwxhJZ6znRKLvQ/rs:fit:1200:0/q:80/aHR0cHM6Ly9waXhwYWNvbS1pbWcucGl4cGEuY29tL2NvbS9hcnRpY2xlcy8xNTE1MTM1NjcyLXNodXR0ZXJzdG9ja18yODQ1ODE2NDkuanBn"
            alt=""
          />
          <div className="flex justify-between pb-2 px-7 font-bold">
            <span>title</span>
            <span>price</span>
          </div>
          <div className="pb-4 px-5">
            <p className="line-clamp-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              ea, architecto quisquam quae dolorem inventore aliquam, veritatis
              natus quibusdam amet reprehenderit adipisci quod eius! Consectetur
              modi officiis id amet porro?
            </p>
          </div>
        </Link>

        <Link to='/store/2' className="col-span-3 rounded shadow cursor-pointer">
          <img
            src="https://px-web-images2.pixpa.com/xCpAipCkpmtuA2hJX7FBAAEDfsfqcHwxhJZ6znRKLvQ/rs:fit:1200:0/q:80/aHR0cHM6Ly9waXhwYWNvbS1pbWcucGl4cGEuY29tL2NvbS9hcnRpY2xlcy8xNTE1MTM1NjcyLXNodXR0ZXJzdG9ja18yODQ1ODE2NDkuanBn"
            alt=""
          />
          <div className="flex justify-between pb-2 px-7 font-bold">
            <span>title</span>
            <span>price</span>
          </div>
          <div className="pb-4 px-5">
            <p className="line-clamp-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              ea, architecto quisquam quae dolorem inventore aliquam, veritatis
              natus quibusdam amet reprehenderit adipisci quod eius! Consectetur
              modi officiis id amet porro?
            </p>
          </div>
        </Link>
        <Link to='/store/3' className="col-span-3 rounded shadow cursor-pointer">
          <img
            src="https://px-web-images2.pixpa.com/xCpAipCkpmtuA2hJX7FBAAEDfsfqcHwxhJZ6znRKLvQ/rs:fit:1200:0/q:80/aHR0cHM6Ly9waXhwYWNvbS1pbWcucGl4cGEuY29tL2NvbS9hcnRpY2xlcy8xNTE1MTM1NjcyLXNodXR0ZXJzdG9ja18yODQ1ODE2NDkuanBn"
            alt=""
          />
          <div className="flex justify-between pb-2 px-7 font-bold">
            <span>title</span>
            <span>price</span>
          </div>
          <div className="pb-4 px-5">
            <p className="line-clamp-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              ea, architecto quisquam quae dolorem inventore aliquam, veritatis
              natus quibusdam amet reprehenderit adipisci quod eius! Consectetur
              modi officiis id amet porro?
            </p>
          </div>
        </Link>
        <Link to='/store/4' className="col-span-3 rounded shadow cursor-pointer">
          <img
            src="https://px-web-images2.pixpa.com/xCpAipCkpmtuA2hJX7FBAAEDfsfqcHwxhJZ6znRKLvQ/rs:fit:1200:0/q:80/aHR0cHM6Ly9waXhwYWNvbS1pbWcucGl4cGEuY29tL2NvbS9hcnRpY2xlcy8xNTE1MTM1NjcyLXNodXR0ZXJzdG9ja18yODQ1ODE2NDkuanBn"
            alt=""
          />
          <div className="flex justify-between pb-2 px-7 font-bold">
            <span>title</span>
            <span>price</span>
          </div>
          <div className="pb-4 px-5">
            <p className="line-clamp-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              ea, architecto quisquam quae dolorem inventore aliquam, veritatis
              natus quibusdam amet reprehenderit adipisci quod eius! Consectetur
              modi officiis id amet porro?
            </p>
          </div>
        </Link>
      </div>
    </Container>
  );
}

export default Store;
