import React, { useMemo, useState } from "react";
import "../../assets/css/bootstrap.min.css";
import './frontend.css'
import "../../assets/css/blog-home.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { UnAuthenticatedRoutesNames } from "../../utilities/util.constant";
import { useQuery } from "react-query";
import { CategoriesServices } from "../../services/categories.services";
import { AuthUtils } from "../../utilities/Auth.util";
import { AuthServices } from "../../services/auth.services";


function Frontend() {
    const [searchInput, searchContent] = useState()
    const navigate = useNavigate()

    const { data: categoriesData, isLoading: isLoadingPost } = useQuery(
        'getCategories',
        CategoriesServices.getCategories
    )

    const getCategories = useMemo(
        () => categoriesData?.data?.results,
        [categoriesData?.data?.results,]
    )
    const getFiveCategories = useMemo(
        () => categoriesData?.data?.results.splice(0, 3),
        [categoriesData?.data?.results,]
    )
    if (isLoadingPost) {
        return 'Loading...'
    }

    return (
        <div className="main">
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Start Bootstrap</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to={UnAuthenticatedRoutesNames.Home}>Home</Link>
                            </li>

                            {AuthServices.isUserisLoggedIn() ?
                                <li>
                                    <a href="#" onClick={(event) => {
                                        event.preventDefault()
                                        AuthUtils.removeToken()
                                        window.location.reload(true)
                                    }}>Logout</a>
                                </li> :
                                <>

                                    <li>
                                        <Link to={UnAuthenticatedRoutesNames.Login}>Login</Link>
                                    </li>
                                    <li>
                                        <Link to={UnAuthenticatedRoutesNames.Register}>Register</Link>
                                    </li>
                                </>
                            }

                            {getFiveCategories?.map((singleCategory, index) =>
                            (
                                <li key={index}>
                                    <Link to={UnAuthenticatedRoutesNames.Category_Detail.replace(':id', singleCategory.cat_id)}>{singleCategory.cat_title} </Link>
                                </li>
                            )
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container">

                <div className="row">
                    <div className="col-md-8">
                        <Outlet />
                    </div>
                    <div className="col-md-4">

                        <div className="well">
                            <h4>Post Search</h4>
                            <form method="post" onSubmit={((event) => {
                                event.preventDefault()
                                navigate(
                                    UnAuthenticatedRoutesNames.SearchDetails.replace(
                                        ':name',
                                        searchInput
                                    ))
                            })}>
                                <div className="input-group">
                                    <input type="text" onChange={((event) => searchContent(event.target.value))} className="form-control" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-default" type="submit">
                                            <span className="glyphicon glyphicon-search"></span>
                                        </button>
                                    </span>
                                </div>
                            </form>
                        </div>

                        <div className="well">
                            <h4>Post Categories</h4>
                            <div className="row">
                                <ul className="list-unstyled">
                                    {getCategories?.length > 0 && getCategories.map((singleCategory, index) => (
                                        <li key={index}><Link to={UnAuthenticatedRoutesNames.Category_Detail.replace(
                                            ":id", singleCategory.cat_id)}>{index + 1}- {singleCategory.cat_title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="well">
                            <h4>Side Widget Well</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, perspiciatis adipisci accusamus laudantium odit aliquam repellat tempore quos aspernatur vero.</p>
                        </div>

                    </div>

                </div>

                <hr />


                <footer>
                    <div className="row">
                        <div className="col-lg-12">
                            <p>Copyright &copy; Your Website 2014</p>
                        </div>
                    </div>
                </footer>

            </div>


        </div>
    )
}

export default Frontend