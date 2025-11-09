import Header from "./components/header";
import VideoTextBanner from "./homepage/vide-text-banner";
import ServicesBanner from "./homepage/services-banner";
import PlatformBanner from "./homepage/platform-banner";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-light">
      <Header />
      <VideoTextBanner />
      <ServicesBanner />
      {/* <AutoScrollBanner /> */}
      <PlatformBanner />
      <Footer/>
    </div>
  );
}
