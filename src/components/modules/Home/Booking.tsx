/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiClock, FiCalendar } from "react-icons/fi";
import { CalendlyWidgetProps } from "./CalendlyWidget";

const CalendlyWidget = dynamic<CalendlyWidgetProps>(
  () => import("./CalendlyWidget"),
  { ssr: false }
);

gsap.registerPlugin(ScrollTrigger);

export default function Booking() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  if (!mounted) return null;

  return (
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24">
        
        <div ref={leftRef} className="space-y-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-slate-500" />
              <span className="text-xs font-semibold tracking-wide text-slate-600 uppercase">Discovery Call</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              Stop guessing. <br /> Start scaling.
            </h2>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-md">
              Schedule a 30-minute strategy session to audit your current infrastructure and map out a predictable revenue engine.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900">
                <FiClock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">30-Minute Audit</h4>
                <p className="mt-1 text-slate-500 leading-relaxed">We'll review your domains, deliverability score, and current outreach performance.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900">
                <FiCalendar className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">Actionable Roadmap</h4>
                <p className="mt-1 text-slate-500 leading-relaxed">Leave with a clear step-by-step plan to fix your deliverability and scale volume.</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100">
            <p className="text-sm font-semibold text-slate-900 mb-4">Trusted by founders from</p>
            <div className="flex items-center gap-6 opacity-40 grayscale">
               <div className="h-6 w-20 bg-slate-400 rounded-sm" />
               <div className="h-6 w-20 bg-slate-400 rounded-sm" />
               <div className="h-6 w-20 bg-slate-400 rounded-sm" />
            </div>
          </div>
        </div>

        <div ref={rightRef} className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-3xl transform rotate-3 scale-105 -z-10" />
            <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden h-[700px]">
                 <CalendlyWidget 
                    url="https://calendly.com/jefrin-jui-dev/30min" 
                    height="100%"
                 />
            </div>
        </div>

      </div>
    </section>
  );
}