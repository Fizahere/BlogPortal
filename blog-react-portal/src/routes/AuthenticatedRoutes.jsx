import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AdminLayout from '../components/Admin/AdminLayout'
import { AuthenticatedRoutesNames } from '../utilities/util.constant'
import AdminHome from '../pages/AdminPortal/AdminHome'
import AdminCategories from '../pages/AdminPortal/Categories/AdminCategories'
import AddCategory from '../pages/AdminPortal/Categories/AddCategory'
import AdminPosts from '../pages/AdminPortal/Posts/AdminPosts'
import AddPost from '../pages/AdminPortal/Posts/AddPost'

function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout/>}>
        <Route path={AuthenticatedRoutesNames.Home} element={<AdminHome/>}/>
        <Route path={AuthenticatedRoutesNames.Categories} element={<AdminCategories/>}/>
        <Route path={AuthenticatedRoutesNames.AddCategories} element={<AddCategory/>}/>
        <Route path={AuthenticatedRoutesNames.Posts} element={<AdminPosts/>}/>
        <Route path={AuthenticatedRoutesNames.AddPosts} element={<AddPost/>}/>
      </Route>
    </Routes>
  )
}

export default AuthenticatedRoutes