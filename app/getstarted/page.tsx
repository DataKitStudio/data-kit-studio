"use client"
import Footer from "../components/footer";
import Header from "../components/header";
import ScrollToTopButton from "../components/scroll-to-top";
import ProcessSection from "../staffing/components/process";
import FormSection from "./components/form-section";
import GetStartedPage from "./components/get-started";
import WhyChooseSection from "./components/why-choose-section";

export default function GetStarted() {
    return (
        <div className="w-full bg-light">
            <Header />
            <GetStartedPage />
            <ProcessSection />
            <WhyChooseSection />
            <FormSection />
            <Footer />
            <ScrollToTopButton />
        </div>
    )
}