import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { PostsServices } from '../../services/posts.services'
import { UtilServices } from '../../utilities/util.services'

function PostDetailPage() {
    const { id: postId } = useParams()

    const { data: getPostByIdData,isLoading:isLoadingPostDetail } = useQuery(
        ["posts", postId],
        () => PostsServices.getPostsById(postId),
        {
            enabled: Boolean(postId),
        }
    );
     console.log(getPostByIdData?.data?.results)
    const postByIdDataMemo = useMemo(
        ()=>
        getPostByIdData?.data?.results,
        [getPostByIdData?.data?.results]
    )
    if(isLoadingPostDetail){
        return 'Loading...'
    }
    return (
        <>
                    <h1>{postByIdDataMemo?.post_title}</h1>

                    <p className="lead">
                        by <a href="#">{postByIdDataMemo?.post_author}</a>
                    </p>

                    <hr />

                    <p><span className="glyphicon glyphicon-time"></span> Posted on {UtilServices.convertDateToOurFormat(postByIdDataMemo?.post_date)}</p>

                    <hr />
                    {postByIdDataMemo?.image ? (
                        <img className="img-responsive" src={postByIdDataMemo?.image} alt="" />
                    ) :
                        (
                            <img className="img-responsive" src="http://placehold.it/900x300" alt="" />
                        )}
                    <hr />
              

            <p className="lead">{postByIdDataMemo?.post_content}</p>

            <hr />


            <div className="well">
                <h4>Leave a Comment:</h4>
                <form role="form">
                    <div className="form-group">
                        <textarea className="form-control" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

            <hr />

            <div className="media">
                <a className="pull-left" href="#">
                    <img className="media-object" src="http://placehold.it/64x64" alt="" />
                </a>
                <div className="media-body">
                    <h4 className="media-heading">Start Bootstrap
                        <small>August 25, 2014 at 9:30 PM</small>
                    </h4>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
            </div>
        </>
    )
}

export default PostDetailPage