"use client"
import Footer from "../components/footer"
import Header from "../components/header"
import ScrollToTopButton from "../components/scroll-to-top"
import CallToAction from "./components/call-to-action"
import Categories from "./components/categories"
import ServiceSection from "./components/influencer-section"
import ServicesCard from "./components/helper-components/services-card"
import InfluencerCard from "./components/helper-components/influencer-card"



export default function Services() {
    return (
        <div className="bg-light">
            <Header />
            <Categories />
            <ServiceSection heading="Strategic Marketing"
                description="Ready to give your brand the spotlight it deserves? Dive into our Paid Ads extravaganza and let your message shine in the digital universe!"
                buttonTextMain="Interested?"
                buttonTextSecondary="Let's book a call!"
                icon="PhoneCall"
                videoUrl="/Videos/services-page/strategy.mp4"
                extraComponent={<InfluencerCard service={["ADS", "ADS", "ADS"]} />}
                servicesComponent={<ServicesCard services={["Facebook Ads", "Google Ads"]} />}
            />
            <ServiceSection heading="Eye-catchy Designs"
                description="We craft visuals that speak to your ideal customers. Ready for an extraordinary brand transformation?"
                buttonTextMain="Interested?"
                buttonTextSecondary="Let's book a call!"
                icon="PhoneCall"
                videoUrl="/Videos/services-page/design.mp4"
                reverse={true}
                extraComponent={<InfluencerCard service={["DESIGN", "DESIGN", "DESIGN"]} />}
                servicesComponent={<ServicesCard services={["Social Media", "Ads", "Videos"]} />}
            />
            <ServiceSection heading="Social Media"
                description="Ready to make your brand the talk of the social town? Dive into our Social Media Management expertise and let your brand resonate across digital platforms!"
                buttonTextMain="Interested?"
                buttonTextSecondary="Let's book a call!"
                icon="PhoneCall"
                videoUrl="/Videos/services-page/socialmedia.mp4"
                extraComponent={<InfluencerCard service={["SOCIAL", "SOCIAL", "SOCIAL"]} />}
                servicesComponent={<ServicesCard services={["Facebook Ads", "Google Ads"]} />}
            />
            <ServiceSection heading="Automation"
                description="Automate the manual task, Save the time and energy, Only focus on delivering quality"
                buttonTextMain="Interested?"
                buttonTextSecondary="Let's book a call!"
                icon="PhoneCall"
                videoUrl="/Videos/services-page/automation.mp4"
                reverse={true}
                extraComponent={<InfluencerCard service={["AUTOMATE", "AUTOMATE", "AUTOMATE"]} />}
                servicesComponent={<ServicesCard services={["CRM", "Lead Gen", "Business Flows"]} />}
            />
            <ServiceSection heading="Web Development"
                description="From tech wizardry to seamless online experiences – enter the world of Technical Solutions. We transform digital hiccups into high-fives for your users."
                buttonTextMain="Interested?"
                buttonTextSecondary="Let's book a call!"
                icon="PhoneCall"
                videoUrl="/Videos/services-page/web.mp4"
                extraComponent={<InfluencerCard service={["WEB", "WEB", "WEB"]} />}
                servicesComponent={<ServicesCard services={["Website Development", "Landing Pages"]} />}
            />
            <ServiceSection heading="Robust SEO"
                description="Elevate your online presence, automate workflows, and define digital brilliance with hassle-free SEO"
                buttonTextMain="Interested?"
                buttonTextSecondary="Let's book a call!"
                icon="PhoneCall"
                videoUrl="/Videos/services-page/seo.mp4"
                reverse={true}
                extraComponent={<InfluencerCard service={["SEO", "SEO", "SEO"]} />}
                servicesComponent={<ServicesCard services={["Social Media", "Ads", "Videos"]} />}
            />
            <ServiceSection heading="Are you an influencer?"
                subHeading="This is what we have for you."
                description="Whether you’re just starting out or already growing fast, we’ve got everything you need to build your brand, boost engagement, and grow your income..."
                buttonTextMain="Interested?"
                buttonTextSecondary="Let's book a call!"
                icon="PhoneCall"
                videoUrl="/Videos/services-page/influencer.webm"
                servicesComponent={<ServicesCard services={["Social Media", "Content", "Videos"]} />}
            />
            <CallToAction />
            <Footer />
            <ScrollToTopButton />
        </div>
    )
}