"use client"
import Footer from "../components/footer"
import Header from "../components/header"
import ScrollToTopButton from "../components/scroll-to-top"
import CallToAction from "./components/call-to-action"
import Categories from "./components/categories"
import InfluencerSection from "./components/influencer-section"
import ServicesSection from "./components/services-section"


export default function Services() {
    return (
        <div className="bg-light flex flex-col items-center">
            <Header />
            <Categories />
            {/* <SocialMediaSection/> */}
            <ServicesSection />
            <InfluencerSection />
            <CallToAction />
            <Footer />
            <ScrollToTopButton />
        </div>
    )
}