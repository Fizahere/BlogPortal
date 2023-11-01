import React from "react";
import { Button, Form, Input, Typography, notification } from "antd";
import { UserServices } from '../services/users.services'
import { useMutation } from "react-query";
import { AuthUtils } from "../utilities/Auth.util";
import { UnAuthenticatedRoutesNames } from "../utilities/util.constant";

const { Title } = Typography;

function Login() {
  const { mutateAsync: loginRequest, isLoading: loginRequestLoader } =
    useMutation(UserServices.login);

  // { email: "", password: "" };
  const onFinish = async (values) => {
    await loginRequest(values, {
      onSuccess: (data) => {
        const token = data?.data?.results?.token;
        if(token){
          AuthUtils.saveToken(token);
          notification.success({
            message:'user logged in successfully!',
            placement:'topRight'
          })
          setTimeout(() => {
            window.location.href=`${UnAuthenticatedRoutesNames.Home}`;
          }, 1500);
        }
        else{
          notification.error({
            message:'user not found!',
            placement:'topRight'
          })
        }
       
      },
    });
  };

  return (
    <div>
      <Title level={2}>Login</Title>

      <Form name="basic" onFinish={onFinish} autoComplete="off">
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
          initialValue={'oscar41@example.net'}
        >
          <Input placeholder="Type Your Email" type="email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password",
            },
          ]}
          initialValue={'admin123@'}
        >
          <Input.Password placeholder="Type Your Password" />
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={loginRequestLoader}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login