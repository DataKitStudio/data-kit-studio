
import Footer from "../components/footer";
import Header from "../components/header";
import ScrollToTopButton from "../components/scroll-to-top";
import ProcessSection from "./components/process";
import CallToActionSection from "./components/callToActionSection";
import StaffingHeroSection from "./components/heroSection";
import WhatWeDoSection from "./components/whatWeDoSection";
import WhatWeOffer from "./components/whatWeOffer";
import WhyChooseSection from "./components/whyChooseSection";

export default function GetStarted() {
    return (
        <div className="w-full bg-light">
            <Header />
            <StaffingHeroSection />
            <WhatWeDoSection />
            <WhatWeOffer />
            <ProcessSection />
            <WhyChooseSection />
            <CallToActionSection />
            <Footer />
            <ScrollToTopButton />
        </div>
    )
}