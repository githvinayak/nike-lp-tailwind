
import {star} from "../assets/icons";
const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full ">
        <img 
        src={imgURL}
        alt="product img"
        className="w-[280px] h-[280px]"
        />
        <div className="flex mt-8 justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className=" font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
        </div>
        <h3 className=" font-palanquin leading-normal text-2xl font-semibold mt-2">{name}</h3>
        <span className=" text-coral-red font-semibold font-montserrat text-2xl leading-normal mt-2">{price}</span>
       
    </div>
  )
}

export default PopularProductCard