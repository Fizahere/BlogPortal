import React from 'react'
import { Button, Form, Input, Typography } from "antd";

const { Title } = Typography;

function Register() {
  return (    
    <> 
    <Title level={2}>Signup</Title>
<Form name='basic' autoComplete='off'>
<Form.Item name='name' rules={[{
    require:true,
    message:'Please fill out this field!'
  }]}>
    <Input placeholder='**Username' type='text'/>
    </Form.Item>
<Form.Item name='email' rules={[{
    require:true,
    message:'Please fill out this field!'
  }]}>
    <Input placeholder='**Email Address' type='email'/>
    </Form.Item>

    <Form.Item name='password' rules={[{
    require:true,
    message:'Please fill out this field!'
  }]}>
    <Input.Password placeholder='**Password' type='password'/>
    </Form.Item>
    <Button type='primary' htmlType='submit'>Login</Button>
</Form>

    </>
  )
}

export default Register