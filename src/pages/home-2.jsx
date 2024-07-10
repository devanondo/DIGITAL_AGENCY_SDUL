import React from 'react'
import StartHeroTwo from '../components/start-hero-2'
import StartSeoHomeTwo from '../components/start-seo-home-2'
import Navbar from '../components/shared/navbar'
import Footer from '../components/shared/footer'
import BrandLogo from '../components/brand-logo'
import VideoPopupHomeTwo from '../components/video-popup-home-2'
import MarketingAreaHome2 from '../components/marketing-area-home-2'
import MarqueAreaHome2 from '../components/marque-area-home-2'
import RecentWorkHomeTwo from '../components/recent-work-home-2'
import FaqHome2 from '../components/faq-home-2'
import TeamHome2 from '../components/team-home-2'
import SubscribeHome2 from '../components/subscribe-home-2'
import BlogHome2 from '../components/blog-home-2'

const HomeTwo = () => {
    return (
        <>
            <Navbar />
            <StartHeroTwo />
            <StartSeoHomeTwo />
            <BrandLogo />
            <VideoPopupHomeTwo />
            <MarketingAreaHome2 />
            <MarqueAreaHome2 />
            <RecentWorkHomeTwo />
            <FaqHome2 />
            <TeamHome2 />
            <SubscribeHome2 />
            <BlogHome2 />

            <Footer />
        </>
    )
}

export default HomeTwo
