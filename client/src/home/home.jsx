import './home.scss'
import {AcUnit} from '@material-ui/icons'
import { Navbar } from '../conponents/Navbar/Navbar'
export const Home = () => {
    return (
        <div className='home'>
            <Navbar/>
            <img width='100%' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'></img>
        </div>
    )
}
