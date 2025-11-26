"use client"
import Footer from "../components/footer";
import Header from "../components/header";
import ScrollToTopButton from "../components/scroll-to-top";
import HowItWorksSection from "../homepage/how-it-works-section";
import ProcessSection from "../staffing/components/process";
import FormSection from "./components/form-section";
import GetStartedPage from "./components/get-started";
import WhyChooseSection from "./components/why-choose-section";

export default function GetStarted() {
    return (
        <div className="w-full bg-light">
            <Header />
            <GetStartedPage />
            <HowItWorksSection />
            <WhyChooseSection />
            <FormSection />
            <Footer />
            <ScrollToTopButton />
        </div>
    )
}