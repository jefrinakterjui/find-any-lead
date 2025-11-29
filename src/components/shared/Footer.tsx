"use client";

import React from "react";
import { 
  Youtube, 
  Linkedin, 
  Instagram,
  Facebook,
  Mail,
  MapPin
} from "lucide-react";
import { Logo } from "./Navbar/logo";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <Logo/>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              We help agencies and B2B businesses scale their revenue through 
              data-driven cold email infrastructure and white-label partnerships.
            </p>
            
            <div className="flex items-center gap-4 pt-2">
              {[
                { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/alaminxtk" },
                { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/salaminxtk" },
                { icon: <Youtube className="w-5 h-5" />, href: "#" },
                { icon: <Instagram className="w-5 h-5" />, href: "#" },
              ].map((social, idx) => (
                <Link
                  key={idx} 
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-slate-800"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-bold tracking-wide">Solutions</h4>
            <ul className="space-y-3 text-sm">
              {["Cold Email System", "Lead Generation", "White Label", "Deliverability Audit", "Agency Growth"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors duration-200 block w-fit">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-bold tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm">
              {["About Us", "Success Stories", "Pricing", "Partner Program", "Careers"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors duration-200 block w-fit">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-white font-bold tracking-wide">Stay Updated</h4>
            <p className="text-slate-400 text-sm">
              Get the latest cold email strategies and agency growth tips directly to your inbox.
            </p>
            
            <div className="space-y-3 pt-2">
              <Link 
                href="mailto:alamin@findanylead.com" 
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-primary transition-colors group"
              >
                <Mail className="text-primary w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>alamin@findanylead.com</span>
              </Link>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="text-primary w-5 h-5 mt-0.5" />
                <span>30 N Gould St Suite R, Sheridan, <br />WY 82801, USA</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          
          <div className="text-center md:text-left">
            &copy; {currentYear} BrandName Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>

        </div>
      </div>
    </footer>
  );
}