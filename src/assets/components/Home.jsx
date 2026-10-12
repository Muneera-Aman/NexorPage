import Hero from "./Hero";
import Marquee from "./TrustedMarquee";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Impact from "./Impact";
import CaseStudies from "./CaseStudies";
import Results from "./Results";
import CustomerStories from "./CustomerStories";
import FAQ from "./FAQ";
import Insights from "./Insight";
import CTA from "./CTA";
import Footer from "./Footer";

function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <AboutUs />
      <Services />
      <Impact />
      <CaseStudies />
      <Results />
      <CustomerStories />
      <FAQ />
      <Insights />
      <CTA />
      <Footer />
    </main>
  );
}

export default Home;
