import React, { useContext, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/context'

const Navbar = (props) => {

    let location = useLocation();

    const ref = useRef()
    const closeRef = useRef()
    const containerRef = useRef()
    const navigate = useNavigate();
    const context = useContext(AppContext)
    const {setPage,openMenu, setOpenMenu,searchDate} = context



    useEffect(() => {        
    if (location.pathname ==='/') {
        setPage("home")
    }
    else if(location.pathname ==='/search'){
        setPage("search")
    }
    }, [location.pathname])
    
  


    const toggleMenu =()=>{
        openMenu?setOpenMenu(false):setOpenMenu(true)
    }


    const search = ()=>{
        let query = ref.current.value.trim()
        if (query !=='') {
            searchDate(query)
            navigate("/search")
            localStorage.setItem("query",query)
        }
    }

    const mobileSearch = ()=>{
        containerRef.current.classList.toggle("hide-container")
        let query = ref.current.value.trim()
        if (query !=='') {
            searchDate(query)
            navigate("/search")
            localStorage.setItem("query",query)
        }
    }

    const closeSearch = ()=>{
        containerRef.current.classList.toggle("hide-container")
        ref.current.value = ''
    }

  return (
    <nav className="navbar">

    {/* rhs section */}
    <div className="lhs-box">
            <img src="/img/menu.svg" alt="Menu" className='menu-icon' onClick={toggleMenu} />
        <div className="yt-logo">
           <Link to="/"> <img src="img/main-youtube-logo.png"  alt="YouTube"/> </Link>
        </div>
    </div>

    {/* center section */}
    <div className="center-box">
        <div className="search-box">
          <div className='search-container hide-container' ref={containerRef}>
          <input type="search" className="search hide-search" placeholder="search" ref={ref}/>
            <button className="cancle" onClick={closeSearch} ref={closeRef}><img src="/img/close.svg" alt="close" /></button>
          </div>
            <button className="btn pc-search-btn" onClick={search}><img src="/img/search.svg" alt="Search" /></button>
            <button className="btn mobile-search-btn" onClick={mobileSearch}><img src="/img/search.svg" alt="Search" /></button>
        </div>
            <img src="/img/mic.svg" alt="Mic" className='mic-icon' />
    </div>

    {/* rhs section */}
    <div className="rhs-box">
            <button className='create'><img src="/img/movie.svg" alt="Create"  /></button>
            <button className='bell'><img src="/img/bell.svg" alt="Bell" /></button>
        <div className="user-logo" >
            <img src="/img/user-logo.png" alt="User logo" />
        </div>
    </div>
  
</nav>
  )
}

export default Navbar