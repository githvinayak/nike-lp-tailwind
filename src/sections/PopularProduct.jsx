import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProduct = () => {
  return (
    <section className=" max-container max-sm:mt-12 ">
    <div className="flex flex-col justify-stretch gap-5">
      <h2 className=" font-bold text-4xl font-palanquin "> Our <span className=" text-coral-red">Popular</span> Products</h2>
      <p align="justify" className=" font-montserrat lg:max-w-lg mt-2 text-slate-gray">Description: Nike is a renowned sportswear brand that offers a wide range of athletic apparel, footwear, and equipment. Known for its innovation and performance-oriented products.</p>
    </div>
    <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap:14">
    {
      products.map((product)=>(
        <PopularProductCard key=
          {product.name}
          {...product}
        />
      ))
    }
    </div>
    </section>
  )
}

export default PopularProduct;