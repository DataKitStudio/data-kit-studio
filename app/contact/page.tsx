"use client"
import Footer from "../components/footer"
import Header from "../components/header"
import ScrollToTopButton from "../components/scroll-to-top"
import CallToActionSection from "./components/callToActionSection"


export default function Contact() {
    return (
        <div className="bg-light">
            <Header />
            <CallToActionSection />
            <Footer />
            <ScrollToTopButton/>
        </div>
    )
}