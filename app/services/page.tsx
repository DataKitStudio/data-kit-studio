import Footer from "../components/footer"
import Header from "../components/header"
import CallToAction from "./components/call-to-action"
import Categories from "./components/categories"
import ServicesSection from "./components/services-section"


export default function Services() {
    return(
        <div className="bg-light">
            <Header/>
            <Categories/>
            {/* <SocialMediaSection/> */}
            <ServicesSection />
            <CallToAction/>
            <Footer/>
        </div>
    )
}