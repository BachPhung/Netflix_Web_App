import {KeyboardBackspace } from '@material-ui/icons'
import ReactPlayer from 'react-player/youtube'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Watch.scss'
export const Watch = () => {
    const location = useLocation();
    console.log(location);
    
    const movieURL = location.movie.video
    
    return (
        <div className='watch'>
            <Link to='/'>
            <div className="back">
                <KeyboardBackspace className='icon-back'/>
            </div>
            </Link>
            <ReactPlayer width={'100%'} height={'100vh'}playing={true}  autoPlay={true} className='video' controls url={movieURL}
            />
           
        </div>
    )
}
