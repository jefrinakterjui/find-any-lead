"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: 200, suffix: "k+", label: "Emails Sent" },
  { value: 98, suffix: "%", label: "Inbox Rate" },
  { value: 5000, suffix: "+", label: "Qualified Leads" },
  { value: 7, suffix: "M+", label: "Revenue Generated" },
];

export default function Counters() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".metric-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      metrics.forEach((metric, index) => {
        const element = itemsRef.current[index];
        if (!element) return;

        const counter = { val: 0 };

        gsap.to(counter, {
          val: metric.value,
          duration: 2.5,
          ease: "power2.out", 
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
          onUpdate: () => {
            element.textContent = Math.ceil(counter.val).toLocaleString("en-US");
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 border-y border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="metric-item flex flex-col items-center justify-center text-center"
            >
              <div className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 block mb-2 tabular-nums">
                <span ref={(el) => { itemsRef.current[i] = el; }}>
                  0
                </span>
                {m.suffix}
              </div>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}