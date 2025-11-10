import Header from "./components/header";
import VideoTextBanner from "./homepage/vide-text-banner";
import ServicesBanner from "./homepage/services-banner";
import PlatformBanner from "./homepage/platform-banner";
import Footer from "./components/footer";
import ResultSection from "./homepage/result-section";
import ProvenProcess from "./homepage/proven-process-section";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-light">
      <Header />
      <VideoTextBanner />
      <ServicesBanner />
      {/* <AutoScrollBanner /> */}
      <ResultSection />
      <PlatformBanner />
      <ProvenProcess />
      <Footer/>
    </div>
  );
}
