import React, { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../context/context'
import CategoryBtn from './CategoryBtn'


const CategorySection = () => {

    const ref = useRef()
    const context = useContext(AppContext)

    const { openMenu, setOpenMenu } = context


 useEffect(() => {
    if (!openMenu) {
        ref.current.classList.add("small-sidebar")
    }else{
        ref.current.classList.remove("small-sidebar")
    }
 }, [openMenu])
 
  
  


    return (
        <div className='category-section' ref={ref} >
            <CategoryBtn img="/img/home.svg" name="Home" selected={true}   />
            <CategoryBtn img="/img/youtube-shorts.svg" name="Shorts" class="small-icon" />
            <CategoryBtn img="/img/subscription.svg" name="Subscription" />
            <hr className="hide"  />
            <CategoryBtn img="/img/library.svg" name="Library" class="small-icon" />
            <CategoryBtn img="/img/history.svg" name="History"  pClass="hide" />
            <CategoryBtn img="/img/videos.svg" name="Your Videos"  pClass="hide" />
            <CategoryBtn img="/img/watch.svg" name="Watch later"  pClass="hide" />
            <CategoryBtn img="/img/like.svg" name="Like videos"  pClass="hide" />
            <hr className='hide' />
            <span className="category-section-heading hide">Explore</span>
            <CategoryBtn img="/img/tranding.svg" name="Tranding"  pClass="hide" />
            <CategoryBtn img="/img/shopping.svg" name="Shopping" class="big-icon "  pClass="hide" />
            <CategoryBtn img="/img/music.svg" name="Music" class="big-icon "  pClass="hide" />
            <CategoryBtn img="/img/movie.svg" name="Movie" class="big-icon "  pClass="hide" />
            <CategoryBtn img="/img/live.svg" name="Live" class="small-icon "  pClass="hide" />
            <CategoryBtn img="/img/gaming.svg" name="Gaming" class="small-icon "  pClass="hide" />
            <CategoryBtn img="/img/news.svg" name="News" class="big-icon "  pClass="hide" />
            <CategoryBtn img="/img/sports.svg" name="Sports" class="big-icon "  pClass="hide" />
            <CategoryBtn img="/img/learning.svg" name="Learning" class="big-icon "  pClass="hide" />
            <CategoryBtn img="/img/fashion.svg" name="Fashion & Beauty"  pClass="hide" />
            <hr className='hide' />
            <span className="category-section-heading hide">More from YouTube</span>
            <CategoryBtn img="/img/youtubeLogo.svg" name="YouTube Premium"  pClass="hide" />
            <CategoryBtn img="/img/youtube-studio.png" name="YouTube Studio"  pClass="hide" />
            <CategoryBtn img="/img/youtube-music.png" name="YouTube Music"  pClass="hide" />
            <CategoryBtn img="/img/youtube-kids.png" name="YouTube Kids" class="yt-kids "  pClass="hide" />
            <hr className='hide' />
            <CategoryBtn img="/img/setting.svg" name="Setting"  pClass="hide" />
            <CategoryBtn img="/img/report.svg" name="Report history" class="big-icon "  pClass="hide" />
            <CategoryBtn img="/img/help.svg" name="Help"  pClass="hide" />
            <CategoryBtn img="/img/feedback.svg" name="Send feedback" class="big-icon "  pClass="hide" />
            <hr className='hide' />

            <div className="copyright hide">
                <p className="copy">About Press Copyright Contact us Creators Advertise Developers</p>

                <p className="copy">Terms Privacy Policy & SafetyHow YouTube worksTest new features</p>

                <p className="copy"> © 2023 Google LLC</p>
            </div>
        </div>
    )
}

export default CategorySection