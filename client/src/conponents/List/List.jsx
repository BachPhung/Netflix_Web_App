import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import './List.scss'
import { useRef, useState } from 'react'
import { ListItem } from '../ListItem/ListItem'
export const List = ({list}) => {
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
                    {list.content.map((item,i)=>{
                        return <ListItem key={i} index={i} item={item} />
                    })}
                </div>
                <ArrowForwardIosOutlined onClick={()=>handleClick('right')}
                    className="sliderArrow right"
                />
            </div>
        </div>
    )
}
