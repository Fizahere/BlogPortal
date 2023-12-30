import { React, useMemo } from 'react';
import { useMutation, useQuery } from 'react-query'
import { Button, Modal, message } from 'antd';
import { CommentServices } from '../../../services/comments.services'
import PortalMainPage from '../../../components/PortalMainPage/PortalMainPage'
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { UtilServices } from '../../../utilities/util.services';
const { confirm } = Modal

function AdminComments() {
    const [messageApi, contextHolder] = message.useMessage()

    const {
        data: getCommentsData,
        isLoading: commentsLoader,
         refetch: refetchComments
    } = useQuery('comments', () => CommentServices.getComments())

    const mappedCommentData = useMemo(
        () => getCommentsData?.data?.results,
        [getCommentsData]
    );

    console.log(mappedCommentData, "getCommentsMappedData")
     console.log(getCommentsData,'getComments')
     const { mutateAsync: deleteCommentRequest,
        isLoading: deleteCommentLoader
    } = useMutation(CommentServices.deleteComment)

     const deleteCommentHandler = (comment_id) => {
         confirm({
             title: "Are you sure?",
             icon: <ExclamationCircleOutlined />,
             onOk(){
                 deleteCommentRequest(comment_id, {
                     onSuccess: () => {
                         messageApi.success("comment deleted successfully!")
                             refetchComments()
                     }
                 })
             }
         })

     }

    const columns = [
        {
            title: "Comment ID",
            key: "commentId",
            render: (singleData) => {
                return singleData.comment_id
            }
        },
        {
            title: "Comment",
            key: "commentId",
            render: (singleData) => {
                return singleData.comment_content
            }
        },
        {
            title: "Created At",
            key: "commentId",
            render: (singleData) => {
                return UtilServices.convertDateToOurFormat(singleData.created_at)
            }
        },
        {
            title: "Updated At",
            key: "commentId",
            render: (singleData) => {
                return UtilServices.convertDateToOurFormat(singleData.updated_at)

            }
        },
        {
            title: "Delete",
            key: "delete",
            render: (singleData) => {
                 return <Button type="primary" danger onClick={() => deleteCommentHandler(singleData.comment_id)}>Delete</Button>
            }
        }
    ]
    return (
        <>
            {contextHolder}
            <PortalMainPage
                heading={"Comments"}
                  addBtnText={""}
                //   addBtn={AuthenticatedRoutesNames.AddC}
                columns={columns}
                dataSource={mappedCommentData}
                loading={commentsLoader||deleteCommentLoader}
            />
        </>
    )
}

export default AdminComments