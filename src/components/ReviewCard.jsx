import {star} from "../assets/icons"
const reviewCard = ({ imgURL,customerName,rating,feedback}) => {
  return (
    <div className='flex flex-col justify-center items-center '>
    <img
    src={imgURL}
    alt="review"
    className='rounded-full flex justify-center items-center my-4 object-cover w-[120px] h-[120px]' 
    />
    <p className=" mt-6 info-text text-center max-w-sm">{feedback}</p>
    <div className="mt-3 flex justify-center  items-center gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className=" font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
    </div>
    <h3 className=" font-palanquin leading-normal text-center text-2xl font-semibold mt-1"> {customerName}</h3>
    </div>
  )
}

export default reviewCard;