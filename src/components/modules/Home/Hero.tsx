"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        { y: 50, opacity: 0, filter: "blur(10px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power3.out" }
      )
        .fromTo(
          textRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          btnRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          videoRef.current,
          { scale: 0.9, opacity: 0, borderRadius: "2rem" },
          { scale: 1, opacity: 1, borderRadius: "1rem", duration: 1.2, ease: "power2.inOut" },
          "-=0.8"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center bg-[#FAFAFA] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white -z-10" />
      
      <div className="max-w-screen-xl mx-auto w-full text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-semibold tracking-wide text-slate-600 uppercase">Accepting New Partners</span>
        </div>

        <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[0.95]">
          Predictable pipeline <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-700 to-primary">
            with cold email.
          </span>
        </h1>

        <p ref={textRef} className="mt-8 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          We engineer data-driven outreach infrastructures that guarantee deliverability and fill your calendar with qualified sales conversations.
        </p>

        <div ref={btnRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/booking"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
          >
            Start Scaling Now
            <FiArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300"
          >
            View Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}