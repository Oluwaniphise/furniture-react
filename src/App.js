import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import NewItems from "./components/NewItems";
import { FeaturesSecond } from "./components/FeaturesSecond";
import { Products } from "./components/Products";
import { Testimonials } from "./components/Testimonials";
import { NewsLetter } from "./components/NewsLetter";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white ">
      <Navbar />
      <Hero />
      <Features />
      <NewItems />
      <FeaturesSecond />
      <Products />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
