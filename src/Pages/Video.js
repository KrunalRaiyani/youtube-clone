import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/context'

const Video = (props) => {
    useEffect(() => {
        props.setProgress(100)
        setTimeout(() => {
         props.setProgress(0)
        }, 10);
     }, [])

    window.scrollTo(-100, 0)
   
    const context = useContext(AppContext)

    let { videoSrc,setVideoSrc } = context
    setVideoSrc(localStorage.getItem("src"))
    return (
        <div className="video-div">
        <iframe width="100%" height="100%" src={videoSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default Video