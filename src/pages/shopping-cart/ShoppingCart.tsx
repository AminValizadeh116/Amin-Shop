import React from 'react'
import ShopItem from '../../components/shop-item/shopItem'
import { userShopingCartContext } from '../../context/shopingCartContext'


function ShoppingCart() {

  const {contextItems} = userShopingCartContext()
  
  console.log(contextItems);

  return (
    <div className='flex flex-col gap-5'>
      {contextItems.map(item => <ShopItem {...item}/>)}
    </div>
  )
}

export default ShoppingCart
