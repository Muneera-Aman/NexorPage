
import { BrowserRouter as Router, Routes, Route } from "react-router";

import Navbar from "./assets/components/Navbar";
import Home from "./assets/components/Home";
import AboutUs from "./assets/components/AboutUs";
import Services from "./assets/components/Services";
import CaseStudies from "./assets/components/CaseStudies";
import CustomerStories from "./assets/components/CustomerStories";
import ScrollToHash from "./assets/components/ScrollToHash";

export default function App() {
  return (
    <Router>
      <ScrollToHash />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/casestudies" element={<CaseStudies />} />
        <Route path="/blog" element={<CustomerStories />} />
      </Routes>
    </Router>
  );
}
