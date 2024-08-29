;(function () {

  const tl_mobile = gsap.timeline({ paused: true })

  tl_mobile.fromTo(
    ".mobile-ref",
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

  tl_mobile.from(".mobile-nav", {
    duration: 0.3,
    opacity: 0,
    translateY: -15,
    ease: "power3.out",
    stagger: 0.2,
  })

  document.querySelector(".breadcrumb").addEventListener("click", event => {
    tl_mobile.play(0)
  })

  document.querySelector(".mobile-close").addEventListener("click", event => {
    tl_mobile.reverse(0)
  })

})()
