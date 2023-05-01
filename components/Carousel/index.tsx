import React from "react";
import Slider from "./Slider";
import Image from "next/image";
import HomeHero from "./HomeHero";
import NoData from "./NoData";

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
      price: 200000,
      image:
        "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "2",
      address: "120 Anastasia Avenue, Coral Gables",
      price: 120000,
      image:
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
};

const Carousel = async (props: Props) => {
  const data = await getData();
  console.log(data);
  return (
    <div>
      {!data.length ? (
        <NoData />
      ) : (
        <Slider>
          {data.map((item) => (
            <HomeHero data={item} key={`slide-item-${item.id}`} />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Carousel;
