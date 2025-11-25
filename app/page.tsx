"use client"
import Header from "./components/header";
import ServicesBanner from "./homepage/services-banner";
import Footer from "./components/footer";
import ResultSection from "./homepage/result-section";
import WhyUsSection from "./homepage/why-us-section";
import CallToActionSection from "./homepage/call-to-action";
import ScrollToTopButton from "./components/scroll-to-top";
import ProcessSection from "./homepage/process-section";
import LazyVideoBanner from "./homepage/components/video-banner";

export default function Home() {
  return (
    <div className="">
      <Header className="shadow-lg shadow-fuchsia-300/30" />

      <LazyVideoBanner />
      <ServicesBanner />

      <ResultSection />

      <ProcessSection />
      <WhyUsSection />
      <CallToActionSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
