import Image from "next/image";
import pizza from "../../public/pizza.jpg";
import pizza1 from "../../public/pizza1.jpg";

const Hero = () => {
  return (
    <section className="grid grid-cols-2">
      <div>
        <h1 className="text-4xl">Everything is better with Pizza</h1>
        <p className="my-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          explicabo non mollitia aliquam odio voluptate?
        </p>
        <div className="mx-2">
          <button className="bg-red-800 text-white px-6 py-2 mr-2 rounded">
            Order Now
          </button>
          <button className="text-black border border-gray-500 px-6 py-2 rounded">
            Learn More
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          objectFit="contain"
          src={pizza1}
          alt="a big pizza"
          layout="fill"
        />
      </div>
    </section>
  );
};

export default Hero;
