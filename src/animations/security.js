import gsap from "gsap";

export const securityIn = () => {
  const TL = gsap.timeline();
  TL.set("#security", { visibility: "visible" }).to("#security", {
    delay: 1.2,
    opacity: 1,
    duration: 1,
    ease: "circ.out",
  });
};

export const securityOut = () => {
  const TL = gsap.timeline();
  TL.to("#security", {
    opacity: 0,
    duration: 0.75,
    ease: "circ.in",
  }).set("#security", { visibility: "hidden" });
};
