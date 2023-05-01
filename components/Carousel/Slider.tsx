"use client";
import React, { ReactNode } from "react";
import SlickSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  children: ReactNode[];
};

const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  dotsClass: "dots",
};

const Slider = ({ children }: Props) => {
  return (
    <div className="h-full w-full ">
      <SlickSlider className="h-full w-full " {...settings}>
        {children}
      </SlickSlider>
    </div>
  );
};

export default Slider;
