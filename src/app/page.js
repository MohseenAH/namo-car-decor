import BeforeAfter from "@/components/BeforeAfter";
import Contact from "@/components/Contact";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>   
      <Navbar/>
      <Hero/>
      <Services/>
      <WhyChooseUs/>
      <BeforeAfter/>
      <Reviews/>
      <Contact/>
      <Footer/>
      <FloatingCTA/>
    </div>
  );
}