import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import {imageUrl } from '../../constants/constants'
import './RowPost.css'
function RowPost(props) {
    const [move, setMove] = useState()
    useEffect(() => {
        axios.get(props.url).then((response) => {

            setMove(response.data.results)
           
           
            
        })
    }, [])
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
              
            {move? move.map((data)=>
               <img className={props.issmall ?'smallPoster':'post'} src={`${imageUrl + data.backdrop_path}`} alt="poster" />
           
            ) : ""}
                
            </div>
        </div>
    )
}

export default RowPost
