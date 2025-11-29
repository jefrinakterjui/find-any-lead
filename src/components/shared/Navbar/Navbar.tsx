"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-slate-200/60 py-3 md:py-4 shadow-sm"
          : "bg-transparent border-transparent py-4 md:py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0 relative z-50">
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-full border border-slate-200/60 backdrop-blur-sm">
          <NavMenu/>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/booking"
            className="inline-flex items-center justify-center px-4 py-2 text-xs md:text-sm font-semibold text-white transition-all bg-primary rounded-full hover:bg-[#155efcea] hover:shadow-lg hover:shadow-slate-200 hover:-translate-y-0.5 active:translate-y-0 md:px-6 md:py-2.5"
          >
            Book Strategy Call
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;