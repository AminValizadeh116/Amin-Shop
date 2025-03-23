import React from 'react'
import ShopItem from '../../components/shop-item/shopItem'


function ShoppingCart() {
  return (
    <div className='flex flex-col gap-5'>
      <ShopItem />
      <ShopItem />
      <ShopItem />
      <ShopItem />
    </div>
  )
}

export default ShoppingCart
