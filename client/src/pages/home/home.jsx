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
                          token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGEwMzE1ZTZjOTlhYjRlMDVkODRlNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTY4MDcwNCwiZXhwIjoxNjQxOTM5OTA0fQ.jSUb4CVMLCCYVPQQqemyvypwflL92Qs0whAFg5V0uyo'
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
            {/* <List/>
            <List/>
            <List/>
            <List/> */}
            {lists.map(list=>{
                return(
                    <List list={list}/>
                )
            })}
        </div>
    )
}
