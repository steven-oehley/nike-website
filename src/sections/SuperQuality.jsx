import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="max-container flex w-full items-center justify-between gap-10 max-lg:flex-col"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          We provide you
          <span className="text-coral-red"> Super</span>
          <br />
          <span className="text-coral-red">Quality </span> Shoes
        </h2>
        <p className="info-text mt-4 max-w-lg">
          Step into greatness with our expertly crafted shoes, where superior
          comfort meets bold style, redefining your every stride with unmatched
          quality and innovation
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Our commitment to quality guarantees your satisfaction, delivering
          exceptional comfort and style with every step
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} />
      </div>
    </section>
  );
};
export default SuperQuality;
