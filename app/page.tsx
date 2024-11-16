import AboutPage from "@/components/AboutPage";
import AdvanceHero from "@/components/AdvanceHero";
import { AnimatedGridPatternDemo } from "@/components/Background";
import Follow from "@/components/Follow";
import Footer from "@/components/Fotter"; 
import Loader from "@/components/Loader";
import Moveing from "@/components/Moving";
import Navbar from "@/components/Navbar"; 
import Skil from "@/components/Skills"; 

export default function Home() {
  return (
    <>
    {/* <Loader />  */}
    <Navbar delay={4.2} /> 
   <AdvanceHero />
   <Moveing/> 
   <AboutPage />
   <Follow/>
   <Skil />
    <AnimatedGridPatternDemo /> 
   <Footer/> 
    </>
  );
}
