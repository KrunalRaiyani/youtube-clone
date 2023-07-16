import React from 'react'
import CategorySection from './CategorySection'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='main-container' key= "maincontaienr">
        <CategorySection />
        <VideoContainer/>
    </div>
  )
}

export default MainContainer