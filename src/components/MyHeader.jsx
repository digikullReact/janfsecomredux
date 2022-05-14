import React from 'react'
import { PageHeader,Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { logout } from '../slices/authslice';
import MylogoutButton from './MylogoutButton';




const MyHeader = () => {

  const dispatch=useDispatch();
  const loggedIn=useSelector(state=>state.authslice.loggedIn)

  const navigate=useNavigate();
  const logoutHere=()=>{
    dispatch(logout());
    navigate("/signup");

  }
  return (
    <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Hello Kart.com"
    subTitle="All your things at one place"
    extra={[
    
      <MylogoutButton status={loggedIn} logoutHere={logoutHere}/>
      
       
      
      ]}
  />
  )
}

export default MyHeader