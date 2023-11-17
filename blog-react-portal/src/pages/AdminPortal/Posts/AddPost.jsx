import { React } from 'react'
import { Form, Upload, Button, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import { useMutation } from 'react-query';
import { PostsServices } from '../../../services/posts.services'
import useMessage from 'antd/es/message/useMessage';
import { useNavigate } from 'react-router-dom';
import { AuthenticatedRoutesNames } from '../../../utilities/util.constant';

const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
function AddPost() {
    const navigate = useNavigate()
    const [messageApi, contextHolder] = useMessage()

    const { mutateAsync: addPostRequest,isLoading:addPostLoading } = useMutation(PostsServices.addPost)

    const onFinish = (values) => {
        addPostRequest(values, {
            onSuccess: () => {
                messageApi.success('post added succesfully!')
                setTimeout(()=>{
                    navigate(AuthenticatedRoutesNames.Posts)
                },1000)
            }
        })
        // console.log(values,'values')
    }
    return (
        <div>
            {contextHolder}
            <Form
                name="basic"
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Title"
                    name="post_title"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Post title!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Author"
                    name="post_author"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Post author!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Upload" name="image" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>

                <Button type="primary" loading={addPostLoading} htmlType="submit">
                    Add Post
                </Button>
            </Form>
        </div>
    )
}

export default AddPost