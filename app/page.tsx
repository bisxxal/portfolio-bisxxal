import AboutPage from "@/components/AboutPage";
import { AnimatedGridPatternDemo } from "@/components/Background";
import Follow from "@/components/Follow";
import Footer from "@/components/Fotter";
import HeroNext from "@/components/hero";
import Loader from "@/components/Loader";
import Moveing from "@/components/Moving";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skil from "@/components/Skills"; 

export default function Home() {
  return (
    <>
    <Loader />
    <Navbar delay={4.2} />
   <HeroNext />
   <Moveing/> 
   <AboutPage />
   <Follow/>
   <Skil />
    <AnimatedGridPatternDemo />
   {/* <Projects/> */}
   <Footer/>
    </>
  );
}
