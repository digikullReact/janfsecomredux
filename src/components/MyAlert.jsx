import { Alert } from 'antd';

export default ({type,text}) => {

    if( type=="error"){
        return    <Alert message={text} type="error" />
    }

    else if( type=="success"){
        return       <Alert message={text} type="success" />
    }
  
  


 
  
};