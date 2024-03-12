import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
const SpecialOffer = () => {
  return (
    <section
      className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10  max-conatiner"
    >
      <div className="flex-1">
      <img src={offer}
      alt="offer"
      width={773}
      height={687}
      className="object-contain w-full"
      />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
         <span className="text-coral-red"> Special</span> Offer
        </h2>
        <p align="justify"  className='mt-4 lg"max-w-lg info-text' >
        Lorem ipsum dolor sit amet. Ea magnam nihil et dolores ipsa est repellendus tempore qui blanditiis galisum ut dolorum voluptas hic pariatur labore. Ea incidunt officia et omnis exercitationem eos enim voluptate vel debitis doloribus sit nihil temporibus.
        </p>
        <p align="justify"  className='mt-6 lg"max-w-lg info-text'>
        Lorem ipsum dolor sit amet. Hic explicabo nostrum et rerum mollitia in impedit veniam sed accusamus explicabo ut maxime nesciunt.
        </p>
        <div className="mt-11 flex flex-wrap  gap-4 ">
        <Button className="" 
        label="Shop Now" 
        iconURL={arrowRight} 
        />
        <Button className=" mt-4 bg-[transparent]" 
        label="Learn More"
        backgroundColor=" bg-white"
        borderColor="border-slate-gray"
        textColor="text-slate-gray"
         />
        </div>
      </div> 
    </section>
  )
}

export default SpecialOffer;