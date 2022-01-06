import {KeyboardBackspace } from '@material-ui/icons'
import ReactPlayer from 'react-player/youtube'
import './Watch.scss'
export const Watch = () => {
    const videoURL ='https://www.youtube.com/watch?v=UVbv-PJXm14'
    return (
        <div className='watch'>
            <div className="back">
                <KeyboardBackspace className='icon-back'/>
            </div>
            <ReactPlayer width={'100%'} height={'100vh'} className='video' controls url={videoURL}
                config={{
                    youtube: {
                      playerVars: {fullscreen:0, modestbranding: 1,fs: 0,disablekb: 1 }
                    }
                  }}
            />
        </div>
    )
}
