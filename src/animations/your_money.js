import gsap from "gsap";

export const yourMoneyIn = () => {
  const TL = gsap.timeline();
  const your_money = gsap.utils.selector("#your_money");
  TL.set("#your_money", { visibility: "visible" })
    .set(your_money("[data-splitting]"), { visibility: "visible" })
    .to("#your_money", {
      delay: 0.75,
      opacity: 1,
      duration: 1,
      ease: "circ.out",
    })
    .from(
      your_money(".inputContainer, .top_section img"),
      {
        opacity: 0,
        duration: 1,
        stagger: 0.05,
      },
      1
    )
    .from(
      your_money(".word, .whitespace"),
      {
        duration: 0.5,
        opacity: 0,
        yPercent: 75,
        stagger: 0.01,
        ease: "power2.out",
      },
      1
    )
    .from(
      your_money(".patners img"),
      {
        opacity: 0,
        duration: 0.5,
        stagger: 0.0025,
      },
      1.5
    );
};

export const yourMoneyOut = () => {
  const TL = gsap.timeline();
  const your_money = gsap.utils.selector("#your_money");
  TL.to("#your_money", {
    opacity: 0,
    duration: 0.75,
    ease: "circ.in",
  })
    .set("#your_money", { visibility: "hidden" })
    .set(your_money("[data-splitting]"), { visibility: "hidden" });
};
