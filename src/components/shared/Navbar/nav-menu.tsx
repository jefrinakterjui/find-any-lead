"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { Mail, Map, Users } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Deliverability",
    href: "/services/email-deliverability",
    description: "Fix spam issues and repair domain reputation.",
    icon: <Mail className="w-5 h-5 text-slate-700" />,
  },
  {
    title: "Infrastructure",
    href: "/services/email-infrastructure",
    description: "Complete setup for high-volume sending.",
    icon: <Map className="w-5 h-5 text-slate-700" />,
  },
  {
    title: "Lead Gen Systems",
    href: "/services/lead-list-generation",
    description: "Build high-quality lead lists in-house.",
    icon: <Users className="w-5 h-5 text-slate-700" />,
  },
];

export const NavMenu = (props: NavigationMenuProps) => {
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-slate-200/50 data-[state=open]:bg-slate-200/50">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[400px] bg-white">
              {services.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  icon={component.icon}
                >
                  {component.description}
                </ListItem>
              ))}
              <li className="pt-2 border-t border-slate-100 mt-1">
                <Link
                  href="/services"
                  className="flex items-center justify-center w-full p-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
                >
                  View All Services &rarr;
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a href="/case-studies" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-slate-200/50")}>
              Case Studies
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a href="/whitelabel" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-slate-200/50")}>
              For Agencies
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a href="/about" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-slate-200/50")}>
              About
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ReactNode; href: string }
>(({ className, title, children, icon, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          {...props}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
            className
          )}
        >
          <div className="flex items-center gap-3 mb-1">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-white group-hover:shadow-sm border border-transparent group-hover:border-slate-200 transition-all">
              {icon}
            </div>
            <div className="text-sm font-bold text-slate-900 leading-none">
              {title}
            </div>
          </div>
          <p className="line-clamp-2 text-xs leading-snug text-slate-500 group-hover:text-slate-600 pl-11">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";