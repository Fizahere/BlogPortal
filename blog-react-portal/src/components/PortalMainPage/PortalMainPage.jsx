import React from 'react'
import { Row,Col,Button,Table } from 'antd'
import { useNavigate } from 'react-router-dom'

function PortalMainPage(props) {
  const {columns,heading,addBtn,data,contentLoading,deleteLoading}=props
  const navigate = useNavigate()
  return (
    <div> 
      <Row type='flex'
        justify='space-between'
        align='middle'
        style={{ marginBottom: '2rem' }}>
        <Col style={{ marginBottom: '0px', marginTop: '0px' }}><h3>{heading}</h3></Col>
        <Col><Button type='primary' onClick={() => navigate(addBtn)}>+ Add Category</Button></Col>
      </Row>
      <Table loading={contentLoading || deleteLoading} columns={columns}
        dataSource={data} />
    </div>
  )
}

export default PortalMainPage