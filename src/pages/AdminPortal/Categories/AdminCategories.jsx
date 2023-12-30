import React, { useMemo } from 'react';
import { Button, message, Modal } from 'antd';
import { useMutation, useQuery } from 'react-query';
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { CategoriesServices } from '../../../services/categories.services'
import { useNavigate } from 'react-router-dom';
import { AuthenticatedRoutesNames } from '../../../utilities/util.constant';
import PortalMainPage from "../../../components/PortalMainPage/PortalMainPage";
import {UtilServices} from '../../../utilities/util.services'

const { confirm } = Modal

function AdminCategories() {
  const navigate = useNavigate()
  const { data: catData, isLoading: categoryLoading, refetch: categoryRefresh } =
    useQuery("categories",
      () => CategoriesServices.getCategories())

  const categoriesDataMemo =
    useMemo(() => catData?.data?.results,
      [catData?.data?.results])

  const [messageApi, contextHolder] = message.useMessage();

  const { mutateAsync: DeleteRequest, isLoading: deleteCategoryLoading } =
    useMutation(CategoriesServices.deleteCategoryById)

  const DeleteBtnHandler = (singleData) => {
    const { cat_id: categoryId } = singleData
    confirm({
      title: 'Do you want to delete this category?',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        DeleteRequest(categoryId, {
          onSuccess: () => {
            messageApi.success("category is deleted sucessfully!");
            categoryRefresh();
          },
        })
      }
    })
  }

  const columns = [
    {
      title: 'ID',
      key: 'id',
      render: (singleData) => {
        return singleData.cat_id
      },
      // responsive: ["xs"]
    },
    {
      title: 'Category',
      key: 'category',
      render: (singleData) => {
        return singleData.cat_title
      },
    },
    {
      title: 'Created At',
      key: 'created-at',
      render: (singleData) => {
        return UtilServices.convertDateToOurFormat(singleData.created_at)
      }
    },
    {
      title: 'Updated At',
      key: 'updated-at',
      render: (singleData) => {
        return UtilServices.convertDateToOurFormat(singleData.updated_at)
      }
    },
    {
      title: 'Edit',
      key: 'edit',
      render: (singleData) => {
        return <Button type='primary' onClick={() => navigate(AuthenticatedRoutesNames.EditCategories.replace(':id', singleData.cat_id))} >Edit</Button>
      }
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (singleData) => {
        return <Button type='primary' danger onClick={() => DeleteBtnHandler(singleData)}>Delete</Button>
      }
    },
  ];
  return (
    <div>
      {contextHolder}
    <PortalMainPage 
    heading={"Categories"}
    addBtnText={"Add Categories"}
    addBtn={AuthenticatedRoutesNames.AddCategories}
    columns={columns}
    dataSource={categoriesDataMemo}
    loading={categoryLoading||deleteCategoryLoading}
    />
    </div>
  )
}
export default AdminCategories;