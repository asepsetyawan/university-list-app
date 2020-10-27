import React from 'react'
import {useHistory} from 'react-router-dom'

import {LOGIN_URL} from '../url'
import useAuth from '../middleware/auth'
import {handleSaveToLocalStorage, isBookmarked} from '../utils'

const Card = ({name = '', country = '', web_pages = ['']}) => {

    const {push} = useHistory()

    const { isLogin } = useAuth()

    const handleSaveBookmark = name => {
        if (!isLogin) {
            push(LOGIN_URL)
        } 
        handleSaveToLocalStorage(name)
    }

    const handleIsBookmarked = () => isBookmarked(name) ? "icon-bookmark inverse active" : "icon-bookmark"

    return (
        <div className="card green">
            <h3>
                {name}
            </h3>
            <span className={handleIsBookmarked()} title="Save" onClick={() => handleSaveBookmark(name)} />
            <h5>
                {country}
            </h5>
            <h6>Website: <a href={web_pages[0]} target="_blank" rel="noreferrer">{web_pages[0]}</a></h6>
        </div>
    )
}

export default Card