;(function () {

  const tl_nav = gsap.timeline({ paused: true })

  tl_nav.to("#nav-item", {
    scale: 1,
    duration: 0.3,
    transformOrigin: "right bottom",
    ease: "power2.inOut",
  })

  document.querySelector("#nav").addEventListener("click", event => {
    if (document.querySelector("#open").classList.contains("hidden")) {
      document.querySelector("#open").classList.remove("hidden")
    } else {
      document.querySelector("#open").classList.add("hidden")
    }

    if (document.querySelector("#close").classList.contains("hidden")) {
      document.querySelector("#close").classList.remove("hidden")
      tl_nav.play(0)
    } else {
      document.querySelector("#close").classList.add("hidden")
      tl_nav.reverse(0)
    }
  })

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
