import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

export const testimonialsIn = () => {
  const TL = gsap.timeline();
  gsap.registerPlugin(CSSRulePlugin);
  const testimonials = gsap.utils.selector("#testimonials");
  TL.set("#testimonials", { visibility: "visible" })
    .set(testimonials("[data-splitting]"), { visibility: "visible" })
    .to("#testimonials", {
      delay: 0.5,
      opacity: 1,
      duration: 1,
      ease: "circ.out",
    })
    .from(".static_text > .word, .static_text > .whitespace", {
      duration: 1,
      opacity: 0,
      yPercent: 75,
      stagger: 0.025,
      ease: "power2.out",
    });
};

export const testimonialsOut = () => {
  const TL = gsap.timeline();
  const testimonials = gsap.utils.selector("#testimonials");
  TL.to("#testimonials", {
    opacity: 0,
    duration: 0.75,
    ease: "circ.in",
  })
    .set("#testimonials", { visibility: "hidden" })
    .set(testimonials("[data-splitting]"), { visibility: "visible" });
};
