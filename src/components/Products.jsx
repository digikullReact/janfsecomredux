import React,{useEffect} from 'react'
import { Row, Col } from 'antd';
import Product from './Product';
import { useDispatch,useSelector } from 'react-redux';
import { fetchProducts } from '../thunks/productthunk';
import { Spin, Space } from 'antd';
import { Alert } from 'antd';



const Products = () => {

  const dispatch=useDispatch();
  const productWhole=useSelector(state=>state.productSlice);
  console.log(productWhole)
  const products=productWhole.products;
  const show=productWhole.showSpinner
  const error=productWhole.error;



  useEffect(()=>{
    dispatch(fetchProducts());

  },[])


  return (
    <div style={{marginTop:"40px",padding:"50px"}}>
      {
         error?   <Alert message="Network Error" type="error" />:""

      }
      {
        show? <Spin size="large"   style={{marginLeft:"600px"}}/>:""
      }
     

<Row>

{
  products.map(ele=>(

    <Col key={ele.id} span={8}><Product product={ele}/></Col>
  ))
}
  
      
    </Row>

    </div>
  )
}

export default Products