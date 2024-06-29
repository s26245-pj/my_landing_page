import AboutUs from "./components/AboutUs";
import Faq from "./components/Faq";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import HeroSection from "./components/HeroSection";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Workflow from "./components/Workflow";
import './i18n';
import { LanguageProvider } from './contexts/LanguageContext';

const App = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <LanguageProvider> 
          <HeroSection />
          <FeatureSection />
          <Workflow />
          <Gallery />
          <AboutUs />
          <Pricing />
          <Faq />
          <Testimonials />
          <Footer />
        </LanguageProvider> 
      </div>
    </>
  );
}

export default App;
