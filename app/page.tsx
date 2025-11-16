"use client"
import Header from "./components/header";
import VideoTextBanner from "./homepage/vide-text-banner";
import ServicesBanner from "./homepage/services-banner";
import PlatformBanner from "./homepage/platform-banner";
import Footer from "./components/footer";
import ResultSection from "./homepage/result-section";
import ProvenProcess from "./homepage/proven-process-section";
import WhyUsSection from "./homepage/why-us-section";
import CallToActionSection from "./homepage/call-to-action";
import ScrollToTopButton from "./components/scroll-to-top";

export default function Home() {
  return (
    <div className="flex flex-col bg-light h-auto w-full bg-light">
      <Header />

      <VideoTextBanner />
      <ServicesBanner />
      {/* <AutoScrollBanner /> */}
      <ResultSection />
      <PlatformBanner />
      <ProvenProcess />
      <WhyUsSection />
      <CallToActionSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
