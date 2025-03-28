import React from "react";
import ComeSeeUs from "./Events/ComeSeeUs";
import Gallery from "./Events/Gallery";

import HeroSection from "./Events/HeroSection";
import OtherVendors from "./Events/OtherVendorsSection";
import ProductSection from "./Events/ProductSection";

const EventsPage = () => {
  return (
    <>
      <HeroSection />
      {/* <ComeSeeUs /> */}
      <ProductSection />
      <Gallery />
      <OtherVendors />
    </>
  );
};

export default EventsPage;
