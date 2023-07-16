import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/context'
import VideoCard from './VideoCard'
import {  useLocation } from 'react-router-dom'

const VideoSection = () => {
  
  const context = useContext(AppContext)

  let location = useLocation();
  let {data} = context


  return (
    <div className='video-section'>
      { data.map(e => {
        let id = e.id
        let channelName = e.snippet.channelTitle
        let time = e.snippet.publishedAt
        let thumbnail = ''
        if (e.snippet.thumbnails.maxres) {
           thumbnail =e.snippet.thumbnails.maxres.url
        }
        else{
           thumbnail= "/img/errorImage.jpg"
        }
        let title = e.snippet.title
         return <VideoCard channelName = {channelName} time = {time} thumbnail={thumbnail} title = {title} channelLogo = {e.snippet.channelId}  key = {id} id={id} />
      })}
    </div>
  )
}

export default VideoSection