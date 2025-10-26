import AboutPage from "@/components/AboutPage";
import AdvanceHero from "@/components/AdvanceHero";
import Follow from "@/components/Follow";
import Footer from "@/components/Fotter";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Skill from "@/components/Skill";
import MagicBento from "@/components/ui/magic-bento";

export default function Home() {

  return (
    <>
      <Loader />
      <Navbar delay={4.2} />
      <AdvanceHero />
      <AboutPage />
      <Follow />
      <Skill />
      {/* <AnimatedGridPatternDemo /> */}
      <div className=" w-full ">
        <h1 className="me ant max-md:text-4xl mb-5  !max-[385px]:text-3xl text-5xl font-extrabold text-center logo2">What i did ? </h1>
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
          glowColor="132, 0, 255"
        />
      </div>

      <Footer />
    </>
  );
}
