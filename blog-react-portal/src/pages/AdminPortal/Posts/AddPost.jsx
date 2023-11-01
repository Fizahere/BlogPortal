import { React } from 'react'
import { Form, Upload, Button, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons';

const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
function AddPost() {
    return (
        <div>
            <Form
                name="basic"
                // onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Title"
                    name="title"
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
                    name="author"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Post author!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
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
               
                    <Button type="primary" htmlType="submit">
                        Add Post
                    </Button>
            </Form>
        </div>
    )
}

export default AddPost