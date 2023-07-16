import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/context'
import VideoCard from './VideoCard'


const SearchVideo = (props) => {
    const context = useContext(AppContext)

  let {searchData,searchDate} = context

  useEffect(() => {
    if(searchData.length===0){
      searchDate(localStorage.getItem("query"))
    }
  }, [])
  


  return (
    <div className={`video-section ${props.class}`}>
      {searchData.map(e => {
        let id = e.id.videoId   
        let channelName = e.snippet.channelTitle
        let time = e.snippet.publishedAt
        let thumbnail = ''
        if (e.snippet.thumbnails.medium.url) {
           thumbnail = thumbnail = e.snippet.thumbnails.medium.url
        }
        else{
           thumbnail= "/img/errorImage.jpg"
        }
        let title = e.snippet.title
         return <VideoCard channelName = {channelName} time = {time} thumbnail={thumbnail} title = {title} channelLogo = {e.snippet.channelId} key = {id+time} id={id} />
      })}
    </div>
  )
}

export default SearchVideo