import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { SearchServices } from '../services/search.services'
import SinglePostLoop from '../components/SinglePostLoop/SinglePostLoop'

function SearchDetails() {
    const { name } = useParams()

    const { data: getSearchData, isLoading: isLoadingSearch } = useQuery(
        ['name', name],
        () => SearchServices.searchPost({ query_custom: name }),
        {
            enabled: Boolean(name)
        }
    )

    const getSearchDataMemo = useMemo(
        () => getSearchData?.data?.results,
        [getSearchData?.data?.results]
    )

    if (isLoadingSearch) {
        return 'Searching...'
    }

return (

    <div>
        <h2>Searching for this post: "{name}" ?</h2>
        {getSearchDataMemo?.length > 0 ? getSearchDataMemo?.map((singlePost) => {
            return <SinglePostLoop singlePost={singlePost} />
        }) :
            !isLoadingSearch && <h2>No Post Found!<br/>☹️ ☹️</h2>
        }
    </div>
    

)}

export default SearchDetails