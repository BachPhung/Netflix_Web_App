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
                          token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDFjNzc0ZjAwYTBjMGM3MWFlMzViYiIsImlkQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDE1Njc0ODAsImV4cCI6MTY0MTgyNjY4MH0.vkp5hkHBMQDwGnpTiIghGvhra6Zo8rkxSNqseSWCNP8'
                      }
                  })
                console.log(res.data)
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
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}
