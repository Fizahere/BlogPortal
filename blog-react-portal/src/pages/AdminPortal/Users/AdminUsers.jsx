import React from 'react'
import { useQuery } from 'react-query'
import { UserServices } from '../../../services/users.services/UserServices'
import { AuthenticatedRoutesNames } from '../../../utilities/util.constant'

function AdminUsers() {

    const {
        data: userData,
        isLoading: usersLoading
    } = useQuery("userdata", () => UserServices.getUsers)

    const getPostData =
        useMemo(
            () => userData?.data?.result,
             [userData?.data?.result]
        )
console.log(getPostData,'l')
        // const coloums=[
        //     {
        //         title:"user_id",
        //         key:"",
        //         render:(singleUser)=>{
        //             return 
        //         }
        //     }
        // ]

    return (
        <div>
            {/* <PortalMainPage
                heading={"Users"}
                addBtnText={"Add User"}
                addBtn={AuthenticatedRoutesNames.AddUser}
                loading={usersLoading}
            // dataSource={}
            /> */}
        </div>
    )
}

export default AdminUsers