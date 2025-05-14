import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./Components/Explore/Explore.jsx";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/HeroSection/Hero";
import Herophotographer from "./Components/PhotographerHero/Hero.jsx";
import Keyfeaturephotographer from "./Components/KeyfeaturePhotographer/Keyfeature.jsx";
import Keyfeature from "./Components/KeyFeature/Keyfeature.jsx";
import NetworkofPhotographer from "./Components/NetworkOfPhotographer/NetworkofPhotographer.jsx";
// import Paid from "./Components/Paid/Paid";
import Pricing from "./Components/Pricing/Pricing.jsx";
import Featureofinstapix from "./Components/featureofinstapix/Featureofinstapix.jsx";
import Diyhero from "./Components/Diy Hero/Diyhero.jsx";
import Imagegallery from "./Components/Imagegallery/Imagegallery.jsx";
import Photographerhero from "./Components/PhotoHero/Photographerhero.jsx";
import Explorephotographers from "./Components/Explorephotographers/Explorephotographers.jsx";
import Howitworkphotographer from "./Components/HowitworkPhotographer/Howitworkphotographer.jsx";
import ScrollToTop from "./Components/scrollToTop.js";
import Joinphotographer from "./Components/Join Photographer/Joinphotographer.jsx";
import Explorefinance from "./Components/Explorefinance/Explorefinance.jsx";
import Diypricing from "./Components/diypricing/diypricing.jsx";
import Downloadpage from "./Components/downloadpage/Downloadpage.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* main page */}
        <Route
          path="/"
          element={
            <>
              <Header page="home" />
              <Hero />
              <Keyfeature />
              <NetworkofPhotographer />
              <Explore />
              <Featureofinstapix />
              <Diyhero />
              <Pricing />
              <Photographerhero />
              <Footer />
            </>
          }
        />

        {/* DIY page */}
        <Route
          path="/diycamera"
          element={
            <>
              <Header page="diy" />
              <Photographerhero />
              <Featureofinstapix />
              <Diypricing/>
              <Explorefinance />
              <Explorephotographers />
              <Imagegallery />
              <Footer />
            </>
          }
        />

        {/* Photographer page */}
        <Route
          path="/photographer"
          element={
            <>
              <Header page="photographer" />
              <Herophotographer />
              <Howitworkphotographer />
              <Joinphotographer />
              <Keyfeaturephotographer />
              <Diyhero />
              <Featureofinstapix />
              <Footer />
            </>
          }
          
        />
        <Route
          path="/download"
          element={
            <>
              {/* <Header page="photographer" /> */}
              <Downloadpage/>
              {/* <Footer /> */}
            </>
          }
          
        />
      </Routes>
    </Router>
  );
}

export default App;
