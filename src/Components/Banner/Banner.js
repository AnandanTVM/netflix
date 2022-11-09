
import React, { useEffect, useState } from 'react'
import { ApiKey, imageUrl } from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {
    const [move, setMove] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${ApiKey}&language=en-US`).then((response) => {

            setMove(response.data.results[0])
        })
    }, [])
    return (

        < div style={{ backgroundImage: `url(${move ? imageUrl + move.backdrop_path : " "}) ` }} className='banner' >
            <div className="content">
                <div className="movename">
                    <h1>{move ? move.title : ""}</h1>
                </div>


                <h1 className="title">#1 in Movies Today</h1>


                <div className="banner_button">
                    <button className="playbtn">▶ Play</button>

                    <button className="button ">ⓘ More Info</button>
                </div>
                <h1 className="discription">{move ? move.overview : ""}</h1>
            </div>
            <div className="fadeEffit"></div>
        </div >

    )
}

export default Banner
