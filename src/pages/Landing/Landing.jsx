import React from "react";
import LayOut from "../../Components/LayOut/LayOut";
import Category from "../../Components/Category/Category";
import Product from "../../Components/Product/Product";
import CarouselEffect from "../../Components/Carousel/Carousel";
import Footer from "../../Components/Footer/Footer";

function Landing() {
  return (
    <LayOut>
      <CarouselEffect />
      <Category />
      <Product />
      <Footer/>
    </LayOut>
  );
}

export default Landing;
