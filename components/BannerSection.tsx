"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function BannerSection() {
  return (
    <section 
      className="relative pt-36 pb-16 md:pt-[220px] md:pb-[130px] w-full bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1600')` 
      }}
    >
      <div className="w-full max-w-[1238px] px-4 mx-auto relative flex flex-col justify-center">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full max-w-full px-4 text-center md:text-left">
            <div className="mb-6 md:mb-8">
              <h1 className="font-sancreek text-white text-3xl md:text-4xl lg:text-6xl leading-tight md:leading-[60px] font-bold tracking-wide mb-4">
                Monument Valley Safari
              </h1>
              <div className="font-yellowtail text-[#7dd4ff] text-4xl md:text-5xl lg:text-[75px] tracking-wide leading-tight md:leading-[60px] mt-2 font-light italic">
                Guided Off-Road Adventure Tours
              </div>
            </div>

            <div className="max-w-[730px] mx-auto md:mx-0">
              <p className="font-opensans text-white text-lg md:text-xl tracking-wide leading-6 md:leading-7 opacity-90 mb-8">
                Experience breathtaking guided tours through Grand Canyon, Antelope Canyon and authentic Native American cultural experiences.
              </p>

              <Link href="/#tours">
                <Button className="bg-[#fd0408] hover:bg-[#fd0408]/90 text-white rounded-md px-6 py-4 md:px-8 md:py-5 h-auto w-auto text-base md:text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                  <span className="font-inter">Explore All Tours</span>
                  <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 right-10 w-4 h-4 bg-[#7dd4ff] rounded-full opacity-60 animate-pulse hidden lg:block"></div>
      <div className="absolute top-1/3 right-32 w-2 h-2 bg-white rounded-full opacity-40 animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-1/4 left-20 w-3 h-3 bg-[#fd0408] rounded-full opacity-50 animate-pulse hidden lg:block"></div>
    </section>
  );
}