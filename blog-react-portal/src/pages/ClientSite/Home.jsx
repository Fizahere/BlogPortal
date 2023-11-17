import React, { useMemo } from 'react'
import { PostsServices } from '../../services/posts.services'
import { useQuery } from 'react-query'
import SinglePostLoop from '../../components/SinglePostLoop/SinglePostLoop'

function Home() {
    const { data: postData,isLoading:isLoadingPosts } = useQuery(
        'allPostsData',
        PostsServices.getAllPosts
    )
    const getPosts = useMemo(() =>
        postData?.data?.results,
        [postData?.data?.results]
    )
if(isLoadingPosts){
    return 'Loading...'
}
    return (
        <>

            <h1 className="page-header">
                Home
                <small>Secondary Text</small>
            </h1>
            {getPosts?.map((singlePost) => {
                return <SinglePostLoop key={singlePost?.id} singlePost={singlePost}/>      
})}

            <ul className="pager">
                <li className="previous">
                    <a href="#">&larr; Older</a>
                </li>
                <li className="next">
                    <a href="#">Newer &rarr;</a>
                </li>
            </ul>
        </>
    )
}

export default Home