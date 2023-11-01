import React from 'react'
import { UnAuthenticatedRoutesNames } from '../../utilities/util.constant'
import { useNavigate } from 'react-router-dom'
import { UtilServices } from '../../utilities/util.services'

function SinglePostLoop({ singlePost }) {
    const navigate = useNavigate()

    return (
        <>
            <h2>
                <a className='cursor-pointer' onClick={() => {
                    navigate(
                        UnAuthenticatedRoutesNames.Post_Detail.replace(
                            ":id",
                            singlePost?.id
                        )
                    );
                }}
                >{singlePost?.post_title}</a>
            </h2>
            <p className="lead">
                by {singlePost?.post_author}
            </p>
            <p><span className="glyphicon glyphicon-time"></span> Posted at &nbsp; {UtilServices.convertDateToOurFormat(singlePost?.post_date)}</p>
            <hr />
            <a className='cursor-pointer' onClick={() => {
                navigate(
                    UnAuthenticatedRoutesNames.Post_Detail.replace(
                        ":id",
                        singlePost?.id
                    )
                );
            }}>
                {singlePost?.image ? (
                    <img className="img-responsive" src={singlePost.image} alt="" />
                ) : (<img className="img-responsive" src="http://placehold.it/900x300" alt="" />
                )}
            </a>
            <hr />
            <p>{singlePost?.post_content}</p>
            <a className='btn btn-primary cursor-pointer' onClick={() => {
                    navigate(
                        UnAuthenticatedRoutesNames.Post_Detail.replace(
                            ":id",
                            singlePost?.id
                        )
                    );
                }}>View Post <span className="glyphicon glyphicon-chevron-right"></span></a>

            <hr />
        </>
    )
}

export default SinglePostLoop