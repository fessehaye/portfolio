import React, { useEffect } from "react"
import gsap from "gsap"
import HeroNav from "./hero-nav"
import HeroFooter from "./hero-footer"

const Hero = ({ bgRefs, contentRefs, profileRefs, navRefs, iconRefs }) => {
  useEffect(() => {
    let tl = gsap.timeline({})
    console.log(profileRefs)
    tl.from(bgRefs.current, {
      opacity: 0,
      translateX: "-100%",
      duration: 0.8,
      delay: 2,
      transformOrigin: "center",
    })
    tl.fromTo(
      contentRefs.current,
      {
        clipPath: "circle(0% at 0px 0px)",
      },
      {
        duration: 0.6,
        clipPath: "circle(200% at 0px 0px)",
        transformOrigin: "center",
        ease: "elastic.out(1, 0.3)",
      }
    )
    tl.from(
      ".profile-pic",
      {
        opacity: 0,
        border: 0,
        duration: 1,
      },
      "-=0.6"
    )
    tl.from(
      iconRefs.current,
      {
        opacity: 0,
        translateX: -20,
        duration: 0.4,
        transformOrigin: "center",
        ease: "power3.inOut",
        stagger: {
          amount: 0.6,
          ease: "power3.inOut",
        },
      },
      "-=0.4"
    )
    tl.from(
      navRefs.current,
      {
        opacity: 0,
        translateX: -20,
        duration: 0.4,
        transformOrigin: "center",
        ease: "power3.inOut",
        stagger: {
          amount: 0.6,
          ease: "power3.inOut",
        },
      },
      "-=1.4"
    )
  }, [bgRefs, contentRefs, profileRefs, navRefs, iconRefs])

  return (
    <>
      <svg
        className="absolute w-full h-screen inset-0 z-1"
        viewBox="0 0 1488 1050"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid slice"
        ref={bgRefs}
      >
        <path
          d="M0 0H1488L1169.5 517.5L1488 1050H0V0Z"
          fill="#5A67D8"
          fill-opacity="0.9"
        />
      </svg>
      <main className="w-5/6 h-screen relative flex flex-col z-2 text-white px-8 py-6">
        <HeroNav profileRefs={profileRefs} navRefs={navRefs} />

        <div
          className="w-3/4 flex-1 flex flex-col justify-center"
          ref={contentRefs}
        >
          <h1 className="font-Overlock font-black text-6xl mb-8">
            Hey, my name is <span className="text-green-300">Simon!</span> I am
            a Front End Developer living in Edmonton, Alberta.
          </h1>
          <h3 className="font-Overlock font-black text-4xl">
            I currently work as a Web Developer at{" "}
            <span className="text-green-300">Beamdog.</span>
          </h3>
          <div className="mt-20">
            <button className="py-2 uppercase border-white font-Mada text-3xl border-2 rounded-xl mr-8 w-44">
              Projects
            </button>
            <button className="py-2 uppercase border-white font-Mada text-3xl border-2 rounded-xl mr-4 w-44">
              Resume
            </button>
          </div>
        </div>

        <HeroFooter iconRefs={iconRefs} />
      </main>
    </>
  )
}

export default Hero
