import React, { useEffect } from 'react'
import MainContainer from '../components/MainContainer'

const SearchPage = (props) => {
 useEffect(() => {
   props.setProgress(100)
   setTimeout(() => {
    props.setProgress(0)
   }, 10);
}, [])
 
  return (
    <MainContainer key="searchPage"/>
  )
}

export default SearchPage