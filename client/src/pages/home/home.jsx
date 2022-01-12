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
                          authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGEwYjQxOTQ4YWU3ZTc0Mzk3MzQ5MSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDIwMDA3NDksImV4cCI6MTY0MjI1OTk0OX0.1WtMYU2xoz5qDJCqSgrRJLWe1PwMfIoo1YGI7fm8qNA'
                      }
                  })
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
            {lists.length!==0 && lists.map(list=>{
                return(
                    <List key={list._id} list={list}/>
                )
            })}
        </div>
    )
}
