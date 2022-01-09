import './home.scss'
import { Navbar } from '../../conponents/Navbar/Navbar'
import { Feature } from '../../conponents/Feature/Feature'
import { List } from '../../conponents/List/List'
import { useEffect, useState } from 'react'
import axios from 'axios'
export const Home = ({type}) => {
    const [lists, setLists] = useState([])
    const [genre, setGenre] = useState(null)
    useEffect(()=>{
        const getRandomLists = async () =>{
            try{
                const res = await axios.get(`http://localhost:8800/api/lists${type ? "?type=" + type : ""}${
                    genre ? "&genre=" + genre : ""
                  }`,{
                      headers:{
                          authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGEwYjQxOTQ4YWU3ZTc0Mzk3MzQ5MSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDE2ODIwOTMsImV4cCI6MTY0MTk0MTI5M30.dFBefsBu3zCvvwU7m2vWAlkFstzJcE_mit7DWxm0o6M'
                      }
                  })
                console.log(res.data)
                setLists(res.data)
            } catch(err){
                console.log(err);
            }
        }
        getRandomLists();
    },[genre,type])
    return (
        <div className='home'>
            <Navbar/>
            <Feature type={type}/>
            {lists.map(list=>{
                return(
                    <List key={list._id} list={list}/>
                )
            })}
        </div>
    )
}
