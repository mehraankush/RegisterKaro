import Navbar from "@/components/common/Navbar";
import BannerComponent from "../components/common/Banner";
import HeroSection from "@/components/core/Landingpage/HeroComponent/HeroSection";
import GuideComponent from "@/components/core/Landingpage/ChecklistGuide/GuideComponent";
import BanefitComponent from "@/components/core/Landingpage/BenefitsComponent/BanefitComponent";
import AdvisorComponent from "@/components/core/Landingpage/AdvisorComponent/AdvisorComponent";
import ClientCompanies from "@/components/core/Landingpage/companies/ClientConpanies";
import Newslatter from "@/components/core/Landingpage/NewsLatter/Newslatter";
import TestimonialsComponent from "@/components/core/Landingpage/Testimonials/TestimonialsComponent";
import QuestionsComponent from "@/components/core/Landingpage/questions/QuestionsComponent";
import FooterComponent from "@/components/core/Landingpage/Footer/FooterComponent";
import StepsComponents from "@/components/core/Landingpage/StepsComponent/StepsComponents";
import FeaturesComponent from "@/components/core/Landingpage/FeaturesComponent/FeaturesComponent";

export default function Home() {

  return (
    <main className="min-h-screen bg-white">
      <BannerComponent />

      <div className="mx-auto bg-[url('/background.png')]  bg-no-repeat bg-cover">
        <div className="max-w-7xl mx-auto">
          <Navbar />
          <HeroSection />
        </div>
      </div>

      <div className="flex justify-center  items-center -mt-10">
        <FeaturesComponent />
      </div>

      <div className="max-w-6xl mx-auto pb-10 ">
        <GuideComponent />
        <StepsComponents />
        <BanefitComponent />
        <AdvisorComponent />
        <ClientCompanies />
        <Newslatter />
        <TestimonialsComponent />
        <QuestionsComponent />
      </div>
      <FooterComponent />

    </main>
  );
}
