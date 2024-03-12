//import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = ({iconURL}) => {
  const year = new Date().getFullYear();
  return (
   <footer className="max-container">
   <div className=" flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
   <div className="flex flex-col items-start">
    <a href="/" >
    <img 
    alt="footer"
    src={footerLogo}
    width={150}
    height={46}
    />
    </a>
    <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for new term at your nearest nike store.find your perfect size in store. get Rewards</p>
    <div className="flex items-center gap-5 mt-8">
      {
        socialMedia.map((icon)=>(
        <div className=" bg-white flex justify-center items-center rounded-full w-12 h-12">
        <img 
        src={icon.src}
        alt={icon.alt}
        width={24}
        height={24}
        />
        </div>
        ))
      }
    </div>
   </div>
   <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
   {
    footerLinks.map((section)=>(
      <div key={section}>
        <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
        <ul>
        {
          section.links.map((link)=>(
            <li  className="mt-3 flex gap-2 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray"><img
             src={iconURL} 
              alt="icon"
            className="text-black"
             />
            <a href="/">{link.name}</a></li>
          ))
        }
        </ul>
      </div>
    ))
   }
   </div>
   </div>
   <hr className="mt-8"/>
   <div className="flex justify-between text-white-400 mt-10 max-sm:flex-col max-sm:items-center">
     <div className="flex flex-1 justify-start items-center gap-2  font-montserrat cursor-pointer">
      <img 
      src=""
      alt="crt"
      width={20}
      height={20}
      className="rounded-full m-0"
      />
      <p>Copyright. All Reserved {year}</p>
     </div>
     <p className=" cursor-pointer font-montserrat">Terms & Conditions</p>
   </div>
   </footer>
  )
}

export default Footer;