import { reviews } from "../constants";
import ReviewCard from "../components/reviewCard";

const Testimonials = () => {
  return (
    <section className="max-container">
    <h3 className=" font-palanquin text-center text-4xl capitalize font-bold ">
        what Our <span className="text-coral-red">Customers</span> Says?
    </h3>
    <p align="justify"  className='mt-4 text-center info-text m-auto max-w-lg' >
        Lorem ipsum dolor sit amet. Ea magnam nihil et dolores ipsa est repellendus tempore qui blanditiis galisum ut dolorum voluptas hic pariatur labore. 
    </p>
    <div className=" mt-24 flex flex-1 max-lg:flex-col gap-14 justify-evenly items-center">
      {
        reviews.map((reviews,index)=>(
          <ReviewCard 
            key={index}
            {...reviews}

          />
        ))
      }
    </div>
    </section>
  )
}

export default Testimonials;