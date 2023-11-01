import React from 'react'
import { Form, Button, Input, Typography, message } from 'antd'
import { useMutation } from 'react-query'
import { CategoriesServices } from '../../../services/categories.services'
import { useNavigate } from 'react-router-dom'
import { AuthenticatedRoutesNames } from '../../../utilities/util.constant'
const { Title } = Typography

function AddCategory() {
    const navigate = useNavigate()
    const [messageApi, contextHolder] = message.useMessage()

    const { mutateAsync: addCategoryRequest,
        isLoading: categoryLoading }
        = useMutation(CategoriesServices.addCategory)

    const onFinish = (values) => {
        addCategoryRequest(values, {
            onSuccess: () => {
                messageApi.success('category added!')
                setTimeout(() => {
                    navigate(AuthenticatedRoutesNames.Categories)

                }, 2000)
            }
        })
    }
    return (
        <div>
            {contextHolder}

            <Title level={3}>Add Category</Title>

            <Form
                name="basic"
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Category"
                    name="Category"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Category!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                    <Button type="primary" loading={categoryLoading} htmlType="submit">
                        Add Category
                    </Button>
            </Form>
        </div>
    )
}

export default AddCategory