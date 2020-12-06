import React, { useRef } from "react"
import SEO from "../components/seo"
import Background from "../home/animated-bg"
import Hero from "../home/hero"

const IndexPage = () => {
  const iconRefs = useRef([])
  const navRefs = useRef([])
  const profileRefs = useRef(null)
  const contentRefs = useRef(null)
  const bgRefs = useRef(null)

  return (
    <div className="w-full min-h-screen xl:h-screen relative">
      <SEO title="Home" />
      <Background />
      <Hero
        bgRefs={bgRefs}
        contentRefs={contentRefs}
        profileRefs={profileRefs}
        navRefs={navRefs}
        iconRefs={iconRefs}
      />
    </div>
  )
}

export default IndexPage
