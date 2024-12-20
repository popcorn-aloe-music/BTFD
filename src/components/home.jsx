import Nav from "./Navbar/Navbar"
import HeroSection from "./HeroSection/HeroSection"
import VideoSection from "./HeroSection/VideoSection"
import FirstRow from "./FeaturesSection/FirstRow"
import ReferralSection from "./FeaturesSection/ReferralSection"
import TokenomicsSection from "./FeaturesSection/TokenomicsSection"
import BullsEye from "./FeaturesSection/BullsEyeSection.jsx"
import BullsSquad from "./FeaturesSection/BullsSquadSection.jsx"
import StayUpdatedSection from "./FeaturesSection/StayUpdatedSection.jsx"
import FAQsSection from "./FeaturesSection/FAQsSection.jsx"
import FooterSection from "./FeaturesSection/FooterSection.jsx"
const home = () => {
  return (
    <div>
      <Nav />
      <HeroSection />
      <VideoSection />
      <FirstRow />
      <ReferralSection />
      <TokenomicsSection />
      <BullsEye />
      <BullsSquad />
      <StayUpdatedSection />
      <FAQsSection />
      <FooterSection />
    </div>
  )
}

export default home
