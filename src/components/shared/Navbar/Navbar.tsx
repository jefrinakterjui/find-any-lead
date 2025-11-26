"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "For Agencies", href: "/whitelabel" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
  ];

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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200",
                pathname === link.href
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/booking"
            className="inline-flex items-center justify-center px-4 py-2 text-xs md:text-sm font-semibold text-white transition-all bg-slate-900 rounded-full hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-200 hover:-translate-y-0.5 active:translate-y-0 md:px-6 md:py-2.5"
          >
            Book Strategy Call
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;