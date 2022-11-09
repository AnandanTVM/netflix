import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import { ApiKey, imageUrl } from '../../constants/constants'
import './RowPost.css'
function RowPost() {
    const [oginal, setOrginal] = useState()
    useEffect(() => {
        axios.get(`discover/tv?api_key=${ApiKey}&with_networks=213`).then((response) => {

            setOrginal(response.data)
        })
    }, [])
    return (
        <div className='row'>
            <h2>Netflix Originals</h2>
            <div className="posters">

                {/* {oginal.map((data) =>
                    <img className='post' src={`${imageUrl + data.backdrop_path}`} alt="poster" />
                )} */}
            </div>
        </div>
    )
}

export default RowPost
