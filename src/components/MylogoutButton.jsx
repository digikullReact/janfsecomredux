import React from 'react'
import {Button } from 'antd';

const MylogoutButton = ({status,logoutHere}) => {


    if(status==true){
        return  <Button key="3" onClick={logoutHere}>Logout</Button>
    

    }
    else{
        return  <Button key="3">Login</Button>
    }
}
 

export default MylogoutButton