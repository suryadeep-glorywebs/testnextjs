import HeaderContent from "@/components/HeaderContent";
import BannerSection from "@/components/BannerSection";
import DiscoverOurMostSection from "@/components/DiscoverOurMostSection";
import YTHWelcomeSection from "@/components/YTHWelcomeSection";
import ATripadvisorTopSection from "@/components/ATripadvisorTopSection";
import WhatToExpectFromSection from "@/components/WhatToExpectFromSection";

export default function Home() {
  return (
    <HeaderContent>
      <BannerSection />
      <div id="tours">
        <DiscoverOurMostSection />
      </div>
      <YTHWelcomeSection />
      <ATripadvisorTopSection />
      <WhatToExpectFromSection />

      {/* Gallery Section Placeholder */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at some of the breathtaking moments captured during our tours.
            </p>
          </div>
        </div>
      </section>
    </HeaderContent>
  );
}