import React, {useState, useEffect} from 'react'

import Card from '../../components/card'
import Search from '../../components/search'
import {fetchUniversity} from './fetcher'

const LIMIT = 10;

const UniversityListView = () => {
    const [showMore, setShowMore] = useState(false);
    const [data, setData] = useState([])
    const [index, setIndex] = useState(LIMIT);
    const [list, setList] = useState([])
    const [totalItem, setTotalItem] = useState(0)
    const [loading, setLoading] = useState(false)

    const handleFetch = (key = '') => {
        setLoading(true)
        fetchUniversity(key).then((res)=> {
            if (res) {
                const resLength = res.length
                setData(res)
                if (resLength > 10) {
                    const resData = res.slice(0, LIMIT)
                    setList(resData)
                    setShowMore(true)
                    setTotalItem(resLength)
                } else {
                    setList(res)
                }
                setLoading(false)
            }
        }).catch((err) => {
            console.error(err)
        })
    }

    useEffect(() => {
        handleFetch('universitas')
    },[])

    const loadMore = () => {
        const newIndex = index + LIMIT;
        const newShowMore = newIndex < (totalItem - 1);
        const newList = [...list, ...data.slice(index, newIndex)];
        setIndex(newIndex);
        setList(newList);
        setShowMore(newShowMore);
    }

    const handleSearch = (key) => {
        handleFetch(key)
        setShowMore(false);
    }

    return (
        <div className="u-center">
            <h1>University Lists</h1>
            <Search handleSearch={handleSearch} />

            {!loading && (
                <div className="row">
                    {list && list.map((data, key) => (
                        <Card {...{...data}} key={key} />
                    ))}
                </div>
            )}
            
            {!loading && list.length === 0 && <h2>Data not found</h2>}
            {loading && <div className="spinner primary" />}
            {showMore && <button onClick={loadMore} className="tertiary"> Load More </button>}
        </div>
    )
}

export default UniversityListView