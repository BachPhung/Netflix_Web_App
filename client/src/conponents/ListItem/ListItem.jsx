import { Add ,PlayArrow , ThumbDownOutlined, ThumbUpOutlined} from '@material-ui/icons'
import ReactPlayer from 'react-player/youtube'
import './ListItem.scss'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
export const ListItem = ({index,item}) => {
    const playerRef = useRef();
    const [movieInfo, setMovieInfo] = useState({})
    const [isHovered, setIsHovered] = useState(false)
    const [genre,setGenre] = useState([])
    useEffect(()=>{
        const getMovieInfo = async (id) =>{
            try {const res = await axios.get(`http://localhost:8800/api/movies/find/${id}`,{
                    headers:{
                        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGEwYjQxOTQ4YWU3ZTc0Mzk3MzQ5MSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDIwMDA3NDksImV4cCI6MTY0MjI1OTk0OX0.1WtMYU2xoz5qDJCqSgrRJLWe1PwMfIoo1YGI7fm8qNA'
                    }
                })
                setMovieInfo(res.data)
                setGenre((res.data).genre.split(' '))
            } catch(err){
                console.log(err);
            }
        }
        getMovieInfo(item);
    },[item]) 
    return (
        <Link to={{pathname:'/watch',movie:movieInfo}}>
        <div style={{ left: isHovered && index * 225 - 10 + index * 2.5 }} className='listItem' onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
            <img src={movieInfo.img}/>
            {isHovered &&(
            <>
             <ReactPlayer ref={playerRef} url={movieInfo.trailer} playing={true}  width={'100%'} autoPlay={true} height={'140px'} className='video'/>
            <div className='itemInfo'>
                <div className='icons'>
                    <PlayArrow className='icon'/>
                    <Add className='icon'/>
                    <ThumbUpOutlined className='icon'/>
                    <ThumbDownOutlined className='icon'/>
                </div>
                <div className="itemInfoTop">
                    <div>1 hour 14 mins</div>
                    <div className='limit'>{movieInfo.limit}+</div>
                    <div>{movieInfo.year}</div>
                </div>
                <div className="desc">
                    <div className='title'>{movieInfo.title}</div>
                    <ul className='genre'>
                        {genre.map((g,i)=>{
                            return <li key={i}>{g}</li>
                        })}
                    </ul>
                </div>
            </div>
            </>
            )}
        </div>
        </Link>
    )
}
