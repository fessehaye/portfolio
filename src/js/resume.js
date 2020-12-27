;(function () {
  window.addEventListener("unload", function () {})
  document.body.classList.remove("hidden")
  const tl = gsap.timeline({ paused: true })

  tl.from("nav", {
    opacity: 0,
    translateY: -20,
    duration: 0.3,
    transformOrigin: "center",
    ease: "power2.inOut",
  })

  tl.from("main > div > *", {
    opacity: 0,
    translateY: -20,
    duration: 0.3,
    transformOrigin: "center",
    ease: "power2.inOut",
    stagger: 0.2,
    clearProps: "scale",
  })

  tl.play()

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

  document.querySelector(".home-link").addEventListener("click", event => {
    event.preventDefault()

    let tl_page = gsap.timeline({ paused: true })
    const mediaQuery = window.matchMedia("(min-width: 1280px)")

    tl_page.to("main,nav", {
      duration: 0.3,
      opacity: 0,
    })

    tl_page.to("body > div", {
      duration: mediaQuery.matches ? 0.3 : 0,
      background: mediaQuery.matches ? "#ffffff" : "#6366F1",
      onComplete: () => {
        window.location.href = event.target.href
      },
    })

    tl_page.play()
  })

  const allLinks = document.querySelectorAll(".mobile-nav,.nav-ref")

  for (const link of allLinks) {
    link.addEventListener("click", event => {
      event.preventDefault()

      let tl_page = gsap.timeline({ paused: true })

      tl_page.to("main > div > *,nav", {
        duration: 0.5,
        opacity: 0,
        onComplete: () => {
          window.location.href = event.target.href
        },
      })

      tl_page.play()
    })
  }
})()
