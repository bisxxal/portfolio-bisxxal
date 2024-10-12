 
import AboutPage from "@/components/AboutPage";
import Follow from "@/components/Follow";
import Footer from "@/components/Fotter";
import HeroNext from "@/components/hero";
import Loader from "@/components/Loader";
import Moveing from "@/components/Moving";
import Projects from "@/components/Projects";
import Skil from "@/components/Skills"; 

export default function Home() {
  return (
    <>
    {/* <Loader /> */}
   <HeroNext />
   <Moveing/> 
   <AboutPage />
   <Follow/>
   <Skil />
   <Projects/>
   <Footer/>
    </>
  );
}
