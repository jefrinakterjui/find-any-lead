"use client";

import React, { useRef, useEffect, useState } from "react";
import { Mail, Map, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Email Deliverability Consulting + Management",
    slug: "email-deliverability",
    desc: "Having issues staying out of spam? Our team can diagnose why and help fix any issues.",
    icon: <Mail className="w-8 h-8" />,
    color: "text-slate-900",
    bg: "bg-slate-100",
  },
  {
    title: "Email Infrastructure Setup + Management",
    slug: "email-infrastructure",
    desc: "We’ll set up a system within your business that covers the A-Z of email, including tech, list building, scripts, & appointment setting.",
    icon: <Map className="w-8 h-8" />,
    color: "text-slate-900",
    bg: "bg-slate-100",
  },
  {
    title: "Lead List Generation Systems Setup",
    slug: "lead-list-generation",
    desc: "We’ll set up the systems and processes necessary to build high quality lists in-house.",
    icon: <Users className="w-8 h-8" />,
    color: "text-slate-900",
    bg: "bg-slate-100",
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-bold tracking-widest text-slate-600 uppercase">
              Core Services
            </span>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
            Everything you need to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-700 to-primary">
            dominate the inbox.
          </span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((s, i) => (
            <Link
              key={i}
              href={`/services/${s.slug}`}
              className={`service-card group flex flex-col items-center text-center p-10 rounded-[2rem] bg-white border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/60 hover:-translate-y-2 hover:border-slate-200`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <div
                className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${s.bg} ${s.color}`}
              >
                {s.icon}
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight leading-snug">
                {s.title}
              </h4>
              
              <p className="text-slate-500 text-base leading-relaxed mb-8">
                {s.desc}
              </p>

              <span className="mt-auto inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                Explore
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}