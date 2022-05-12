import { useState } from 'react'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
import './App.css'
import Products from './components/Products'
import Cart from './components/Cart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Header>Header</Header>
      <Cart/>
      <Content>

      <Products/>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
   
  )
}

export default App
