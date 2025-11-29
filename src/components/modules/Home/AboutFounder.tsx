/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function AboutFounder() {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(imgRef.current, {
            scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
            scale: 0.95, opacity: 0, duration: 1.2, ease: "power2.out"
        });
        gsap.from(contentRef.current, {
            scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
            y: 50, opacity: 0, duration: 1, ease: "power2.out", delay: 0.2
        });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        <div ref={imgRef} className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-0 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50">
          <Image
            src="/founder.jpg" 
            alt="Alamin Islam"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="font-bold text-xl">Alamin Islam</p>
            <p className="text-slate-200 text-sm">Cold Email Architect</p>
          </div>
        </div>

        <div ref={contentRef}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
            The strategy behind <br /> the infrastructure.
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-sans">
            "Most companies fail at cold outreach not because of bad copy, but because of broken infrastructure. I've spent the last 7 years engineering systems that guarantee deliverability."
          </p>
          
          <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                  <h4 className="text-3xl font-bold text-slate-900">200+</h4>
                  <p className="text-sm text-slate-500 mt-1">Companies Scaled</p>
              </div>
              <div>
                  <h4 className="text-3xl font-bold text-slate-900">7 Years</h4>
                  <p className="text-sm text-slate-500 mt-1">Industry Experience</p>
              </div>
          </div>

          <Link
            href="/booking"
            className="group inline-flex items-center gap-2 text-slate-900 font-semibold border-b border-slate-900 pb-1 hover:text-slate-600 hover:border-slate-600 transition-all"
          >
            Book a call <FiArrowUpRight className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}