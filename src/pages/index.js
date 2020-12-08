import React, { useRef, useState } from "react"
import SEO from "../components/seo"
import loadable from "@loadable/component"
import { navigate } from "gatsby"
import gsap from "gsap"
import Background from "../home/animated-bg"
const Hero = loadable(() => import("../home/hero"))

// @refresh reset

const IndexPage = () => {
  const iconRefs = useRef([])
  const navRefs = useRef([])
  const profileRefs = useRef(null)
  const contentRefs = useRef(null)
  const bgRefs = useRef(null)
  const revealRefs = useRef([])
  const heroRefs = useRef(null)
  const [pause, setPause] = useState(false)

  const bgAdmin = gsap.fromTo(
    revealRefs.current,
    {
      opacity: 0,
      scale: 0.1,
      transformOrigin: "center",
    },
    {
      opacity: 1,
      scale: 1,
      duration: 5,
      transformOrigin: "center",
      ease: "slow(0.7, 0.7, false)",
      paused: true,
      stagger: {
        grid: "auto",
        from: "random",
        amount: 10,
        repeat: -1,
        yoyo: true,
        ease: "power3.inOut",
      },
    }
  )

  const animateRedirect = (event, location) => {
    event.preventDefault()
    let tl = gsap.timeline({ paused: true })

    tl.to(heroRefs.current, {
      opacity: 0,
      duration: 1,
    })

    const bigCicles = revealRefs.current.filter(
      c => c.attributes.r.nodeValue === "43.89"
    )
    const randIndex = Math.floor(Math.random() * bigCicles.length)
    const randomCircle = bigCicles[randIndex]

    const restCicles = revealRefs.current.filter((_, i) => i !== randIndex)
    tl.set(revealRefs.current, {
      opacity: 0,
    })
    tl.to(restCicles, {
      opacity: 0,
      scale: 0,
      duration: 0.3,
    })

    tl.to(randomCircle, {
      scale: 100,
      duration: 2,
      opacity: 100,
      fill: "#6366F1",
      onComplete: () => {
        navigate(location)
      },
    })
    setPause(true)
    bgAdmin.pause(0)
    tl.play()
  }

  return (
    <div className="w-full min-h-screen xl:h-screen relative">
      <SEO title="Home" />
      <Background
        revealRefs={revealRefs}
        bgAdmin={() => bgAdmin.play()}
        pause={pause}
      />
      <div ref={heroRefs}>
        <Hero
          bgRefs={bgRefs}
          contentRefs={contentRefs}
          profileRefs={profileRefs}
          navRefs={navRefs}
          iconRefs={iconRefs}
          animateRedirect={animateRedirect}
        />
      </div>
    </div>
  )
}

export default IndexPage
