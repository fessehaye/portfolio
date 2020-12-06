import React, { useRef, lazy, Suspense } from "react"
import SEO from "../components/seo"
import Background from "../home/animated-bg"

const Hero = lazy(() => import("../home/hero"))

const renderLoader = () => <p>Loading</p>

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
      <Suspense fallback={renderLoader()}>
        <Hero
          bgRefs={bgRefs}
          contentRefs={contentRefs}
          profileRefs={profileRefs}
          navRefs={navRefs}
          iconRefs={iconRefs}
        />
      </Suspense>
    </div>
  )
}

export default IndexPage
