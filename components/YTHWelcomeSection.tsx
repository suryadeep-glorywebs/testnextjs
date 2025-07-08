import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

export default function YTHWelcomeSection() {
  // Feature cards data
  const featureCards = [
    {
      iconSrc: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      title: "Expert Guides",
      description: "Knowledgeable local experts",
    },
    {
      iconSrc: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      title: "Hidden Gems",
      description: "Beyond typical tourist spots",
    },
    {
      iconSrc: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      title: "Small Groups",
      description: "Personal, intimate experiences",
    },
  ];

  return (
    <section className="w-full py-8 md:pt-24 md:pb-20 bg-white">
      <div className="max-w-[1238px] mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 max-w-full px-4">
            <div className="relative mb-6 sm:mb-7 lg:mb-0">
              <Card className="rounded-lg overflow-hidden shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]">
                <CardContent className="p-0">
                  <div className="relative w-full h-[400px] md:h-[562px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Traveling with off-road car"
                      src="https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=800"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Experience badge */}
              <Card className="absolute -top-5 lg:-top-10 -right-3 lg:-right-5 w-[140px] h-[80px] md:w-[181px] md:h-[108px] bg-[#7dd4ff] rounded-lg overflow-hidden shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]">
                <CardContent className="flex flex-col justify-center h-full p-4 md:p-6">
                  <div className="font-bold text-black text-2xl md:text-4xl leading-8 md:leading-10">
                    15+
                  </div>
                  <div className="text-black text-xs md:text-sm leading-4 md:leading-5">
                    Years of Experience
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="w-full lg:w-1/2 max-w-full px-4">
            {/* Right side - Content */}
            <div className="flex-1 flex flex-col">
              {/* Heading section */}
              <div className="mb-6">
                <h2 className="font-bold text-stone-950 text-2xl md:text-4xl leading-8 md:leading-10">
                  Yá'át'ééh! Welcome!
                </h2>
                <Separator className="w-24 h-1 mt-4 bg-[#fd0408] rounded-full" />
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-5 md:leading-6 mb-7 md:mb-12">
                We are Monument Valley's premier off-road adventure company. Navajo-owned, our experienced guides will show you the best of Monument Valley. We arrange custom photography tours, family-friendly sightseeing tours and private tours. Our team delights in arranging unique experiences tailored to our customers' interests, from private speaking engagements with a World War II Navajo Code Talker to overnight astrophotography tours. Every year, our team has the opportunity to show thousands of visitors the true beauty of Monument Valley and the Navajo culture. Start planning your trip today!
              </p>

              {/* Feature cards */}
              <div className="grid grid-cols-1 min-[575px]:grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 mb-7 md:mb-12">
                {featureCards.map((card, index) => (
                  <Card
                    key={index}
                    className="w-full h-32 md:h-40 bg-gray-50 rounded-lg border-0 shadow-none hover:shadow-md transition-shadow duration-300"
                  >
                    <CardContent className="p-3 md:p-4 flex flex-col items-center justify-center h-full">
                      <div className="flex items-center justify-center mb-2 md:mb-3">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden bg-white shadow-sm">
                          <img
                            className="w-full h-full object-cover"
                            alt="Feature icon"
                            src={card.iconSrc}
                          />
                        </div>
                      </div>
                      <h3 className="font-bold text-stone-950 text-sm md:text-base text-center leading-5 md:leading-6 mb-1">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm text-center leading-4 md:leading-5">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-5">
                <Button 
                  variant="outline" 
                  className="w-full sm:w-[181px] text-[#22577A] border-[#D1D5DB] hover:bg-[#22577a] hover:text-white transition-all duration-300"
                >
                  Take a Tour
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-[181px] text-[#22577A] border-[#D1D5DB] hover:bg-[#22577a] hover:text-white transition-all duration-300"
                >
                  Meet Our Guides
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-[181px] text-[#22577A] border-[#D1D5DB] hover:bg-[#22577a] hover:text-white transition-all duration-300"
                >
                  What We Do
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}