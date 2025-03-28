import React from "react";
import Container from "../container/Container";
import { Link } from "react-router";
import styled from './header.module.css';
import shoppingItem from '../../assets/icon-shopping.png'

function Header() {
  return (
    <div className={styled.header}>
      <div className="bg-neutral-700 opacity-80 py-5 mb-10 rounded-b-lg">
        <Container>
          <div className="flex items-center justify-between ">
            <ul className="text-white flex gap-8 text-xl font-bold">
              <li><Link to="/"> home</Link></li>
              <li><Link to="/shop"> shop</Link></li>
              <li><Link to="/store"> store</Link></li>
            </ul>
            <Link to='/shopping-cart'><img src={shoppingItem} alt="" /></Link>
            
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Header;
