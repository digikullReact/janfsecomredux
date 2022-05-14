import React,{useEffect,useState} from 'react'
import { Row, Col } from 'antd';
import Product from './Product';
import { useDispatch,useSelector } from 'react-redux';
import { fetchProducts } from '../thunks/productthunk';
import { Spin, Space } from 'antd';
import { Alert } from 'antd';
import { Input } from 'antd';
import Cart from "./Cart";



const Products = () => {

  const dispatch=useDispatch();
  const productWhole=useSelector(state=>state.productSlice);
  const [state,setState]=useState("");
  console.log(productWhole)
  let products=[];

  if(state.length>0){
    products=productWhole.products.filter(ele=>ele.title.includes(state));

  }
  else{
    products=productWhole.products
  }
  const show=productWhole.showSpinner
  const error=productWhole.error;




  const search=(event)=>{
    setState(event.target.value)

  }


  useEffect(()=>{
    dispatch(fetchProducts());

  },[])


  return (
    <>
         <Cart/>

         <div style={{marginTop:"40px",padding:"50px"}}>
      {
         error?   <Alert message="Network Error" type="error" />:""

      }
      {
        show? <Spin size="large"   style={{marginLeft:"600px"}}/>:""
      }
     

     <Input placeholder="Basic usage"  onChange={search}/>


<Row>

{
  products.map(ele=>(

    <Col key={ele.id} span={8}><Product product={ele}/></Col>
  ))
}
  
      
    </Row>

    </div>
    
    </>

  )
}

export default Products