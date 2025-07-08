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
    </HeaderContent>
  );
}