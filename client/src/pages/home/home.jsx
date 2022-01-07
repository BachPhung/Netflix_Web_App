import './home.scss'
import { Navbar } from '../../conponents/Navbar/Navbar'
import { Feature } from '../../conponents/Feature/Feature'
import { List } from '../../conponents/List/List'
export const Home = ({type}) => {
    return (
        <div className='home'>
            <Navbar/>
            <Feature type={type}/>
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}
