"use client";

import Link from "next/link";
import React from "react";
import { FiArrowRight, FiMail, FiServer, FiTarget } from "react-icons/fi";

const services = [
  {
    title: "Deliverability Consulting",
    desc: "Diagnose, repair, and optimize sender reputation to ensure your emails consistently hit the primary inbox, not spam.",
    icon: <FiMail className="w-6 h-6" />,
  },
  {
    title: "Infrastructure Setup",
    desc: "Complete done-for-you setup of domains, DKIM, DMARC, and sending rotation systems built for high-volume scale.",
    icon: <FiServer className="w-6 h-6" />,
  },
  {
    title: "Lead Generation",
    desc: "Proprietary scraping and verification systems providing you with fresh, high-intent B2B leads every single week.",
    icon: <FiTarget className="w-6 h-6" />,
  },
];

export default function Services() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Everything you need to <br /> scale cold outreach.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 cursor-default flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-900 mb-8 group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow">{s.desc}</p>

              <div className="mt-auto">
                <Link href="/services" className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-slate-600 transition-colors">
                  Learn more <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}