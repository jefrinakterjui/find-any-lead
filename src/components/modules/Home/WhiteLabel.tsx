"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCheckCircle } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function WhiteLabelSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        x: -50, opacity: 0, duration: 1, ease: "power3.out"
      });
      gsap.from(rightRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        x: 50, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const benefits = [
    "100% White-label Reporting",
    "Silent Backend Fulfillment",
    "Scalable Infrastructure",
    "Agency Partner Rates"
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <div ref={leftRef}>
          <div className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-bold tracking-widest uppercase mb-8">
            Agency Partnership
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            Scale your agency <br /> without the overhead.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            We operate as your silent backend partner, handling the complex technical infrastructure of cold email while you maintain client relationships and credit.
          </p>

          <div className="space-y-4">
            {benefits.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <FiCheckCircle className="text-indigo-400 text-xl flex-shrink-0" />
                <span className="text-lg font-medium text-slate-200">{item}</span>
              </div>
            ))}
          </div>
          
          <button className="mt-12 px-8 py-4 bg-white text-slate-950 rounded-full font-bold hover:bg-slate-200 transition-colors">
            Become a Partner
          </button>
        </div>

        <div ref={rightRef} className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm p-8">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-500" />
                <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-6">
                        <div>
                            <p className="text-xs text-slate-400 uppercase tracking-wider">Client Revenue</p>
                            <p className="text-2xl font-bold mt-1">$124,500</p>
                        </div>
                        <div className="px-3 py-1 rounded bg-green-500/20 text-green-400 text-sm font-medium">
                            +12.5%
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-500 w-3/4" />
                        </div>
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-1/2" />
                        </div>
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-slate-500 w-2/3" />
                        </div>
                    </div>
                    <div className="pt-4 flex gap-4">
                        <div className="h-10 w-10 rounded-full bg-white/10" />
                        <div className="h-10 w-10 rounded-full bg-white/10" />
                        <div className="h-10 w-10 rounded-full bg-white/10" />
                    </div>
                </div>
            </div>
             <div className="absolute -z-10 top-10 -right-10 w-full h-full rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm" />
        </div>
      </div>
    </section>
  );
}