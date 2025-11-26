"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiZap, FiLayers, FiBriefcase, FiUser } from "react-icons/fi";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: <FiHome className="w-5 h-5" />,
  },
  {
    label: "Services",
    href: "/services",
    icon: <FiZap className="w-5 h-5" />,
  },
  {
    label: "Cases",
    href: "/case-studies",
    icon: <FiLayers className="w-5 h-5" />,
  },
  {
    label: "Agency",
    href: "/whitelabel",
    icon: <FiBriefcase className="w-5 h-5" />,
  },
  {
    label: "About",
    href: "/about",
    icon: <FiUser className="w-5 h-5" />,
  },
];

export default function MobileNavbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center md:hidden pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-1 bg-slate-900/90 backdrop-blur-xl border border-white/10 p-2 rounded-full shadow-2xl shadow-black/40">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex flex-col items-center justify-center w-16 h-14 rounded-full transition-all duration-300",
                isActive
                  ? "text-white"
                  : "text-slate-500 hover:text-slate-300"
              )}
            >
              {/* Active Indicator Background */}
              {isActive && (
                <span className="absolute inset-0 bg-white/10 rounded-full -z-10 scale-90" />
              )}
              
              {/* Icon with animation */}
              <span className={cn(
                  "transition-transform duration-300",
                  isActive ? "-translate-y-0.5" : "translate-y-0"
              )}>
                {item.icon}
              </span>
              
              {/* Label */}
              <span className={cn(
                  "text-[10px] font-medium mt-0.5 transition-opacity duration-300",
                  isActive ? "opacity-100" : "opacity-0 scale-0 hidden"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}