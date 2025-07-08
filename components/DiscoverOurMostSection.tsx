"use client";

import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { 
  ArrowRight, 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  Users 
} from "lucide-react";

export default function DiscoverOurMostSection() {
  // Tour data for the top row
  const featuredTours = [
    {
      id: 1,
      title: "Private Storytelling with Navajo Code Talker Peter MacDonald",
      description: "Travel into a restricted area of Monument Valley or Mystery Valley to find a special set-up where you meet and hear stories from one of the last surviving Navajo Code Talkers, Peter MacDonald.",
      location: "Monument Valley Tours",
      duration: "5.5-6 Hours",
      ageGroup: "All Ages",
      additionalInfo: "Sunrise Departure & 8 A.M",
      price: "$3000",
      image: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=800",
      isMostPopular: false,
      buttonType: "call",
    },
    {
      id: 2,
      title: "3 Hour Monument Valley Tour",
      description: "We recommend this safari to those interested in a thorough aesthetic, historical, and cultural insight of Monument Valley.",
      location: "Monument Valley Tours",
      duration: "1.5 hours",
      ageGroup: "All Ages",
      price: "$85",
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800",
      isMostPopular: true,
      buttonType: "book",
    },
  ];

  // Tours data
  const regularTours = [
    {
      id: 3,
      title: "Private Monument Valley Tour",
      description: "Embark on an extraordinary journey through Monument Valley with personalized attention and exclusive access to hidden gems.",
      location: "Monument Valley Tours",
      duration: "3‑5 Hours",
      ageGroup: "All Ages",
      price: "$200",
      image: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=800",
      buttonType: "book",
    },
    {
      id: 4,
      title: "18 Hour Hunts Mesa Overnight Tour",
      description: "Capture dramatic views from 1,600 feet above the valley floor with an unforgettable overnight camping experience.",
      location: "Hunts Mesa Tours",
      duration: "18‑20 Hours",
      ageGroup: "All Ages",
      price: "$650",
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800",
      buttonType: "book",
    },
    {
      id: 5,
      title: "7 Hour Hunts Mesa Tour",
      description: "Embark on an unforgettable guided tour through Tse'Bii'Nidzisgai with breathtaking panoramic views.",
      location: "Hunts Mesa Tours",
      duration: "7 Hours",
      ageGroup: "All Ages",
      price: "$350",
      image: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=800",
      buttonType: "book",
    },
    {
      id: 6,
      title: "Sunset Photography Tour",
      description: "Capture the golden hour magic of Monument Valley with professional photography guidance and prime locations.",
      location: "Monument Valley Tours",
      duration: "4 Hours",
      ageGroup: "All Ages",
      price: "$180",
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800",
      buttonType: "book",
    },
    {
      id: 7,
      title: "Cultural Heritage Experience",
      description: "Immerse yourself in authentic Navajo culture with traditional storytelling, crafts, and ceremonial experiences.",
      location: "Cultural Tours",
      duration: "6 Hours",
      ageGroup: "All Ages",
      price: "$250",
      image: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=800",
      buttonType: "book",
    },
  ];

  const [durationFilter, setDurationFilter] = useState("");
  const [ageGroupFilter, setAgeGroupFilter] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [toursPerPage, setToursPerPage] = useState(3);

  // Responsive logic
  useEffect(() => {
    const updateToursPerPage = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setToursPerPage(1);
      } else if (width <= 1024) {
        setToursPerPage(2);
      } else {
        setToursPerPage(3);
      }
    };

    updateToursPerPage();
    window.addEventListener("resize", updateToursPerPage);
    return () => window.removeEventListener("resize", updateToursPerPage);
  }, []);

  // Filter logic
  const getFilteredTours = () =>
    regularTours.filter((tour) => {
      const durationMatch = durationFilter ? tour.duration === durationFilter : true;
      const ageGroupMatch = ageGroupFilter ? tour.ageGroup === ageGroupFilter : true;
      return durationMatch && ageGroupMatch;
    });

  const filteredTours = getFilteredTours();

  // Reset slider when filters change
  useEffect(() => {
    setCurrentIndex(0);
  }, [durationFilter, ageGroupFilter]);

  // Navigation handlers
  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev + toursPerPage >= filteredTours.length) return prev;
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Sliced tours
  const visibleTours = filteredTours.slice(currentIndex, currentIndex + toursPerPage);

  return (
    <section className="w-full bg-[#fffaf3] py-8 md:py-16">
      <div className="max-w-[1238px] mx-auto px-4">
        {/* Main heading */}
        <div className="flex flex-wrap -mx-4">
          <div className="w-full max-w-full px-4 mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-4xl text-stone-950 text-center leading-8 md:leading-10 font-bold">
              Discover Our Most Popular Tours
            </h2>
            <Separator className="w-24 h-1 bg-[#fd0408] rounded-full mx-auto mt-[6px]" />
          </div>
        </div>

        {/* Featured tours row */}
        <div className="flex flex-wrap -mx-4 mb-8 md:mb-16">
          {featuredTours.map((tour) => (
            <div key={tour.id} className="w-full md:w-1/2 max-w-full px-4 mb-8 md:mb-0">
              <Card className="h-full flex flex-col rounded-lg border-stone-200 shadow-[0px_1px_2px_#0000000d] overflow-hidden">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  {tour.isMostPopular && (
                    <Badge className="absolute top-4 left-4 z-10 bg-[#fd0408] text-white rounded-full flex items-center gap-1 px-2.5 py-1">
                      <Star className="w-4 h-4 text-[#FACC15]" />
                      <span className="font-bold text-xs md:text-sm">Most Popular</span>
                    </Badge>
                  )}

                  <div
                    className="relative w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${tour.image})` }}
                  >
                    {/* Tour attributes */}
                    <div className="absolute bottom-4 left-4 md:left-5 flex flex-wrap items-center gap-1 md:gap-[5px]">
                      {tour.duration && (
                        <Badge className="bg-white text-[#4B5563] rounded-[7px] backdrop-blur-[2px] flex items-center gap-1 text-sm">
                          <Clock className="w-3 h-3 md:w-4 md:h-4" />
                          <span className="font-normal">{tour.duration}</span>
                        </Badge>
                      )}

                      {tour.ageGroup && (
                        <Badge className="bg-white text-[#4B5563] rounded-[7px] backdrop-blur-[2px] flex items-center gap-1 text-sm">
                          <Users className="w-3 h-3 md:w-4 md:h-4" />
                          <span className="font-normal">{tour.ageGroup}</span>
                        </Badge>
                      )}

                      {tour.additionalInfo && (
                        <Badge className="bg-white text-[#4B5563] rounded-[7px] backdrop-blur-[2px] flex items-center gap-1 text-sm hidden md:flex">
                          <Clock className="w-4 h-4" />
                          <span className="font-normal">{tour.additionalInfo}</span>
                        </Badge>
                      )}
                    </div>

                    {/* Price tag */}
                    <div className="absolute bottom-4 right-4 md:right-5 w-[60px] h-[40px] md:w-[69px] md:h-[46px] bg-[#22577a] rounded backdrop-blur-[2px]">
                      <div className="absolute w-[52px] h-[12px] md:w-[61px] md:h-[15px] top-1 left-1 bg-[#7dd4ff] rounded-sm" />
                      <div className="absolute top-1 left-[12px] md:left-[17px] text-[#22577a] text-[10px] md:text-xs text-center leading-[12px] md:leading-[14px]">
                        FROM
                      </div>
                      <div className="absolute top-[16px] md:top-[19px] left-[8px] md:left-[13px] text-[#f5f7f9] text-lg md:text-xl text-center tracking-[-1.00px] leading-[20px] md:leading-[27px]">
                        {tour.price}
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="flex flex-col flex-1 p-0">
                  {/* Tour details */}
                  <div className="flex flex-col flex-1 justify-between p-4 md:p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-600 text-sm">{tour.location}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-950 text-lg mb-2">
                        {tour.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {tour.description}
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-row items-center gap-3 mt-auto">
                      {tour.buttonType === "call" ? (
                        <Button className="w-full md:flex-1 bg-[#fd0408] hover:bg-[#e00306] text-white rounded-[7px]">
                          <Phone className="w-5 h-5 mr-2" />
                          Call To Book
                        </Button>
                      ) : (
                        <Button className="w-full md:flex-1 bg-[#fd0408] hover:bg-[#e00306] text-white rounded-[7px]">
                          <Calendar className="w-5 h-5 mr-2" />
                          Book Now
                        </Button>
                      )}

                      <Button
                        variant="outline"
                        className="w-full md:flex-1 text-[#fd0408] border-[#fd0408] hover:bg-[#fff8f8] rounded-[7px]"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-950">
            Discover Our Exciting Tours
          </h2>
          <Separator className="w-24 h-1 bg-[#fd0408] rounded-full mx-auto mt-2" />
        </div>

        {/* Filters */}
        <div className="w-full max-w-[435px] max-[640px]:text-center sm:flex justify-between items-center border border-[#f4e4d4] p-1 rounded-[6px] mx-auto sm:mb-7 mb-5">
          <div className="flex items-center max-[640px]:justify-center h-8 px-2.5">
            <span className="text-black text-sm md:text-base font-semibold">
              Filter By:
            </span>
          </div>
          <div className="flex flex-wrap items-center">
            <select
              className="rounded text-base text-[#676767] font-semibold shadow-[0px_2px_5px_0px_rgba(0,0,0,0.05)] px-4 py-[6px] bg-white mr-[5px]"
              value={durationFilter}
              onChange={(e) => setDurationFilter(e.target.value)}
            >
              <option value="">All Durations</option>
              {[...new Set(regularTours.map((t) => t.duration))].map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            <select
              className="rounded text-base text-[#676767] font-semibold shadow-[0px_2px_5px_0px_rgba(0,0,0,0.05)] px-4 py-[6px] bg-white"
              value={ageGroupFilter}
              onChange={(e) => setAgeGroupFilter(e.target.value)}
            >
              <option value="">All Age Groups</option>
              {[...new Set(regularTours.map((t) => t.ageGroup))].map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Arrows */}
        <div className="relative">
          <Button
            onClick={prevSlide}
            variant="outline"
            className="w-11 h-11 flex absolute max-[1400px]:left-[-10px] left-[-50px] top-1/2 transform -translate-y-1/2 rounded-full z-10"
            disabled={currentIndex === 0}
          >
            <ChevronLeft />
          </Button>

          <Button
            onClick={nextSlide}
            variant="outline"
            className="w-11 h-11 flex absolute max-[1400px]:right-[-10px] right-[-50px] top-1/2 transform -translate-y-1/2 rounded-full z-10"
            disabled={currentIndex + toursPerPage >= filteredTours.length}
          >
            <ChevronRight />
          </Button>

          {/* Tour Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTours.map((tour) => (
              <Card
                key={tour.id}
                className="flex flex-col justify-between rounded-lg shadow-[0px_2px_5px_0px_rgba(0,0,0,0.05)] border border-[#E7E5E4] bg-white overflow-hidden h-full max-w-[385px] mx-auto"
              >
                {/* Image section */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <div
                    className="relative w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${tour.image})` }}
                  >
                    {/* Tour attributes */}
                    <div className="absolute bottom-4 left-4 md:left-5 flex flex-wrap items-center gap-1 md:gap-[5px]">
                      <Badge className="bg-white text-[#4B5563] rounded-[7px] backdrop-blur-[2px] flex items-center gap-1 text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="font-normal">{tour.duration}</span>
                      </Badge>
                      <Badge className="bg-white text-[#4B5563] rounded-[7px] backdrop-blur-[2px] flex items-center gap-1 text-sm">
                        <Users className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="font-normal">{tour.ageGroup}</span>
                      </Badge>
                    </div>

                    {/* Price tag */}
                    <div className="absolute bottom-4 right-4 md:right-5 w-[60px] h-[40px] md:w-[69px] md:h-[46px] bg-[#22577a] rounded backdrop-blur-[2px]">
                      <div className="absolute w-[52px] h-[12px] md:w-[61px] md:h-[15px] top-1 left-1 bg-[#7dd4ff] rounded-sm" />
                      <div className="absolute top-1 left-[12px] md:left-[17px] text-[#22577a] text-[10px] md:text-xs text-center leading-[12px] md:leading-[14px]">
                        FROM
                      </div>
                      <div className="absolute top-[16px] md:top-[19px] left-[8px] md:left-[13px] text-[#f5f7f9] text-lg md:text-xl text-center tracking-[-1.00px] leading-[20px] md:leading-[27px]">
                        {tour.price}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content section */}
                <CardContent className="flex flex-col flex-1 px-5 py-6">
                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    {tour.location}
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-lg font-bold text-stone-950">
                    {tour.title}
                  </h3>
                  <p className="text-sm text-gray-600 my-2 line-clamp-3 flex-grow">
                    {tour.description}
                  </p>

                  {/* Buttons pinned to bottom */}
                  <div className="mt-auto flex gap-2 pt-4">
                    <Button className="flex-1 bg-[#fd0408] text-white">
                      {tour.buttonType === "call" ? (
                        <>
                          <Phone className="w-4 h-4 mr-1" />
                          Call to Book
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4 mr-1" />
                          Book Now
                        </>
                      )}
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({
            length: Math.max(filteredTours.length - toursPerPage + 1, 1),
          }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === currentIndex ? "bg-[#323232]" : "bg-[#e4e4e4]"
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-6">
          <Button className="bg-[#22577a] text-white hover:bg-[#1a4660]">
            View All Tours <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}