import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const comingSoonIn = () => {
  gsap.registerPlugin(ScrollTrigger);
  const coming_soon = gsap.utils.selector("#coming_soon");

  const TL = gsap.timeline({
    scrollTrigger: {
      trigger: "#coming_soon",
      start: "top 70%",
    },
  });
  TL.set("#coming_soon", { visibility: "visible" })
    .set(coming_soon("[data-splitting]"), { visibility: "visible" })
    .to("#coming_soon", {
      delay: 0.75,
      opacity: 1,
      duration: 1,
      ease: "circ.out",
    })
    .from(
      "#coming_soon img",
      {
        scale: 1.5,
        duration: 2,
        ease: "expo.out",
      },
      0.3
    );
};
