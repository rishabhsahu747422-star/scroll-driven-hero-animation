import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: "92%",
    text: "Customer satisfaction",
  },
  {
    value: "78%",
    text: "Conversion increase",
  },
  {
    value: "64%",
    text: "Higher engagement",
  },
];

const Hero = () => {
  const heroRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Page load animation
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
        {/* Header */}
        <header className="flex justify-between">
          <p className="text-sm font-semibold tracking-[0.3em]">FIZZ/26</p>

          <p className="text-xs uppercase tracking-[0.2em] opacity-50">
            Scroll to explore
          </p>
        </header>

        {/* Hero */}
        <div className="flex flex-1 flex-col justify-center">
          <div className="text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] opacity-50">
              Digital experience
            </p>

            <h1 className="hero-title text-[12vw] font-black uppercase leading-[0.8] tracking-[-0.06em]">
              WELCOME
            </h1>

            <h2 className="hero-subtitle mt-3 text-[8vw] font-black uppercase leading-[0.8] tracking-[0.08em]">
              ITZ FIZZ
            </h2>
          </div>

          {/* Visual */}
          <div className="flex h-[300px] items-center justify-center">
            <div
              ref={visualRef}
              className="flex h-48 w-48 items-center justify-center rounded-full bg-black shadow-2xl"
            >
              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/20">
                <span className="text-xs tracking-[0.3em] text-white">
                  FIZZ
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 border-t border-black/10 pt-6">
            {stats.map((stat) => (
              <div key={stat.value} className="hero-stat">
                <p className="text-3xl font-bold md:text-5xl">{stat.value}</p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.15em] opacity-50">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex justify-between border-t border-black/10 pt-4 text-[10px] uppercase tracking-[0.2em] opacity-40">
          <span>Creative technology</span>
          <span>01 — 04</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
