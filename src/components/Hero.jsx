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

      //   intro.from(".hero-label", {
      //     y: 20,
      //     opacity: 0,
      //     duration: 0.5,
      //     ease: "power2.out",
      //   });

      //   intro.from(
      //     ".hero-title",
      //     {
      //       y: 60,
      //       opacity: 0,
      //       duration: 0.8,
      //       ease: "power3.out",
      //     },
      //     "-=0.2",
      //   );

      //   intro.from(
      //     ".hero-subtitle",
      //     {
      //       y: 40,
      //       opacity: 0,
      //       duration: 0.7,
      //       ease: "power3.out",
      //     },
      //     "-=0.3",
      //   );

      //   intro.from(
      //     ".hero-stat",
      //     {
      //       y: 25,
      //       opacity: 0,
      //       duration: 0.5,
      //       stagger: 0.15,
      //       ease: "power2.out",
      //     },
      //     "-=0.2",
      //   );

      // Scroll animation
      const scrollAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=1500",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      scrollAnimation
        .to(".hero-label", {
          y: -60,
          opacity: 0,
          duration: 1,
        })
        .to(
          ".hero-title",
          {
            y: -120,
            opacity: 0,
            duration: 1,
          },
          "<",
        )
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
            stagger: 0.1,
          },
          "<",
        )
        .to(
          visualRef.current,
          {
            x: 180,
            y: 100,
            scale: 1.5,
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
        .to(".hero-intro", {
          opacity: 1,
          duration: 0.3,
        })
        .from(".hero-intro-small", {
          x: -30,
          opacity: 0,
          duration: 0.5,
        })
        .from(
          ".hero-intro-name",
          {
            x: -60,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
          },
          "-=0.2",
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
      className="relative h-screen overflow-hidden bg-[linear-gradient(135deg,#F4F1EB_0%,#EDE9F7_50%,#F6EDE8_100%)]"
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden px-6 py-8">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300/30 blur-[100px]" />
        <Header />

        <div className="flex flex-1 flex-col justify-center">
          <HeroHeading />

          <div className="hero-intro absolute left-6 top-1/2 -translate-y-1/2 opacity-0 md:left-12">
            <p className="hero-intro-small text-xs uppercase tracking-[0.4em] text-black/50">
              Introducing
            </p>

            <h2 className="hero-intro-name mt-4 text-6xl text-[#111111] uppercase leading-[0.8] tracking-[-0.05em] md:text-8xl">
              Rishabh
            </h2>

            <h2 className="hero-intro-name text-6xl text-[#6C5CE7] uppercase leading-[0.8] tracking-[-0.05em] md:text-8xl">
              Sahu
            </h2>
          </div>

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
