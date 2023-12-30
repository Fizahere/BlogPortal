import React from 'react'
import { Button, Form, Input, Typography, notification } from "antd";
import { useMutation } from 'react-query';
import { UserServices } from '../../services/users.services'
const { Title } = Typography;

function Register() {

  //   const { mutateAsync: registerRequest } = useMutation(UserServices.addUser)

  //   const onFinish = async (values) => {
  //     await registerRequest(values, {
  //       onSuccess: () => {
  // notification.success('signup!')
  //       }
  //     })
  //   }
  return (
    <>
      <Title level={2}>Signup</Title>
      <Form
        name='basic'
        autoComplete='off'
      //  onFinish={onFinish}
      >
        <Form.Item name='name' rules={[{
          require: true,
          message: 'Please fill out this field!'
        }]}>
          <Input placeholder='**Username' type='text' />
        </Form.Item>
        <Form.Item name='email' rules={[{
          require: true,
          message: 'Please fill out this field!'
        }]}>
          <Input placeholder='**Email Address' type='email' />
        </Form.Item>

        <Form.Item name='password' rules={[{
          require: true,
          message: 'Please fill out this field!'
        }]}>
          <Input.Password placeholder='**Password' type='password' />
        </Form.Item>
        <Button type='primary' htmlType='submit'>Sign Up</Button>
      </Form>

    </>
  )
}

export default Register