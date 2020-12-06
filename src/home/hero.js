import React, { useEffect } from "react"
import gsap from "gsap"
import HeroNav from "./hero-nav"
import HeroFooter from "./hero-footer"

const Hero = ({ bgRefs, contentRefs, profileRefs, navRefs, iconRefs }) => {
  useEffect(() => {
    let tl = gsap.timeline({ paused: true })
    const mediaQuery = window.matchMedia("(min-width: 1280px)")
    tl.from(bgRefs.current, {
      opacity: 0,
      translateX: "-100%",
      duration: mediaQuery.matches ? 1 : 0,
      delay: 1,
      transformOrigin: "center",
    })

    tl.fromTo(
      contentRefs.current,
      {
        clipPath: "circle(0% at 0px 0px)",
      },
      {
        duration: 1,
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
      "-=1"
    )

    tl.from(
      iconRefs.current,
      {
        opacity: 0,
        translateX: -20,
        duration: 0.4,
        transformOrigin: "center",
        ease: "power1.inOut",
        clearProps: "opacity",
        stagger: {
          amount: 0.6,
          ease: "power2.inOut",
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
        ease: "power1.inOut",
        stagger: {
          amount: 0.6,
          ease: "power2.inOut",
        },
      },
      "-=1.4"
    )

    tl.play()
  }, [bgRefs, contentRefs, profileRefs, navRefs, iconRefs])

  return (
    <>
      <div className="absolute w-full min-h-screen xl:h-screen inset-0 bg-indigo-500 opacity-90 xl:opacity-0"></div>
      <svg
        className="absolute w-full min-h-screen xl:h-screen inset-0 opacity-0 xl:opacity-100"
        viewBox="0 0 1488 1050"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid slice"
        ref={bgRefs}
      >
        <path
          d="M0 0H1488L1169.5 517.5L1488 1050H0V0Z"
          fill="#5A67D8"
          fillOpacity="0.9"
        />
      </svg>
      <main className="w-full min-h-screen xl:h-screen relative flex flex-col z-20 text-white px-8 py-6">
        <HeroNav profileRefs={profileRefs} navRefs={navRefs} />

        <div
          className="w-100 flex-1 flex flex-col justify-center xl:w-3/4 2xl:w-5/6"
          ref={contentRefs}
        >
          <h1 className="font-Overlock font-black text-center xl:text-left  text-3xl sm:text-5xl lg:text-6xl 3xl:text-7xl w-100 2xl:w-5/6 mb-10 mt-10 leading-tight">
            Hey, my name is <span className="text-green-300">Simon!</span> I am
            a Front End Developer living in Edmonton, Alberta.
          </h1>
          <h3 className="font-Overlock text-center xl:text-left font-black  text-2xl sm:text-3xl lg:text-4xl 3xl:text-5xl">
            I currently work as a Web Developer at{" "}
            <span className="text-green-300">Beamdog.</span>
          </h3>
          <div className="flex sm:block flex-col justify-center sm:mt-20 mt-10 mb-10 mx-auto xl:mx-0">
            <button className="py-2 3xl:py-4 uppercase border-white font-Mada text-3xl md:text-4xl xl:text-3xl 3xl:text-5xl border-4 rounded-xl mx-auto my-2 sm:mr-8 w-44 sm:w-52 xl:w-44 3xl:w-64 swipe-hover">
              Projects
            </button>
            <button className="py-2 3xl:py-4 uppercase border-white font-Mada text-3xl md:text-4xl xl:text-3xl 3xl:text-5xl border-4 rounded-xl mx-auto my-2 sm:mr-0 w-44 sm:w-52 xl:w-44 3xl:w-64 swipe-hover">
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
