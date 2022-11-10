import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import {imageUrl,ApiKey} from '../../constants/constants'
import './RowPost.css'
import YouTube from 'react-youtube'
function RowPost(props) {
    const [move, setMove] = useState()
    const [ytid,setytid]=useState('')
    useEffect(() => {
        axios.get(props.url).then((response) => {

            setMove(response.data.results)
           
           
            
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const moveTriel=(id)=>{
        axios.get(`movie/${id}/videos?api_key=${ApiKey}`).then((respons)=>{
            
            if (respons.data.results.length!=0){
                setytid(respons.data.results[0])
                console.log(respons.data.results[0]);
            }else{
                console.log("not fount");
            }
        }).catch((err)=>{
            console.log("not found");
        })
      }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
              
            {move? move.map((data)=>
               <img onClick={()=>moveTriel(data.id)} className={props.issmall ?'smallPoster':'post'} src={`${imageUrl + data.backdrop_path}`} alt="poster" />
           
            ) : ""}
                
            </div>
           {ytid && <YouTube videoId={ytid.key} opts={opts}  /> } 
        </div>
    )
}

export default RowPost
