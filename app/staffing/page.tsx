

import Footer from "../components/footer";
import Header from "../components/header";
import ScrollToTopButton from "../components/scroll-to-top";

export default function GetStarted() {
    return (
        <div className="w-full bg-light">
            <Header />

            <Footer />
            <ScrollToTopButton />
        </div>
    )
}