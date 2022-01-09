import { Add ,PlayArrow , ThumbDownOutlined, ThumbUpOutlined} from '@material-ui/icons'
import ReactPlayer from 'react-player/youtube'
import './ListItem.scss'
import { useState } from 'react'
export const ListItem = ({index}) => {
    const [isHovered, setIsHovered] = useState(false)
    const trailer = 'https://www.youtube.com/watch?v=6WrNoNra_2U'
    return (
        <div style={{ left: isHovered && index * 225 - 10 + index * 2.5 }} className='listItem' onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
            <img src='https://occ-0-1500-1501.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdUD8qoiCBhdJveDffqttddjt72N-va2_0DgOiwhMw4SQ7pfIWv7zqFcDQwAuXYvlhv6tBwDuobkWFEtSybpH_QLLCMCs9UqB48NqyZVrweI3cwIzRxyjXQOaGzuCZOw3WbG3Hvi4NYY2akp-0PqGGIoGfA.webp?r=16b'/>
            {isHovered &&(
            <>
             <ReactPlayer url={trailer}  playing={false} width={'100%'} autoPlay={false} height={'140px'} className='video'
                onPlay={()=>console.log("playing")}
                onPause={()=>console.log("pausing")}
             />
            <div className='itemInfo'>
                <div className='icons'>
                    <PlayArrow className='icon'/>
                    <Add className='icon'/>
                    <ThumbUpOutlined className='icon'/>
                    <ThumbDownOutlined className='icon'/>
                </div>
                <div className="itemInfoTop">
                    <div>1 hour 14 mins</div>
                    <div className='limit'>16+</div>
                    <div>2000</div>
                </div>
                <div className="desc">
                    <ul className='genre'>
                        <li className='first-genre'>Funny</li>
                        <li>Kids</li>
                        <li>Adventure</li>
                    </ul>
                </div>
            </div>
            </>
            )}
        </div>
    )
}
