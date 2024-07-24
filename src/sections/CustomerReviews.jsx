import Reviewcard from "../Components/Reviewcard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container flex flex-col items-center justify-center">
    <h3 className="font-palanquin font-bold text-4xl">
      What Our <span className="text-coral-red">Customer</span> say
    </h3>
    <p className="info-text mt-2">hear jainwin stories from our users </p>
<div className="flex w-full flex-col lg:flex-row">
{reviews.map((e)=>( 
      <Reviewcard key={e.feedback}
        imgURL={e.imgURL} customerName={e.customerName}
        rating={e.rating}
        feedback={e.feedback}
      />
    ))}
</div>

    </section>
  )
}

export default CustomerReviews;
