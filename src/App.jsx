import { useState } from 'react'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
import './App.css'
import Products from './components/Products'
import {

  Routes,
  Route,
} from "react-router-dom";
import Signup from './components/Signup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Header>Header</Header>
 
      <Content style={{marginTop:"120px"}}>
      <Routes>
      <Route path="/signup" element={<Signup />}/>    

      <Route path="/products" element={< Products/>}/>
     
      </Routes>

    
      </Content>
    
    </Layout>
   
  )
}

export default App

// useRefs
// Redux --->plain old redux
// useContext 
// pagination 
//useReducer hook
// Recoil

