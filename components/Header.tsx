"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Tours", href: "/#tours" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed w-full max-w-full top-0 left-0 z-50 transition-colors duration-300 ${
      isScrolled 
        ? "bg-[#111827] h-20" 
        : "h-[100px] md:h-[146px]"
    }`}>
      <div className="w-full max-w-[1238px] px-4 mx-auto">
        <div className="w-full max-w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative">
            <div className={`transition-all duration-300 ${
              isScrolled 
                ? "w-[125px] h-[60px]" 
                : "w-[150px] md:w-[227px] h-[60px] md:h-[100px]"
            } flex items-center justify-center bg-white/10 rounded-lg backdrop-blur-sm`}>
              <span className="text-white font-bold text-xl md:text-2xl">LOGO</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-8">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link href={item.href}>
                      <NavigationMenuLink
                        className="font-medium text-white text-base leading-6 whitespace-nowrap hover:text-[#7dd4ff] transition-colors"
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/contact">
              <Button className="ml-8 bg-[#fd0408] hover:bg-[#e00306] text-white rounded-md h-10 px-5 text-base font-normal transition-colors">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Nav */}
          <div className="lg:hidden flex items-center gap-3">
            <Link href="/contact">
              <Button className="bg-[#fd0408] hover:bg-[#e00306] text-white font-normal rounded-md h-10 px-4 text-sm">
                Book Now
              </Button>
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <SheetHeader>
                  <SheetTitle className="text-stone-950">Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-stone-950 text-lg font-medium py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link href="/contact">
                    <Button className="mt-4 bg-[#fd0408] hover:bg-[#e00306] text-white font-normal rounded-md w-full">
                      Book Now
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}