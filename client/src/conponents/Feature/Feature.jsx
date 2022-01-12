import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import axios from 'axios';
import { useState, useEffect } from 'react'
import './Feature.scss'
export const Feature = ({type}) => {
    const [content,setContent] = useState({});
    useEffect(()=>{
        const getRandomContent = async () =>{
            try{
                const res = await axios.get(`http://localhost:8800/api/movies/random?type=${type}`,
                {
                    headers:{
                        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGEwYjQxOTQ4YWU3ZTc0Mzk3MzQ5MSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDIwMDA3NDksImV4cCI6MTY0MjI1OTk0OX0.1WtMYU2xoz5qDJCqSgrRJLWe1PwMfIoo1YGI7fm8qNA'
                    }
                })
                setContent((res.data)[0])
                console.log((res.data)[0]);
            }catch(err){
                console.log(err);
            }
        }
        getRandomContent()
    },[type])
    
    return (
        <div className='feature'>
            {type && (
                <div className="category">
                    <span className='type'>{type==='movies'?'Movies':'Series'}</span>
                    <select name='genre' id='genre'>
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img
            src={content.img}
            alt="logo"
            />
            <div className="info">
                <img src={content.imgTitle} alt="sub-title"/>
                <span className="desc">
                {content.desc}
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>More infomation</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
