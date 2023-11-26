export const UnAuthenticatedRoutesNames={
    Home:'/',
    Post_Detail:'/post/:id',
    Category_Detail:'/category/:id',
    Login:'/login',
    Register:'/register',
    SearchDetails:'/searchDetails/:name',
}
export const AuthenticatedRoutesNames={
Home:'/',
Categories:'/categories',
AddCategories:'/category/add',
EditCategories:'/category/edit/:id',
Posts:'/posts',
AddPosts:'/post/add',
EditPosts:'/post/edit/:id',
}

export const AuthUtilsConstant={
    USER_TOKEN:"token",
}