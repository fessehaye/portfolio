;(function () {
  document.body.classList.remove("hidden")
  const tl = gsap.timeline({ paused: true })

  tl.from("nav", {
    opacity: 0,
    translateY: -20,
    duration: 0.3,
    transformOrigin: "center",
    ease: "power2.inOut",
  })

  tl.from("article", {
    opacity: 0,
    translateY: -20,
    duration: 0.3,
    transformOrigin: "center",
    ease: "power2.inOut",
    stagger: 0.2,
    clearProps: "scale",
  })

  tl.play()

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

  let tl_page_home, tl_page_other

  window.addEventListener("pagehide", function (event) {
    if (event.persisted === true) {
      if (tl_page_home && tl_page_home.progress() === 1) {
        tl_page_home.seek(0)
        tl_page_home.pause(0)
        gsap.set("body > div", { background: "#6366F1" })
      }
      if (tl_page_other && tl_page_other.progress() === 1) {
        tl_page_other.seek(0)
        tl_page_other.pause(0)
      }
    }
  })

  document.querySelector(".home-link").addEventListener("click", event => {
    event.preventDefault()

    tl_page_home = gsap.timeline({ paused: true })
    const mediaQuery = window.matchMedia("(min-width: 1280px)")

    tl_page_home.to("main,nav", {
      duration: 0.3,
      opacity: 0,
    })

    tl_page_home.to("body > div", {
      duration: mediaQuery.matches ? 0.3 : 0,
      background: mediaQuery.matches ? "#ffffff" : "#6366F1",
      onComplete: () => {
        window.location.href = event.target.href
      },
    })

    tl_page_home.play()
  })

  const allLinks = document.querySelectorAll(".mobile-nav,.nav-link")

  for (const link of allLinks) {
    link.addEventListener("click", event => {
      event.preventDefault()

      tl_page_other = gsap.timeline({ paused: true })

      tl_page_other.to("article,nav", {
        duration: 0.5,
        opacity: 0,
        onComplete: () => {
          window.location.href = event.target.href
        },
      })

      tl_page_other.play()
    })
  }
})()
