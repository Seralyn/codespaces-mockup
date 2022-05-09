// ----------- SCROLL ANIMATION LOGIC -------------
gsap.registerPlugin(ScrollTrigger);

function init() {
  // ANIMATE SECTION TWO
  gsap.from(["#sec2Title", "#sec2Para"], {
    autoAlpha: 0,
    xPercent: 10,
    duration: 0.2,

    scrollTrigger: {
      trigger: "#fullPowerVSC",
      start: "top bottom", //top of trigger element (#intro in this case) is at the top of the viewport
      end: "top top-=300",
      scrub: true,
    },
  });

  gsap.from("#browserIcons", {
    autoAlpha: 0,
    xPercent: -10,

    scrollTrigger: {
      trigger: "#fullPowerVSC",
      start: "top bottom", //top of trigger element (#intro in this case) is at the top of the viewport
      end: "top top",
      scrub: true,
    },
  });

  gsap.from("#terminalImage", {
    autoAlpha: 0,
    xPercent: -5,
    duration: 0.2,
    // ease: "expo",

    scrollTrigger: {
      trigger: "#fullPowerVSC",
      start: "top center", //top of trigger element (#intro in this case) is at the top of the viewport
      end: "top center-=200",
      scrub: true,
    },
  });

  // ANIMATE SECTION THREE
  gsap.from(["#sec3Title", "#sec3Para"], {
    autoAlpha: 0,
    xPercent: 10,
    duration: 0.1,

    scrollTrigger: {
      trigger: "#fasterThan",
      start: "top bottom", //top of trigger element (#intro in this case) is at the top of the viewport
      end: "top top-=100",
      scrub: true,
    },
  });

  //   gsap.from(["#specCol1", "#specCol2", "specCol3"], {
  //     autoAlpha: 0,
  //     xPercent: -10,
  //     duration: 0.4,
  //     stagger: 0.2,

  //     scrollTrigger: {
  //       trigger: "#fasterThan",
  //       start: "top bottom", //top of trigger element (#intro in this case) is at the top of the viewport
  //       end: "top top-=300",
  //       scrub: true,
  //     },
  //   });

  // PIN WEBSITE THUMBS AND THEN ENLARGE AND FADE THEM
  ScrollTrigger.batch(["#specCol1", "#specCol2", "#specCol3"], {
    // interval: 0.1, // time window (in seconds) for batching to occur.
    // batchMax: 3,   // maximum batch size (targets)
    onEnter: (batch) =>
      gsap.from(batch, {
        autoAlpha: 0,
        xPercent: -10,
        // scale: 3,
        duration: 0.5,
        delay: 0.2,
        ease: "power1.in",
        // stagger: 0.1,
        pin: true,
      }),
    // also onLeave, onEnterBack, and onLeaveBack
    // also most normal ScrollTrigger values like start, end, etc.
  });
}

window.addEventListener("load", function () {
  init();
});
