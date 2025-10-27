'use client'
import AboutPage from "@/components/AboutPage";
import AdvanceHero from "@/components/AdvanceHero";
import Follow from "@/components/Follow";
import Footer from "@/components/Fotter";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Skill from "@/components/Skill";
import GradualBlurMemo from "@/components/ui/GradualBlur";
import MagicBento from "@/components/ui/magic-bento";

export default function Home() {

  return (
   <>
  <Loader />
  <Navbar delay={4.2} />
  <section className="relative min-h-screen">
    <div className="overflow-visible">
      <AdvanceHero />
      <AboutPage />
      <Follow />
      <Skill />

      <div className="w-full">
        <h1 className="me ant max-md:text-4xl mb-5 !max-[385px]:text-3xl text-5xl font-extrabold text-center logo2">
          What I did?
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
      </div>

      <Footer />
    </div>

    <div className="fixed bottom-0 left-0 w-full pointer-events-none z-50">
      <GradualBlurMemo
        target="page"
        position="bottom"
        height="6rem"
        strength={2}
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



// export default function Home() {
//   return (
//     <>
//       {/* <Loader /> */}
//       <Navbar delay={4.2} />

//       {/* ✅ Removed fixed height and overflow constraints */}
//       <section style={{ position: 'relative', minHeight: '100vh' }}>

//         <div style={{ padding: '6rem 2rem' }}>
//           <AdvanceHero />
//           <AboutPage />
//           <Follow />
//           <Skill />

//           <div className="w-full">
//             <h1 className="me ant max-md:text-4xl mb-5 !max-[385px]:text-3xl text-5xl font-extrabold text-center logo2">
//               What I did?
//             </h1>

//             <MagicBento
//               textAutoHide={true}
//               enableStars={true}
//               enableSpotlight={true}
//               enableBorderGlow={true}
//               enableTilt={true}
//               enableMagnetism={true}
//               clickEffect={true}
//               spotlightRadius={300}
//               particleCount={12}
//               glowColor="255, 115, 0"
//             />
//           </div>

//           <Footer />
//         </div>

//         {/* ✅ Keep blur at bottom */}
//         <GradualBlurMemo
//           target="parent"
//           position="bottom"
//           height="6rem"
//           strength={2}
//           divCount={5}
//           curve="bezier"
//           exponential={true}
//           opacity={1}
//         />
//       </section>
//     </>
//   );
// }
