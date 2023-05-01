import React from "react";
// import nodata from "../../public/Nodata.jpg";
import Image from "next/image";

type Props = {};

const NoData = (props: Props) => {
  return (
    <div className={`relative h-[calc(70vh-64px)] w-full`}>
      <Image
        src="/Nodata.jpg"
        alt={"nodata"}
        width={1200}
        height={600}
        className="absolute left-1/2 top-1/2  -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover object-center"
      />
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#00000062]   text-light">
        <h2 className="text-center text-3xl">
          Nothing to show you yet <br />
          Please coma back later
        </h2>
      </div>
    </div>
  );
};

export default NoData;
