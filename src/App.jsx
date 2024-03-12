import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Testimonials from "./sections/Testimonials";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import SuperQuality from "./sections/SuperQuality";
import PopularProduct from "./sections/PopularProduct";
import Footer from "./components/Footer";
import Subscribe from "./sections/Subscribe";
import { arrowRight } from "./assets/icons";
const App=()=>(
    <>
  <main className="relative">
  <Nav/>
  <section className="xl:padding-l wide:padding-r padding-b">
  <Hero /> 
  </section>
  <section className="padding">
    <PopularProduct/>
  </section>
  <section className="padding">
    <SuperQuality/>
  </section>
  <section className="padding-x py-10">
   <Services/>
  </section>
  <section className="padding">
    <SpecialOffer/>
  </section>
  <section className="bg-pale-blue padding">
    <Testimonials/>
  </section>
  <section className="padding-x sm:py-32 py-16 w-full">
  <Subscribe/>
  </section>
  <section className="bg-black padding-x padding-t pb-8 ">
   <Footer iconURL={arrowRight}/>
  </section>
  </main>
  </>
  )

export default App;