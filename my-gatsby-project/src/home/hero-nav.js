import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

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

  return (
    <nav className="flex mt-1 items-center">
      <Img
        className="w-20 h-20 rounded-full border-white border-4 profile-pic"
        fluid={data.profilePic.childImageSharp.fluid || null}
        alt="profile-pic"
        ref={profileRefs}
      />
      <div className="flex justify-between text-gray-200 ml-auto">
        <span
          ref={e => (navRefs.current[0] = e)}
          className="font-Mada font-bold mx-4 text-2xl hover:text-white transition"
        >
          Projects
        </span>
        <span
          ref={e => (navRefs.current[1] = e)}
          className="font-Mada font-bold mx-4 text-2xl hover:text-white transition"
        >
          About
        </span>
        <span
          ref={e => (navRefs.current[2] = e)}
          className="font-Mada font-bold mx-4 text-2xl hover:text-white transition"
        >
          Resume
        </span>
      </div>
    </nav>
  )
}

export default HeroNav
