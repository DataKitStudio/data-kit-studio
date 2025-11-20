import Header from "./components/header";
import VideoTextBanner from "./homepage/vide-text-banner";
import ServicesBanner from "./homepage/services-banner";
import Footer from "./components/footer";
import ResultSection from "./homepage/result-section";
import WhyUsSection from "./homepage/why-us-section";
import CallToActionSection from "./homepage/call-to-action";
import ScrollToTopButton from "./components/scroll-to-top";

export default function Home() {
  return (
    <div className="flex flex-col h-auto w-full bg-light">
      <Header className="shadow-lg shadow-fuchsia-300/30" />

      <VideoTextBanner />
      <ServicesBanner />
      {/* <AutoScrollBanner /> */}
      <ResultSection />
      {/* <PlatformBanner /> */}
      {/* <ProvenProcess /> */}
      <WhyUsSection />
      <CallToActionSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
