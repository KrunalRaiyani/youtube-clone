import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { AppContext } from '../context/context';
const VideoCard = (props) => {

    const context = useContext(AppContext)

  let {setVideoSrc} = context

    const navigate = useNavigate();

    const playVideo = () =>{
        setVideoSrc(`https://www.youtube.com/embed/${props.id}?autoplay=1`)
        navigate("/video");
        localStorage.setItem("src",`https://www.youtube.com/embed/${props.id}?autoplay=1`)
    }


let today = new Date()
let past = new Date(`${props.time}`) 

let finalDate = "1 hours ago"

function calcDate(date1,date2) {
    let diff = Math.floor(date1.getTime() - date2.getTime());
    let day = 1000 * 60 * 60 * 24;

    let days = Math.floor(diff/day);
    let months = Math.floor(days/31);
    let years = Math.floor(months/12);

    
    if (days === 0 ) {
        finalDate = (24-past.getHours()) + today.getHours() +"hours ago"
      
    }
    if (days >= 1 && days <= 31) {
        finalDate = days+"days ago"
    }
    if (months > 1 && months < 12) {
        finalDate = months +"months ago"
    }
    if (years > 1) {
        finalDate = months +"months ago"
    }
    }


calcDate(today,past)

    return (
        <div className="video-container" onClick={playVideo} >
            <img src={props.thumbnail} alt="Videi Thumbnail" className="thumbnail" />
            <div className="video-card-bottom">
                <img src="img/user-logo.png" alt="User" className="channel-logo" clogo = {props.channelLogo} />
                <div className="title-container" style={{flex:1}}>
                    <p className="title"> {props.title} </p>
                    <p className="channel"> {props.channelName} </p>
                    <p className="views">500k views • {finalDate} </p>
                </div>
                <img src="/img/threeDots.svg" alt="three dots" className='three-dots' />
            </div>
        </div>
    )
}

export default VideoCard