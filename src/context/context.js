import React, { createContext, useEffect, useState } from "react";
// import { AppContext } from '../context/context'

const AppContext = createContext()



const AppProvider = (props) => {
  let apiKey = process.env.REACT_APP_API_KEY
  
  const [page, setPage] = useState("home")

  

  const [openMenu, setOpenMenu] = useState(true)
  

  const [data, setData] = useState([])

  const [searchData, setSearchData] = useState([])

  const [videoSrc, setVideoSrc] = useState()

  const fetchVideos = async () => {
if (!localStorage.getItem("homeData")) {
    let data = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&q=nextPageToken&chart=mostPopular&type=video&regionCode=IN&maxResults=50&order=date&key=${apiKey}`)
    let res = await data.json()
    setData(res.items)
    localStorage.setItem("homeData",JSON.stringify(res.items))
    getLogo()
  }
  else{
    setData(JSON.parse(localStorage.getItem("homeData")))
  }
}


  const searchDate = async (query) => {
    let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=${query}&key=${apiKey}`)
    let res = await data.json()
    setSearchData(res.items)
    localStorage.setItem("vid",JSON.stringify(res.items))
    getLogo()
  }
  useEffect(() => {
    getLogo()
  }, [page])
  

  const getLogo = (le) => {
    setTimeout(() => {
      let channelLogos = document.querySelectorAll(".channel-logo")
      channelLogos.forEach(e => {
        getIcon(e)
      });
    }, 10);
    

    async function getIcon(e) {
      let data = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${e.getAttribute('clogo')}&key=${apiKey}`)
      let res = await data.json()
      e.src = res.items[0].snippet.thumbnails.default.url

    }
  }
  

  useEffect(() => {
    localStorage.clear()
    fetchVideos()
    window.innerWidth < 1250 && setOpenMenu(false)
  }, [])


  window.addEventListener('resize', () => {
    if (window.innerWidth < 1250) {
      setOpenMenu(false)
    }
    else {
      setOpenMenu(true)
    }
  })

  return (
    <AppContext.Provider value={{ openMenu, setOpenMenu, data, videoSrc, fetchVideos, setVideoSrc, searchDate, searchData, setSearchData, page, setPage }}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }