"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowLeft, FiCheckCircle, FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
  icon?: React.ReactNode;
}

export default function ServiceDetails({ service }: { service: ServiceData }) {
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      const tl = gsap.timeline();
      tl.from(".breadcrumb-anim", { y: -20, opacity: 0, duration: 0.6, ease: "power2.out" })
        .from(".title-anim", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .from(".subtitle-anim", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");

      // Content Animation
      gsap.from(contentRef.current, {
        scrollTrigger: { trigger: contentRef.current, start: "top 80%" },
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out"
      });

      // Sidebar Animation
      gsap.from(sidebarRef.current, {
        scrollTrigger: { trigger: sidebarRef.current, start: "top 80%" },
        x: 40, opacity: 0, duration: 0.8, delay: 0.2, ease: "power3.out"
      });
      
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Dynamic Banner Section */}
      <section ref={headerRef} className="relative pt-40 pb-24 px-6 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

        <div className="max-w-6xl mx-auto relative z-10">
          <Link 
            href="/services" 
            className="breadcrumb-anim inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 mb-8 transition-colors group"
          >
            <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to All Services
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="title-anim text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8 text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-700 to-primary">
              {service.title}
            </h1>
            <p className="subtitle-anim text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
              {service.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16">
          
          <div ref={contentRef} className="lg:col-span-8">
            <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-8">
              <p className="text-lg mb-12 font-sans">{service.description}</p>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">How we drive results</h3>
              <div className="grid md:grid-cols-2 gap-6 not-prose">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-slate-200 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 mb-4">
                      <FiCheckCircle className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-slate-900 block">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div ref={sidebarRef} className="lg:col-span-4 relative">
            <div className="sticky top-32">
              <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl shadow-slate-200/50 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none" />

                <h3 className="text-xl font-bold mb-8 relative z-10">Why partner with us?</h3>
                <ul className="space-y-6 mb-10 relative z-10">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold border border-white/20">
                        {idx + 1}
                      </span>
                      <span className="text-slate-300 text-sm font-medium leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-white/10 relative z-10">
                  <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-4">
                    Ready to scale?
                  </p>
                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold h-12 rounded-full text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Link href="/booking">
                      Book Your Strategy Call <FiArrowUpRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}