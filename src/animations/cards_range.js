import gsap from "gsap";

export const cardsRangeIn = () => {
  const TL = gsap.timeline();
  const cards_range = gsap.utils.selector("#cards_range");
  TL.set("#cards_range", { visibility: "visible" })
    .set(cards_range("[data-splitting]"), { visibility: "visible" })
    .to("#cards_range", {
      delay: 0.35,
      opacity: 1,
      duration: 1,
      ease: "circ.out",
    })
    .from("#cards_range video", {
      ease: "expo.out",
      stagger: 0.4,
      duration: 1.25,
      clipPath: "inset(0% 100% 0% 0%)",
    })
    .from(
      cards_range(".davidoText, .davidoTextMobile"),
      {
        opacity: 0,
      },
      window.innerWidth > 800 ? "-=1.25" : 1
    )
    .from(
      cards_range(".word, .whitespace"),
      {
        duration: 0.5,
        opacity: 0,
        yPercent: 75,
        stagger: 0.005,
        ease: "power2.out",
      },
      1
    );
};

export const cardsRangeOut = () => {
  const TL = gsap.timeline();
  const cards_range = gsap.utils.selector("#cards_range");
  TL.to("#cards_range", {
    opacity: 0,
    duration: 0.75,
    ease: "circ.in",
  })
    .set("#cards_range", { visibility: "hidden" })
    .set(cards_range("[data-splitting]"), { visibility: "hidden" });
};
