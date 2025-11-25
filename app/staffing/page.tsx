

import Footer from "../components/footer";
import Header from "../components/header";
import ScrollToTopButton from "../components/scroll-to-top";
import StaffingHeroSection from "./components/heroSection";
import WhatWeDoSection from "./components/whatWeDoSection";
import WhatWeOffer from "./components/whatWeOffer";

export default function GetStarted() {
    return (
        <div className="w-full bg-light">
            <Header />
            <StaffingHeroSection />
            <WhatWeDoSection />
            <WhatWeOffer />
            <Footer />
            <ScrollToTopButton />
        </div>
    )
}