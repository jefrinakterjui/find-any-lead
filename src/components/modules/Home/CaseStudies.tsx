"use client";

import React from "react";
import Link from "next/link";
import { FiArrowUpRight} from "react-icons/fi";

const cases = [
  {
    client: "TechFlow",
    category: "B2B SaaS",
    title: "Generating $1.2M in pipeline for a Series A Fintech",
    desc: "We restructured their entire sending infrastructure, warming up 50+ domains and implementing a relevance-based segmentation strategy that tripled their reply rates.",
    stats: [
      { label: "Pipeline Generated", value: "$1.2M" },
      { label: "Reply Rate", value: "12.4%" },
      { label: "Meetings Booked", value: "145+" },
    ],
    tags: ["Infrastructure", "Copywriting", "Lead Gen"],
  },
  {
    client: "GrowthGear",
    category: "Marketing Agency",
    title: "Scaling outreach volume by 500% without spam flags",
    desc: "GrowthGear was hitting spam traps daily. We conducted a deep audit, removed blacklist domains, and set up a rotating sender system that allowed them to scale safely.",
    stats: [
      { label: "Deliverability", value: "99.8%" },
      { label: "Open Rate", value: "72%" },
      { label: "Volume / Day", value: "5k" },
    ],
    tags: ["Deliverability", "Consulting"],
  },
  {
    client: "VentureScope",
    category: "Venture Capital",
    title: "Sourcing 50+ qualified startup deals per month",
    desc: "We built a proprietary scraping engine to identify high-growth startups before they hit the radar, feeding their investment team with a consistent stream of warm leads.",
    stats: [
      { label: "Deals Sourced", value: "50/mo" },
      { label: "Response Rate", value: "18%" },
      { label: "ROI", value: "12x" },
    ],
    tags: ["Lead Scraper", "Automation"],
  },
  {
    client: "BluePeak",
    category: "Consulting Firm",
    title: "From 0 to 20 sales calls per week in 30 days",
    desc: "Starting from scratch, we built their entire outbound motion. From domain purchase to script writing, we handed them a turnkey system that started performing in week 4.",
    stats: [
      { label: "Weekly Calls", value: "20+" },
      { label: "Setup Time", value: "30 Days" },
      { label: "Revenue Added", value: "$250k" },
    ],
    tags: ["Full Service", "Strategy"],
  },
];

export default function CaseStudies() {
  return (
    <section className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-slate-900" />
            <span className="text-xs font-bold tracking-widest text-slate-600 uppercase">Success Stories</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Real results. <br />
            <span className="text-slate-400">Verifiable revenue.</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            See how we help fast-growing companies build predictable revenue engines through data-driven cold email infrastructure.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {cases.map((item, i) => (
            <div 
              key={i} 
              className="group flex flex-col bg-[#FAFAFA] border border-slate-100 rounded-3xl p-8 md:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/50 hover:border-slate-200 hover:-translate-y-1"
            >
              
              {/* Top Meta */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-900 font-bold text-sm shadow-sm">
                        {item.client.charAt(0)}
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-sm">{item.client}</h4>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{item.category}</p>
                    </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all">
                    <FiArrowUpRight />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-900 leading-snug mb-4 group-hover:underline decoration-slate-300 underline-offset-4 decoration-2">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                {item.desc}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-200/60 mb-8">
                {item.stats.map((stat, idx) => (
                    <div key={idx}>
                        <p className="text-2xl font-bold text-slate-900 tracking-tight">{stat.value}</p>
                        <p className="text-xs text-slate-500 font-medium uppercase mt-1">{stat.label}</p>
                    </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tags.map((tag, t) => (
                    <span key={t} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600">
                        {tag}
                    </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 p-12 bg-slate-900 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950" />
            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to write your success story?</h2>
                <p className="text-slate-400 mb-8 text-lg">Join 200+ companies scaling their revenue with our infrastructure.</p>
                <Link 
                    href="/booking"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-colors"
                >
                    Book Your Strategy Call
                </Link>
            </div>
        </div>

      </div>
    </section>
  );
}