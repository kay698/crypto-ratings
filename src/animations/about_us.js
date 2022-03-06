import gsap from "gsap";

export const aboutUsIn = () => {
  const TL = gsap.timeline();
  const about_us = gsap.utils.selector("#about_us");
  TL.set("#about_us", { visibility: "visible" })
    .set(about_us("[data-splitting]"), { visibility: "visible" })
    .to("#about_us", {
      delay: 0,
      opacity: 1,
      duration: 1,
      ease: "circ.out",
    })
    .from(
      "#about_us img",
      {
        scale: 0,
        duration: 2,
        ease: "expo.out",
      },
      0
    )
    .from(
      about_us(".word, .whitespace"),
      {
        duration: 2,
        opacity: 0,
        yPercent: -30,
        stagger: 0.08,
        ease: "expo.out",
        // ease: "power2.out",
      },
      0.3
    );
};
