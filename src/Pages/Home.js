import React, { useEffect } from 'react'
import MainContainer from '../components/MainContainer'

const Home = (props) => {
  useEffect(() => {
    props.setProgress(100)
    setTimeout(() => {
     props.setProgress(0)
    }, 10);
 }, [])
  return (
    <>
      <MainContainer key="homePage"  />
    </>
  )
}

export default Home