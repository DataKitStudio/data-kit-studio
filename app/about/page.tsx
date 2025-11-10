"use client"
import Footer from "../components/footer"
import Header from "../components/header"
import ScrollToTopButton from "../components/scroll-to-top"
import VideoBanner from "./components/videobanner"

export default function About() {
    return(
        <div className="bg-light">
            <Header />
            <VideoBanner/>
            <Footer/>
            <ScrollToTopButton/>
        </div>
    )
}