import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';
// import {logo} from '../assets/images';

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
     <nav className=" flex justify-between items-center max-container">
        <a href="/">
        <img 
        src={headerLogo}
        alt="logo"
        width={130}
        height={29}
         />
         </a>
         <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((items)=>(
                <li key={items.label}>
                    <a href={items.href}  className="font-montserrat leading-normal text-lg text-slate-gray">{items.label}</a>
                </li>
            ))}
         </ul>
         <div className="flex gap-2 text-lg font-montserrat font-medium leading-normal max-lg:hidden">
            <a href="/" > Sign Up</a>
            <span>/</span>
            <a href="/">Explore Now</a>
         </div>
         <div className=" hidden  max-lg:block">
         <img src={hamburger} alt="ham" width={25} height={25} />
         </div>
     </nav>
    </header>
  )
}

export default Nav;