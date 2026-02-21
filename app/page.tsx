'use client'
import AboutPage from "@/components/AboutPage";
import AdvanceHero from "@/components/AdvanceHero";
import Follow from "@/components/Follow";
import Footer from "@/components/Fotter";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Skill from "@/components/Skill";
import GradientSection from "@/components/ui/GradientSection";
import GradualBlurMemo from "@/components/ui/GradualBlur";
import MagicBento from "@/components/ui/magic-bento"; 
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
      <Skill />

      <div className="w-full whdo bg-[#FDFBEC] ">
        <h1 className="me ant max-md:text-4xl mb-5 !max-[385px]:text-3xl text-5xl font-extrabold text-center logo2">
          What I Made?
        </h1>
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="255, 115, 0"
        />
        <GradientSection rotate={'180deg'}/>
      </div>

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
 