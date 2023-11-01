import { React, useMemo } from 'react';
import { Row, Col, Button, Modal, Table, message, Image } from 'antd';
import { useMutation, useQuery } from 'react-query';
import { PostsServices } from '../../../services/posts.services'
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import { AuthenticatedRoutesNames } from '../../../utilities/util.constant';

const { confirm } = Modal

function AdminPosts() {

    const navigate = useNavigate()

    const [messageApi, contextHolder] = message.useMessage()

    const { data: postData, isLoading: postLoading, refetch: postRefresh } =
        useQuery("PostData",
            () => PostsServices.getAllPosts())

    const getPostData = useMemo(
        () => postData?.data?.results,
        [postData?.data?.results])

    const { mutateAsync: deletePostRequest, isLoading: deletePostLoading }
        = useMutation(PostsServices.deletePostById)

    const deletePostHandler = (singleData) => {
        const { id: postId } = singleData
        confirm({
            title: 'Do you want to delete this post?',
            icon: <ExclamationCircleOutlined />,
            onOk() {
                deletePostRequest(postId, {
                    onSuccess: () => {
                        messageApi.success("Post is deleted sucessfully!");
                        postRefresh();
                    }
                })
            }
        })
    }

    const columns = [
        {
            title: 'ID',
            key: 'id',
            render: (singleData) => {
                return singleData.id
            },
        },
        {
            title: 'Post Title',
            key: 'post-title',
            render: (singleData) => {
                return singleData.post_title
            },
        },
        {
            title: 'Post Author',
            key: 'post-author',
            render: (singleData) => {
                return singleData.post_author
            },
        },
        {
            title: 'Image',
            key: 'image',
            render: (singleData) => {
                return <Image width={200} src={singleData.image} />
            },
        },
        {
            title: 'Edit',
            key: 'edit',
            render: () => {
                return <Button type='primary'>Edit</Button>
            },
        },
        {
            title: 'Delete',
            key: 'delete',
            render: (singleData) => {
                return <Button type='primary' danger onClick={() => deletePostHandler(singleData)}>Delete</Button>
            },
        },
    ];
    return (
        <div>
            {contextHolder}
            <Row
                type='flex'
                justify='space-between'
                align='middle'
                style={{ marginBottom: '2rem' }}
            >
                <Col><h3>Posts</h3></Col>
                <Col><Button type='primary' onClick={() => navigate(AuthenticatedRoutesNames.AddPosts)}>+ Add Post</Button></Col>
            </Row>
            <Table loading={postLoading || deletePostLoading} columns={columns} dataSource={getPostData} />
        </div>
    )
}
export default AdminPosts;