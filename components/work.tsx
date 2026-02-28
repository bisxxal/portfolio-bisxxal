import React from 'react'
import MagicBento from './ui/magic-bento'
import GradientSection from './ui/GradientSection'

const Work = () => {
  return (
    <div className="w-full whdo bg-[#FDFBEC] ">
        <h1 className="me ant followtext highlight pt-16 pb-12 max-md:text-4xl mb-5 !max-[385px]:text-3xl text-5xl font-extrabold text-center logo2">
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
  )
}

export default Work