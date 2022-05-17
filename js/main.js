// Accordion FAQ Logic
// Add the accordion-bottomBorder class to all opened accordions

// faqQuestion1 = document.getElementById("#faqQuestion1");
// // faqAnswer1 = document.getElementById("#faqAnswer1");
// faqQuestion2 = document.getElementById("#faqQuestion2").addEventListener("click", (e) => {....});
// faqAnswer2 = document.getElementById("#faqAnswer2");
// // faqQuestion3 = document.getElementById("#faqQuestion3");
// // faqAnswer3 = document.getElementById("#faqAnswer3");
// // faqQuestion4 = document.getElementById("#faqQuestion4");
// // faqAnswer4 = document.getElementById("#faqAnswer4");
// // faqQuestion5 = document.getElementById("#faqQuestion5");
// // faqAnswer5 = document.getElementById("#faqAnswer5");
// // faqQuestion6 = document.getElementById("#faqQuestion6");
// // faqAnswer6 = document.getElementById("#faqAnswer6");
// // faqQuestion7 = document.getElementById("#faqQuestion7");
// // faqAnswer7 = document.getElementById("#faqAnswer7");

// const toggleFAQAnswer = (e) => {
//   if (answerID.className.indexOf("block") == -1) {
//     answerID.className + "block";
//     answerID.previousElementSibling.className + "border-b-2";
//   } else {
//     answerID.className = answerID.className.replace("block", "hidden");
//     answerID.previousElementSibling.className =
//       answerID.previousElementSibling.className.replace("border-b-2", "");
//   }
// };
// document
//   .querySelectorAll(".faqBox")
//   .addEventListener("click", function(event){...});

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

  // Reveal specs one after another
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
  });

  // Reveal dashed boxes one after another
  ScrollTrigger.batch(["#dashedBox1", "#dashedBox2", "#dashedBox3"], {
    // interval: 0.1, // time window (in seconds) for batching to occur.
    // batchMax: 3,   // maximum batch size (targets)
    onEnter: (batch) =>
      gsap.from(batch, {
        autoAlpha: 0,
        xPercent: -10,
        // scale: 3,
        duration: 0.3,
        delay: 0.3,
        // ease: "power1.in",
        stagger: 0.1,
        pin: true,
      }),
  });

  // Reveal popup menus over hello world window one after another

  gsap.from(["#popUp1"], {
    autoAlpha: 0,
    xPercent: 10,
    duration: 0.2,

    scrollTrigger: {
      trigger: "#browserPreview",
      start: "top bottom", //top of trigger element (#intro in this case) is at the top of the viewport
      end: "top top",
      scrub: true,
    },
  });

  gsap.from("#popUp2", {
    autoAlpha: 0,
    xPercent: -10,

    scrollTrigger: {
      trigger: "#browserPreview",
      start: "top bottom", //top of trigger element (#intro in this case) is at the top of the viewport
      end: "top top",
      scrub: true,
    },
  });

  ScrollTrigger.batch(["#windowFromRight", "#windowFromLeft", ".featureBox"], {
    // interval: 0.1, // time window (in seconds) for batching to occur.
    // batchMax: 3,   // maximum batch size (targets)
    onEnter: (batch) =>
      gsap.from(batch, {
        autoAlpha: 0,
        xPercent: -5,
        // scale: 3,
        duration: 0.3,
        delay: 0.3,
        // ease: "power1.in",
        stagger: 0.1,
        pin: true,
      }),
  });
}

window.addEventListener("load", function () {
  init();
});
