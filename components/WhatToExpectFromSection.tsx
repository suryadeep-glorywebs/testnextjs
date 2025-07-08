"use client";

import React from "react";
import { Button } from "./ui/button";
import { Calendar, Phone } from "lucide-react";
import { Separator } from "./ui/separator";

export default function WhatToExpectFromSection() {
  return (
    <section 
      className="relative py-10 md:py-20 w-full bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1600')` 
      }}
    >
      <div className="w-full max-w-[1238px] px-4 mx-auto relative flex flex-col justify-center">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full max-w-full px-4 text-center">
            <div className="mb-6 md:mb-8">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-[60px] font-bold tracking-wide mb-4">
                What to Expect From Our Tours
              </h2>
              <Separator className="w-24 h-1 bg-[#fd0408] rounded-full mx-auto mb-6 md:mb-8" />
              <div className="max-w-4xl mx-auto">
                <p className="text-white text-base md:text-lg leading-6 md:leading-7 mb-6 md:mb-8 opacity-90">
                  We offer a variety of tours, each designed deliberately to accommodate an array of budgets, physical abilities and preferences. Our scenic and cultural tours range from 2.5 to 6 hours. Our photography tours range from 3.5 to 18 hours. Furthermore, we delight in arranging custom tours - from Navajo cultural performances to photography shoots of Native Americans in traditional regalia.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-8 md:mb-10">
              <Button className="bg-[#fd0408] hover:bg-white hover:text-[#fd0408] text-white rounded-md px-6 py-4 h-auto w-full sm:w-64 text-base font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                <Calendar className="mr-2 h-5 w-5" />
                Book Now
              </Button>

              <Button className="bg-white hover:bg-[#fd0408] text-[#22577A] hover:text-white rounded-md px-6 py-4 h-auto w-full sm:w-64 text-base font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                Contact Us
              </Button>
            </div>
            
            <div className="text-center">
              <div className="text-white text-sm md:text-base mb-2 opacity-90">
                Need help planning your trip?
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-[#7dd4ff]" />
                <div className="text-white text-xl md:text-2xl font-bold">
                  Call us at (435) 220-5727
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 right-10 w-4 h-4 bg-[#7dd4ff] rounded-full opacity-60 animate-pulse hidden lg:block"></div>
      <div className="absolute top-1/3 right-32 w-2 h-2 bg-white rounded-full opacity-40 animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-1/4 left-20 w-3 h-3 bg-[#fd0408] rounded-full opacity-50 animate-pulse hidden lg:block"></div>
    </section>
  );
}