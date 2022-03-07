import gsap from "gsap";

export const heroSectionIn = () => {
  const TL = gsap.timeline();
  const hero_section = gsap.utils.selector("#hero_section");

  TL.set("#hero_section", { visibility: "visible" })
    .set(hero_section("[data-splitting]"), { visibility: "visible" })
    .to("#hero_section", {
      delay: 0.75,
      opacity: 1,
      duration: 1,
      ease: "circ.out",
    })
    .from(
      "#hero_section img",
      {
        scale: 0,
        duration: 2,
        ease: "expo.out",
      },
      0.5
    )
    .from(
      hero_section(".word, .whitespace"),
      {
        duration: 1,
        opacity: 0,
        yPercent: -30,
        stagger: 0.04,
        ease: "expo.out",
        // ease: "power2.out",
      },
      0.3
    );
};
