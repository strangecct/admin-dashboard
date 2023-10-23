import React, { useRef, useState } from 'react';
import { Form, Input, Button, Space } from 'antd';


const Login = ({ handleOk, handleCancel }) => {

  const onFinish = async (values) => {
    console.log(values)
    if (values.password === '123456') {
      handleOk(true)
    } else {
      handleOk(false)
    }
  };

  const ref = useRef(null)

  return (
    <div>
      <Form
        ref={ref}
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        //onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label={'Username'}
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder={'Input the username'} />
        </Form.Item>

        <Form.Item
          label={'Password'}
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder={'Input the SSH password'} />
        </Form.Item>
        <Button type="default" className='ml-10' onClick={handleCancel}>
          cancel
        </Button>
        <Space />
        <Button type="default" htmlType="submit" className='ml-10' >
          Submit
        </Button>
      </Form>

    </div>
  );
};
export default Login;