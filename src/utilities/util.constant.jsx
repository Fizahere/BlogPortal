export const UnAuthenticatedRoutesNames={
    Home:'/',
    Post_Detail:'/post/:id',
    Category_Detail:'/category/:id',
    Login:'/login',
    Register:'/register',
    SearchDetails:'/searchDetails/:name',
}
export const AuthenticatedRoutesNames={
Home:'admin/',
Categories:'/admin/categories',
AddCategories:'/admin/category/add',
EditCategories:'/admin/category/edit/:id',
Posts:'/admin/posts',
AddPosts:'/admin/post/add',
EditPosts:'/admin/post/edit/:id',
User:'/admin/users',
Comments:'/admin/comments',
}

export const AuthUtilsConstant={
    USER_TOKEN:"token",
}