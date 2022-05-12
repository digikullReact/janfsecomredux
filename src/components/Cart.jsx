import React from 'react'
import {
  ShoppingCartOutlined
  } from '@ant-design/icons';

  import {useSelector } from 'react-redux';
const Cart = () => {

    const cart=useSelector(state=>state.productSlice.cart);
  return (
    <div style={{marginLeft:"580px"}}> 
    <div style={{display:"flex"}}>
    <ShoppingCartOutlined  style={{ fontSize: '86px', color: '#08c' }}/> <h1>{cart.length}</h1>

    </div>



    </div>
  )
}

export default Cart