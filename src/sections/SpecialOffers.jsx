import { Button } from "../components";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffers = () => {
  return (
    <section className="justify-wrap max-container max-container flex items-center gap-10 max-xl:flex-col-reverse">
      <div className="flex-1">
        <img
          src={offer}
          alt="nike 30% off offer"
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          Special
          <span className="text-coral-red"> Offer</span>
        </h2>
        <p className="info-text mt-4 max-w-lg">
          Discover the perfect blend of quality and design with our exceptional
          footwear. Every pair is crafted to offer you superior comfort, style,
          and durability.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Have you been waiting for a sign? This is it! Take 30% off our best
          styles now and step into unparalleled savings and style.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};
export default SpecialOffers;
