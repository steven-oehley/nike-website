import { reviews } from "../constants";
import { ReviewCard } from "../components";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-center font-palanquin text-4xl font-bold">
        What our <span className="text-coral-red">Customers </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center text-slate-gray">
        We love hearing how happy our customers are with our shoes! Whether it's
        the perfect fit, unmatched comfort, or stylish designs, our shoes are
        crafted to bring joy to every step. Your satisfaction is our top
        priority!
      </p>
      <div className="mt-24 flex flex-1 items-center justify-evenly gap-14 max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};
export default CustomerReviews;
