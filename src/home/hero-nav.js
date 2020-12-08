import React, { useState, useRef, useEffect } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import gsap from "gsap"

const HeroNav = ({ profileRefs, navRefs }) => {
  const data = useStaticQuery(graphql`
    query {
      profilePic: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const mobileRefs = useRef(null)
  const mobileNavRefs = useRef([])

  let tl = gsap.timeline({ paused: true })

  if (mobileRefs.current) {
    tl.fromTo(
      mobileRefs.current,
      {
        duration: 0.5,
        opacity: 0,
        display: "none",
        clipPath: "circle(0% at 100% 0%)",
        ease: "power3.out",
      },
      {
        duration: 0.5,
        opacity: 100,
        display: "flex",
        clipPath: "circle(170% at 100% 0%)",
        ease: "power3.out",
      }
    )

    tl.from(mobileNavRefs.current, {
      duration: 0.3,
      opacity: 0,
      translateY: -15,
      ease: "power3.out",
      stagger: 0.2,
    })
  }

  return (
    <>
      <nav className="flex mt-1 items-center 2xl:w-10/12 3xl:w-11/12">
        <Img
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-white border-4 profile-pic"
          fluid={data.profilePic.childImageSharp.fluid || null}
          alt="profile-pic"
          ref={profileRefs}
        />
        <div className="sm:flex justify-between text-white lg:text-gray-200 ml-auto hidden ">
          <span
            ref={e => (navRefs.current[0] = e)}
            className="font-Mada font-bold mx-4 text-3xl 3xl:text-4xl hover:text-white transition hero-link cursor-pointer"
          >
            About
          </span>
          <span
            ref={e => (navRefs.current[1] = e)}
            className="font-Mada font-bold mx-4 text-3xl 3xl:text-4xl hover:text-white transition hero-link cursor-pointer"
          >
            Projects
          </span>
          <span
            ref={e => (navRefs.current[2] = e)}
            className="font-Mada font-bold mx-4 text-3xl 3xl:text-4xl hover:text-white transition hero-link cursor-pointer"
          >
            Resume
          </span>
        </div>
        <div className="sm:hidden flex ml-auto">
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20"
            fill="currentColor"
            viewBox="0 0 20 20"
            onClick={() => {
              tl.play(0)
            }}
            ref={e => (navRefs.current[3] = e)}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </nav>

      <nav
        className="absolute w-full min-h-screen inset-0 z-30 bg-green-500 hidden flex-col items-center pt-28 opacity-0"
        ref={mobileRefs}
      >
        <svg
          className="w-16 h-16 sm:w-20 sm:h-20 absolute inset-7 left-auto"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            tl.reverse(0)
          }}
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>

        <button
          className="font-Mada font-bold text-4xl bg-white rounded-lg text-green-500 py-4 w-5/6 m-4"
          ref={e => (mobileNavRefs.current[0] = e)}
        >
          About
        </button>
        <button
          className="font-Mada font-bold text-4xl bg-white rounded-lg text-green-500 py-4 w-5/6 m-4"
          ref={e => (mobileNavRefs.current[1] = e)}
        >
          Projects
        </button>
        <button
          className="font-Mada font-bold text-4xl bg-white rounded-lg text-green-500 py-4 w-5/6 m-4"
          ref={e => (mobileNavRefs.current[2] = e)}
        >
          Resume
        </button>
      </nav>
    </>
  )
}

export default HeroNav
