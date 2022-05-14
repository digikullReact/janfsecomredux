import { Form, Input, Button, Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../thunks/auththunk';
import MyAlert from './MyAlert';
import { useNavigate } from "react-router-dom";




const Signup = () => {

  const dispatch =useDispatch();
  let navigate = useNavigate();

  const {type,text}=useSelector(state=>state.authslice.status)
  const onFinish = (values) => {
    dispatch(signup(values)).then(data=>{
     // debugger;
      navigate('/products');

    }).catch(err=>{
      console.log(err);
    })
    //




    // an api call --->
    //console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (

    <>

    <MyAlert type={type} text={text} />
    
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >


<Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your Name',
          },
        ]}
      >
        <Input/>
      </Form.Item>


      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

  
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
  
  );
};

export default Signup;