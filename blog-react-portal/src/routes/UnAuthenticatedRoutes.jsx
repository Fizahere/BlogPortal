import React from "react";
import { Routes, Route } from "react-router-dom";
import Frontend from "../components/Frontend/Frontend";
import Home from "../pages/Home";
import PostDetailPage from "../pages/PostDetailPage"
import CategoryDetailPage from "../pages/CategoryDetailPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchDetails from "../pages/SearchDetails";
import { UnAuthenticatedRoutesNames } from "../utilities/util.constant";

function UnAuthenticatedRoutes() {
  return (
    <>
<Routes>
    <Route element={<Frontend/>}>
        <Route path={UnAuthenticatedRoutesNames.Home} element={<Home/>} />
        <Route path={UnAuthenticatedRoutesNames.Post_Detail} element={<PostDetailPage/>} />
        <Route path={UnAuthenticatedRoutesNames.Category_Detail} element={<CategoryDetailPage/>} />
        <Route path={UnAuthenticatedRoutesNames.Login} element={<Login/>} />
        <Route path={UnAuthenticatedRoutesNames.Register} element={<Register/>} />
        <Route path={UnAuthenticatedRoutesNames.SearchDetails} element={<SearchDetails/>} />
    </Route>
</Routes>
    </>
  )
}

export default UnAuthenticatedRoutes