import React, { useEffect, useState } from 'react'
import { Form, Button, Input, Typography, message } from 'antd'
import { useMutation, useQueries, useQuery } from 'react-query'
import { CategoriesServices } from '../../../services/categories.services'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthenticatedRoutesNames } from '../../../utilities/util.constant'
const { Title } = Typography

function AddCategory() {

    const [form] = Form.useForm()
    const { id: categoryId } = useParams()
    const [isCategoryEdit, setIsCategoryEdit] = useState(false)

    const { data: editCategoryData, isLoading: editCategoryLoading } = useQuery(
        ['categoryId', categoryId],
        () => CategoriesServices.getCategoriesById(categoryId)
    )
    useEffect(() => {
        if (categoryId) {
            setIsCategoryEdit(true)
        }
    }, [categoryId])

    useEffect(() => {
        if (editCategoryData) {
            const categoryData = editCategoryData?.data?.results
            form.setFieldsValue({
                cat_title: categoryData?.cat_title
            })
        }
    }, [editCategoryData])

    const { mutateAsync: editCategoryRequest,
         isLoading: editingLoading } =
          useMutation('categoryData',(payload)=>CategoriesServices.editCategory(payload,categoryId))

    const navigate = useNavigate()
    const [messageApi, contextHolder] = message.useMessage()

    const { mutateAsync: addCategoryRequest,
        isLoading: categoryLoading }
        = useMutation(CategoriesServices.addCategory)

    const onFinish = (values) => {
        (isCategoryEdit) ?
            editCategoryRequest(values, {
                onSuccess: () => {
                    messageApi.success('category updated!')
                    setTimeout(() => {
                        navigate(AuthenticatedRoutesNames.Categories)
                    }, 1000)
                }
            })
            :
            addCategoryRequest(values, {
                onSuccess: () => {
                    messageApi.success('category added!')
                    setTimeout(() => {
                        navigate(AuthenticatedRoutesNames.Categories)

                    }, 1000)
                }
            })
    }

    return (
        <div>
            {contextHolder}

            <Title level={3}>{(isCategoryEdit) ? 'Update' : 'Add'} Category</Title>

            <Form
                name="basic"
                onFinish={onFinish}
                autoComplete="off"
                form={form}
            >
                <Form.Item
                    label="Category"
                    name="cat_title"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Category!',
                        },
                    ]}
                >
                    <Input placeholder='Enter Category**' />
                </Form.Item>

                <Button type="primary" loading={categoryLoading || editCategoryLoading || editingLoading} htmlType="submit">
                    {(isCategoryEdit) ? 'Update' : 'Add'}  Category
                </Button>
            </Form>
        </div>
    )
}

export default AddCategory