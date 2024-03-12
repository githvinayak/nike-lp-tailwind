import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-conatiner"
    >
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super </span>
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p align="justify"  className='mt-4 lg"max-w-lg info-text' >
        Lorem ipsum dolor sit amet. Ea magnam nihil et dolores ipsa est repellendus tempore qui blanditiis galisum ut dolorum voluptas hic pariatur labore. Ea incidunt officia et omnis exercitationem eos enim voluptate vel debitis doloribus sit nihil temporibus.
        </p>
        <p align="justify"  className='mt-6 lg"max-w-lg info-text'>
        Lorem ipsum dolor sit amet. Hic explicabo nostrum et rerum mollitia in impedit veniam sed accusamus explicabo ut maxime nesciunt.
        </p>
        <div className="mt-11">
        <Button className="" label="view details" />
        </div>
      </div>
      <div className=" fle flex-1 justify-center items-center">
      <img src={shoe8}
      alt="shoe8"
      width={570}
      height={522}
      className="object-contain"
      />
      </div>
    </section>
  );
};

export default SuperQuality;
