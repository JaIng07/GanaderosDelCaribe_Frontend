import FeatureSections from "../components/FeatureSections/FeatureSections";
import StatisticsSection from "../components/StatisticsSection/StatisticsSection";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";

function Landingpage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureSections />
      <StatisticsSection />
      <Footer />
    </>
  );
}

export default Landingpage;
