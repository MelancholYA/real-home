import Image from "next/image";
import Link from "next/link";

type Props = {
  data: {
    id: string;
    address: string;
    image: string;
    price: number;
  };
};

const HomeHero = ({ data }: Props) => {
  const { address, id, image, price } = data;
  return (
    <div className="relative h-[calc(70vh-64px)] w-full">
      <Image
        src={image}
        alt={address}
        width={1200}
        height={600}
        className="absolute left-1/2 top-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover object-center"
      />
      <div className="flex h-full w-full flex-col items-center justify-end bg-[#00000062]  pb-40 text-light">
        <h3 className="w-2/3 text-center text-2xl font-bold md:text-5xl md:font-extrabold">
          {address}
        </h3>
        <div className="mt-6 w-1/3 items-center text-center md:flex md:justify-center ">
          <h5 className="md:mr-7 md:text-4xl md:font-thin">${price}</h5>
          <Link
            className="mt-4 block  rounded-md  bg-[#ffffff47] p-1 transition-colors hover:bg-[#ffffff8a] md:mt-0 md:text-lg "
            href={`product/${id}`}
          >
            More info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
