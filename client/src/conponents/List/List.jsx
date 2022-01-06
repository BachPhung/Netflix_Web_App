import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import './List.scss'
import { useLayoutEffect, useRef, useState } from 'react'
import { ListItem } from '../ListItem/ListItem'
export const List = () => {
    const listRef = useRef()
    const [isMoved,setIsMoved]= useState(false)
    const [slideNumber, setSlideNumber] = useState(0)
    const handleClick = (direction) =>{
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction==='left' && slideNumber > 0){
            setSlideNumber(slideNumber-1);
            listRef.current.style.transform = `translateX(${258*6 + distance}px)`
        }
        else if(direction==='right' && slideNumber <2){
            setSlideNumber(slideNumber+1);
            listRef.current.style.transform = `translateX(${-258*6 + distance}px)`
        }
        console.log(slideNumber);
    }
    return (
        <div className='list'>
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined onClick={()=>handleClick('left')}
                     className='sliderArrow left'
                     style={{display: !isMoved && 'none'}}     
                />
                <div className="container" ref={listRef}>
                    <ListItem index={0}/>
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                    <ListItem index={9}/>
                    <ListItem index={10}/>
                    <ListItem index={11}/>
                    <ListItem index={12}/>
                    <ListItem index={13}/>
                    <ListItem index={14}/>
                </div>
                <ArrowForwardIosOutlined onClick={()=>handleClick('right')}
                    className="sliderArrow right"
                />
            </div>
        </div>
    )
}
