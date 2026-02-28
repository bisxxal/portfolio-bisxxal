'use client'
import AboutPage from "@/components/AboutPage";
import AdvanceHero from "@/components/AdvanceHero";
import Follow from "@/components/Follow";
import Footer from "@/components/Fotter";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skill";
import GradualBlurMemo from "@/components/ui/GradualBlur";
export default function Home() {
 
  return (
   <>
  <Loader />
  <Navbar delay={3} />
  <section className="relative min-h-screen">
    <div className="overflow-visible">
      <AdvanceHero />
      <AboutPage />
      <Follow />
      <Skills />
 
      {/* <Work/> */}

      <Footer />
    </div>

    <div className="fixed bottom-0 left-0 w-full pointer-events-none z-50">
      <GradualBlurMemo
        target="page"
        position="bottom"
        height="6rem"
        strength={3}
        divCount={10}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
 
    </div>
  </section>
</>

  );
}
 