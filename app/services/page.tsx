import Footer from "../components/footer"
import Header from "../components/header"
import CallToAction from "./components/call-to-action"
import Categories from "./components/categories"
import SocialMediaSection from "./components/social-media-section"


export default function Services() {
    return(
        <div className="bg-light">
            <Header/>
            <Categories/>
            <SocialMediaSection/>
            <CallToAction/>
            <Footer/>
        </div>
    )
}