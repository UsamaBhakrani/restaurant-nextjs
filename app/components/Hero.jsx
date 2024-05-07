import Image from "next/image";
import pizza2 from "../../public/pizza2.jpg";
import RightIcon from "./RightIcon";

const Hero = () => {
  return (
    <section className="hero">
      <div className="py-8">
        <h1 className="text-4xl font-semibold">
          Everything is better with a{" "}
          <span className="text-red-800">Pizza</span>
        </h1>
        <p className="my-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          explicabo non mollitia aliquam odio voluptate?
        </p>
        <div className="flex gap-2">
          <button className="text-gray-500 border border-gray-600 font-semibold px-6 py-2 rounded">
            Learn More
          </button>
          <button className="bg-red-800 text-white px-4 py-2 mr-2 rounded flex gap-2 font-semibold">
            Order Now
            <RightIcon />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          objectFit="contain"
          src={pizza2}
          alt="a big pizza"
          layout="fill"
        />
      </div>
    </section>
  );
};

export default Hero;
