"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlay, FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

type Video = {
  id: string | number;
  url: string;
  thumb: string;
  title: string;
  category: string;
};

const DEMO_VIDEOS: Video[] = [
  {
    id: "1",
    url: "https://www.youtube.com/watch?v=7MkAs99O1LQ",
    thumb: "https://img.youtube.com/vi/7MkAs99O1LQ/maxresdefault.jpg",
    title: "How to warm up domains properly in 2024",
    category: "Deliverability"
  },
  {
    id: "2",
    url: "https://www.youtube.com/watch?v=7MkAs99O1LQ",
    thumb: "https://img.youtube.com/vi/7MkAs99O1LQ/maxresdefault.jpg",
    title: "The secret to 80% open rates on cold email",
    category: "Strategy"
  },
  {
    id: "3",
    url: "https://www.youtube.com/watch?v=7MkAs99O1LQ",
    thumb: "https://img.youtube.com/vi/7MkAs99O1LQ/maxresdefault.jpg",
    title: "Scaling from 50 to 5000 emails per day",
    category: "Growth"
  },
];

export default function YoutubeGrid() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".video-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
                <h2 className="text-4xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-700 to-primary">
                    Latest form the lab.
                </h2>
                <p className="text-lg text-slate-500">
                    Deep dives into cold email infrastructure, deliverability experiments, and growth strategies.
                </p>
            </div>
            <Link 
                href="https://youtube.com" 
                target="_blank"
                className="group flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-600 transition-colors pb-1 border-b border-slate-200 hover:border-slate-600"
            >
                View Channel <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {DEMO_VIDEOS.map((v) => (
            <Link
              key={v.id}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="video-card group block"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 bg-slate-200 mb-6">
                <Image
                  src={v.thumb}
                  alt={v.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
                        <FiPlay className="fill-current w-6 h-6 ml-1" />
                    </div>
                </div>

                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                    <span className="text-xs font-medium text-white tracking-wide">{v.category}</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-slate-600 transition-colors mb-2">
                  {v.title}
                </h3>
                <p className="text-sm font-medium text-slate-400">Watch on YouTube</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}