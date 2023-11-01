import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { CategoriesServices } from '../services/categories.services'
import SinglePostLoop from '../components/SinglePostLoop/SinglePostLoop'
import { UtilServices } from '../utilities/util.services'

function CategoryDetailPage() {
    const { id: categoryId } = useParams()

    const { data: getPostDataByCategory, isLoading: isPostLoading } = useQuery(
        ['categoryId', categoryId],
        () => CategoriesServices.getCategoriesById(categoryId),
        {
            enabled: Boolean(categoryId),
        }
    )
    // console.log(getPostDataByCategory,'category data')
    const getCategoriesMemo = useMemo(() =>
        getPostDataByCategory?.data?.results,
        [getPostDataByCategory?.data?.results]
    )
if(isPostLoading){
    return 'Loading...'
}   

return (
        <>
            <h1 className="page-header">
                {getCategoriesMemo?.cat_title}
            </h1>
            {getCategoriesMemo?.posts ? (getCategoriesMemo?.posts?.map((singlePost) => {
                return <SinglePostLoop singlePost={singlePost} />
            })) :
                !isPostLoading && <h2>No Posts Yet.</h2>}


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

export default CategoryDetailPage