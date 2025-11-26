import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start font-medium">
      
      {/* Home */}
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="/">Home</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      {/* Services - Scroll to Section */}
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="/services">Services</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      {/* Case Studies - Important for Agency */}
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="/casestudies">Case Studies</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      {/* White Label / For Agencies */}
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="/whitelabel">For Agencies</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      {/* About */}
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="/about">About</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
);