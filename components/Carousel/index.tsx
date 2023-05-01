import React from "react";
import Slider from "./Slider";
import Image from "next/image";
import HomeHero from "./HomeHero";

type Props = {};

type data = {
  id: string;
  address: string;
  price: number;
  image: string;
};

const getData: () => Promise<data[]> = async () => {
  const res = await fetch("https://reqres.in/api/users?page=2");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return [
    {
      id: "1",
      address: "120 Anastasia Avenue, Coral Gables",
      price: 120000,
      image: "https://source.unsplash.com/random/?building",
    },
    {
      id: "2",
      address: "120 Anastasia Avenue, Coral Gables",
      price: 120000,
      image: "https://source.unsplash.com/random/?hotel",
    },
  ];
};

const Carousel = async (props: Props) => {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <Slider>
        {data.map((item) => (
          <HomeHero data={item} key={`slide-item-${item.id}`} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
