import React from "react";
import { Routes, Route } from "react-router-dom";
import Frontend from "../components/Frontend/Frontend";
import Home from "../pages/ClientSite/Home";
import PostDetailPage from "../pages/ClientSite/PostDetailPage"
import CategoryDetailPage from "../pages/ClientSite/CategoryDetailPage";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import SearchDetails from '../pages/ClientSite/SearchDetails'
import { UnAuthenticatedRoutesNames } from '../utilities/util.constant'
import NotFound from '../pages/NotFound/NotFound'

function UnAuthenticatedRoutes() {
  return (
<Routes>
    <Route element={<Frontend/>}>
        <Route path={UnAuthenticatedRoutesNames.Home} element={<Home/>} />
        <Route path={UnAuthenticatedRoutesNames.Post_Detail} element={<PostDetailPage/>} />
        <Route path={UnAuthenticatedRoutesNames.Category_Detail} element={<CategoryDetailPage/>} />
        <Route path={UnAuthenticatedRoutesNames.Login} element={<Login/>} />
        <Route path={UnAuthenticatedRoutesNames.Register} element={<Register/>} />
        <Route path={UnAuthenticatedRoutesNames.SearchDetails} element={<SearchDetails/>} />
    </Route>
    <Route path="*" element={<NotFound />} />
</Routes>
  )
}

export default UnAuthenticatedRoutes