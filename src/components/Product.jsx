import React from 'react'
import { Card } from 'antd';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addTocart } from '../slices/productSlice';





const { Meta } = Card;

const Product = ({product}) => {
  const dispatch =useDispatch();

  const addTocartS=(prod)=>{
    dispatch(addTocart(prod))
  }

  return (
    <div>

<Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={product.image} />}
  >
    <Meta title={product.title} description={product.description.substring(1, 40)} /> <br/>
    <Button type="primary" onClick={()=>addTocartS(product)}>Add To Cart</Button>

  </Card>
    </div>
  )
}

export default Product