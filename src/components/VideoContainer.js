import React, { useContext } from 'react'
import { AppContext } from '../context/context'
import SearchVideo from './SearchVideo'
import VideoSection from './VideoSection'

const VideoContainer = () => {
  const context = useContext(AppContext)

  let { page, setPage } = context

  return (
    <div className='container'>
      <div className="topic-section">
        <button className="topic-btn selected-topic-btn">All</button>
        <button className="topic-btn">Music</button>
        <button className="topic-btn">Bollywood Music</button>
        <button className="topic-btn">Live</button>
        <button className="topic-btn">Indian pop music</button>
        <button className="topic-btn">Mantras</button>
        <button className="topic-btn">Kapil Sharma</button>
        <button className="topic-btn">Game shows</button>
        <button className="topic-btn">Tmkoc</button>
        <button className="topic-btn">Web Development</button>
        <button className="topic-btn">Stoks</button>
        <button className="topic-btn">Tv shows</button>
        <button className="topic-btn">Tranding</button>
        <button className="topic-btn">Gaming</button>
        <button className="topic-btn">Cricket</button>
        <button className="topic-btn">News</button>
        <button className="topic-btn">Comady</button>
      </div>

      {
        page == "home" ? <VideoSection class="main-page" key="home" /> : <SearchVideo class="search-page" key = "search" />
      }

    </div>
  )
}

export default VideoContainer