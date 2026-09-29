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
      const intro = gsap.timeline();

      intro.from(".hero-label", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      intro.from(
        ".hero-title",
        {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.2",
      );

      intro.from(
        ".hero-subtitle",
        {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.3",
      );

      intro.from(
        ".hero-stat",
        {
          y: 25,
          opacity: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.2",
      );
      // Intro animation
      //   gsap.from(".hero-title", {
      //     y: 60,
      //     opacity: 0,
      //     duration: 1,
      //     ease: "power3.out",
      //   });

      //   gsap.from(".hero-subtitle", {
      //     y: 40,
      //     opacity: 0,
      //     duration: 0.8,
      //     delay: 0.2,
      //   });

      //   gsap.from(".hero-stat", {
      //     y: 30,
      //     opacity: 0,
      //     duration: 0.6,
      //     stagger: 0.15,
      //     delay: 0.4,
      //   });

      // Scroll animation
      const scrollAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      scrollAnimation
        .to(".hero-title", {
          y: -120,
          opacity: 0,
          duration: 1,
        })
        .to(
          ".hero-subtitle",
          {
            y: -80,
            opacity: 0,
            duration: 1,
          },
          "<",
        )
        .to(
          ".hero-stat",
          {
            y: 70,
            opacity: 0,
            duration: 1,
          },
          "<",
        )
        .to(
          visualRef.current,
          {
            x: 180,
            y: 120,
            scale: 1.7,
            rotation: 360,
            duration: 2,
          },
          "<",
        )
        .to(
          ".hero-ring",
          {
            rotation: -180,
            duration: 2,
          },
          "<",
        )
        .to(
          ".hero-orbit-1",
          {
            x: 80,
            y: -50,
            rotation: 180,
            duration: 2,
          },
          "<",
        )
        .to(
          ".hero-orbit-2",
          {
            x: -60,
            y: 70,
            rotation: -180,
            duration: 2,
          },
          "<",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-[200vh] overflow-hidden bg-[#f4f1eb]"
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden px-6 py-8">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300/30 blur-[100px]" />
        <Header />

        <div className="flex flex-1 flex-col justify-center">
          <HeroHeading />

          <HeroVisual visualRef={visualRef} />

          <Stats />
        </div>

        <div className="flex items-center justify-between border-t border-black/10 pt-4 text-[10px] uppercase tracking-[0.2em] opacity-40">
          <span>Creative technology</span>

          <div className="flex items-center gap-3">
            <span>Scroll</span>
            <span className="h-px w-8 bg-black/30" />
            <span>01 — 04</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
