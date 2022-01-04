import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React from 'react'
import { useState, useEffect } from 'react'
import './navbar.scss'
export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(()=>{
        const handleScroll = () =>{
            window.scrollY===0?setIsScrolled(false):setIsScrolled(true);
        }
        window.addEventListener('scroll',handleScroll)
        return()=>window.removeEventListener('scroll',handleScroll);
    },[])
    return (
        <div className={isScrolled?'navbar scrolled':'navbar'}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt='logo'/>
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className='icon'/>
                    <span>KID</span>
                    <Notifications className='icon'/>
                    <img
                    src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                    alt=""
                    />
                    <div className='profile'>
                        <ArrowDropDown className='icon'/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
