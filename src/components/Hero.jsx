import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./Header";
import HeroHeading from "./HeroHeading";
import HeroVisual from "./ScrollVisual";
import Stats from "./Stats";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animation
      gsap.from(".hero-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
      });

      gsap.from(".hero-stat", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        delay: 0.4,
      });

      // Scroll animation
      const scrollAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      scrollAnimation
        .to(".hero-title", {
          y: -100,
          opacity: 0,
          duration: 1,
        })
        .to(
          ".hero-subtitle",
          {
            y: -70,
            opacity: 0,
            duration: 1,
          },
          "<",
        )
        .to(
          visualRef.current,
          {
            y: 220,
            scale: 1.6,
            rotation: 360,
            duration: 2,
          },
          "<",
        )
        .to(
          ".hero-stat",
          {
            y: 80,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
          },
          "<",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[200vh] bg-[#f4f1eb]">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden px-6 py-8">
        <Header />

        <div className="flex flex-1 flex-col justify-center">
          <HeroHeading />

          <HeroVisual visualRef={visualRef} />

          <Stats />
        </div>

        <div className="flex justify-between border-t border-black/10 pt-4 text-[10px] uppercase tracking-[0.2em] opacity-40">
          <span>Creative technology</span>
          <span>01 — 04</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
