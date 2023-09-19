import FeatureSections from "../components/FeatureSections/FeatureSections";
import StatisticsSection from "../components/StatisticsSection/StatisticsSection";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";

function Index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureSections />
      <StatisticsSection />
    </div>
  );
}

export default Index;
