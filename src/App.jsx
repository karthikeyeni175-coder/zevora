import { useEffect } from "react";
import initSalon from "./salon.js";
import TopWidgets from "./components/TopWidgets.jsx";
import SpinWin from "./components/SpinWin.jsx";
import Birthday from "./components/Birthday.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Services from "./components/Services.jsx";
import WhyUs from "./components/WhyUs.jsx";
import Trending from "./components/Trending.jsx";
import Team from "./components/Team.jsx";
import Gallery from "./components/Gallery.jsx";
import BeforeAfter from "./components/BeforeAfter.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Pricing from "./components/Pricing.jsx";
import Instagram from "./components/Instagram.jsx";
import ScrollStory from "./components/ScrollStory.jsx";
import Shop from "./components/Shop.jsx";
import BeautyRoutine from "./components/BeautyRoutine.jsx";
import PremiumBrands from "./components/PremiumBrands.jsx";
import SeasonalCollection from "./components/SeasonalCollection.jsx";
import CountdownBar from "./components/CountdownBar.jsx";
import Contact from "./components/Contact.jsx";
import Booking from "./components/Booking.jsx";
import Footer from "./components/Footer.jsx";
import ServiceModal from "./components/ServiceModal.jsx";

export default function App() {
  useEffect(() => {
    initSalon();
  }, []);

  return (
    <>
      <TopWidgets />
      <SpinWin />
      <Birthday />
      <LoadingScreen />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <Trending />
      <Team />
      <Gallery />
      <BeforeAfter />
      <Testimonials />
      <Pricing />
      <Instagram />
      <ScrollStory />
      <Shop />
      <BeautyRoutine />
      <PremiumBrands />
      <SeasonalCollection />
      <CountdownBar />
      <Contact />
      <Booking />
      <Footer />
      <ServiceModal />
    </>
  );
}
