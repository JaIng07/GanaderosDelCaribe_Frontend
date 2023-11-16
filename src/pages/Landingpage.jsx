import FeatureSections from "../components/FeatureSections/FeatureSections";
import StatisticsSection from "../components/statisticsSection/StatisticsSection";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import EcommerceSection from "../components/ecommerceSection/EcommerceSection";

function Landingpage() {
  return (
    <>
      <Navbar />
      <Hero />
      <EcommerceSection />
      <FeatureSections />
      <StatisticsSection />
      <Footer />
    </>
  );
}

export default Landingpage;
