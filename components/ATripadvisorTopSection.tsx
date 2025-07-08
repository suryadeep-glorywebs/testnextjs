"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    tourName: "Monument Valley Guided Tour",
    review: `"Traveling with a native Navajo through Monument Valley was a wonderful experience! Our guide was knowledgeable, friendly, and shared fascinating stories about the area's history and culture. The views were absolutely breathtaking and we got to see places that most tourists never experience."`,
    author: "Ldiane B. | TripAdvisor",
  },
  {
    tourName: "Monument Valley Sunset Tour",
    review: `"My sister and I wanted to see Monument Valley, but we didn't know what tour company to use. After reading reviews, we chose this company and we're so glad we did! The sunset tour was magical and our guide made the experience unforgettable."`,
    author: "Janet R. | TripAdvisor",
  },
  {
    tourName: "Hunt Mesa Overnight",
    review: `"This was a fabulous experience to get to the Hunts Mesa. The overnight camping under the stars was incredible. Our guide was professional and made sure we were comfortable throughout the entire adventure. Highly recommend!"`,
    author: "Nicole Z. | TripAdvisor",
  },
  {
    tourName: "Highlight of Vacation",
    review: `"We had an outstanding sunrise tour with Navajo guide Toney. He was incredibly knowledgeable about the area and shared wonderful stories. This was definitely the highlight of our entire vacation to the Southwest."`,
    author: "Chris C. | TripAdvisor",
  },
  {
    tourName: "Cultural Experience",
    review: `"Beyond just the stunning scenery, we learned so much about Navajo culture and traditions. Our guide was passionate about sharing his heritage and made the tour both educational and entertaining. A truly authentic experience."`,
    author: "Maria S. | TripAdvisor",
  },
  {
    tourName: "Photography Paradise",
    review: `"As a photographer, I was blown away by the access we had to incredible viewpoints. Our guide knew all the best spots for photos and was patient while we captured the perfect shots. The golden hour lighting was spectacular!"`,
    author: "David L. | TripAdvisor",
  },
];

export default function ATripadvisorTopSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [toursPerPage, setToursPerPage] = useState(4);

  // Responsive logic
  useEffect(() => {
    const updateToursPerPage = () => {
      const width = window.innerWidth;
      if (width <= 575) {
        setToursPerPage(1);
      } else if (width <= 767) {
        setToursPerPage(2);
      } else if (width <= 1024) {
        setToursPerPage(3);
      } else {
        setToursPerPage(4);
      }
    };

    updateToursPerPage();
    window.addEventListener("resize", updateToursPerPage);
    return () => window.removeEventListener("resize", updateToursPerPage);
  }, []);

  // Auto-play with loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = testimonials.length - toursPerPage;
        return prev >= maxIndex ? 0 : prev + 1; // Loop back to start
      });
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [toursPerPage]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = testimonials.length - toursPerPage;
      return prev >= maxIndex ? 0 : prev + 1; // Loop back to start
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = testimonials.length - toursPerPage;
      return prev <= 0 ? maxIndex : prev - 1; // Loop to end
    });
  };

  const getVisibleTours = () => {
    const start = currentIndex;
    const end = start + toursPerPage;
    return testimonials.slice(start, end);
  };

  const totalSlides = Math.max(testimonials.length - toursPerPage + 1, 1);

  return (
    <section className="w-full bg-[#fffaf3] py-8 md:py-16">
      <div className="max-w-[1238px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-950 mb-4">
            A TripAdvisor Top 5 Outdoor Activity in Monument Valley
          </h2>
          <Separator className="w-24 h-1 bg-[#fd0408] rounded-full mx-auto" />
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            onClick={prevSlide}
            variant="outline"
            className="w-11 h-11 flex absolute left-[-50px] top-1/2 transform -translate-y-1/2 rounded-full z-10 max-lg:hidden hover:bg-gray-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            onClick={nextSlide}
            variant="outline"
            className="w-11 h-11 flex absolute right-[-50px] top-1/2 transform -translate-y-1/2 rounded-full z-10 max-lg:hidden hover:bg-gray-50"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Testimonial Cards */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {getVisibleTours().map((testimonial, index) => (
              <Card 
                key={`${currentIndex}-${index}`} 
                className="h-[350px] md:h-[400px] border-stone-200 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Header with TripAdvisor branding */}
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">TA</span>
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <h3 className="font-bold text-stone-950 text-sm md:text-base leading-tight">
                        {testimonial.tourName}
                      </h3>
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="flex-1 mb-4">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed italic">
                      {testimonial.review}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="mt-auto">
                    <p className="text-stone-950 text-sm font-medium">
                      {testimonial.author}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                idx === currentIndex ? "bg-[#fd0408]" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <Button className="bg-[#22577a] hover:bg-[#1a4660] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
            View All Reviews
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}