(function () {
  var bgAdmin = gsap.fromTo(
    ".circle-bg > g > circle",
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
  );

  bgAdmin.play();

  let tl_bg = gsap.timeline({ paused: true });
  const mediaQuery = window.matchMedia("(min-width: 1280px)");
  tl_bg.from(".bg-ref", {
    opacity: 0,
    translateX: "-100%",
    duration: mediaQuery.matches ? 1 : 0,
    delay: 1,
    transformOrigin: "center",
  });

  tl_bg.fromTo(
    ".content-ref",
    {
      clipPath: "circle(0% at 0px 0px)",
    },
    {
      duration: 1,
      clipPath: "circle(200% at 0px 0px)",
      transformOrigin: "center",
      ease: "elastic.out(1, 0.3)",
    }
  );

  tl_bg.from(
    ".profile-pic",
    {
      opacity: 0,
      border: 0,
      duration: 1,
    },
    "-=1"
  );

  tl_bg.from(
    ".icon-ref",
    {
      opacity: 0,
      translateX: -20,
      duration: 0.4,
      transformOrigin: "center",
      ease: "power1.inOut",
      clearProps: "opacity",
      stagger: {
        amount: 0.8,
      },
    },
    "-=0.4"
  );

  tl_bg.from(
    ".nav-ref",
    {
      opacity: 0,
      translateX: -20,
      duration: 0.4,
      transformOrigin: "center",
      ease: "power1.inOut",
      stagger: {
        amount: 0.8,
      },
    },
    "-=1.4"
  );

  tl_bg.play();

  let tl_mobile = gsap.timeline({ paused: true });

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
  );

  tl_mobile.from(".mobile-nav", {
    duration: 0.3,
    opacity: 0,
    translateY: -15,
    ease: "power3.out",
    stagger: 0.2,
  });

  document.querySelector(".breadcrumb").addEventListener("click", (event) => {
    tl_mobile.play(0);
  });

  document.querySelector(".mobile-close").addEventListener("click", (event) => {
    tl_mobile.reverse(0);
  });

  let allLinks = document.querySelectorAll(".mobile-nav,.nav-ref,.swipe-hover");

  for (let index = 0; index < allLinks.length; index++) {
    allLinks[index].addEventListener("click", (event) => {
      event.preventDefault();
      bgAdmin.kill();
      let tl = gsap.timeline({ paused: true });

      tl.to(".hero-content", {
        opacity: 0,
        duration: 1,
      });
      const allCircles = Array.from(
        document.querySelectorAll(".circle-bg > g > circle")
      );
      const bigCicles = allCircles.filter(
        (c) => c.attributes.r.nodeValue === "43.89"
      );
      const randIndex = Math.floor(Math.random() * bigCicles.length);
      const randomCircle = bigCicles[randIndex];

      const restCicles = allCircles.filter((c) => c !== randomCircle);

      tl.to(restCicles, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
      });

      tl.to(randomCircle, {
        scale: 100,
        duration: 1,
        opacity: 100,
        fill: "#6366F1",
        onComplete: () => {
          window.location.href = event.target.href;
        },
      });

      tl.play();
    });
  }
})();
