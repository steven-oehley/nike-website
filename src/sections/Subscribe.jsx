import { Button } from "../components";

const Subscribe = () => {
  return (
    <div
      className="max-container flex items-center justify-between gap-10 max-lg:flex-col"
      id="contact-us"
    >
      <h3 className="font-palanquin text-4xl font-bold leading-[68px] lg:max-w-md">
        Sign up for <span className="text-coral-red">Updates</span> &
        Newsletters
      </h3>
      <div className="flex w-full items-center gap-5 rounded-full p-2.5 max-sm:flex-col sm:border sm:border-slate-gray lg:max-w-[40%]">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex items-center max-sm:w-full max-sm:justify-end">
          <Button label="Sign-up" wFull={true} />
        </div>
      </div>
    </div>
  );
};
export default Subscribe;
