import solidProofBlack from "../../assets/Images/solid-proof-black.webp";
import scrlBlack from "../../assets/Images/scrl-black.webp";
import coinSuitColor from "../../assets/Images/coinsuit-color.svg";
import footerBg from "../../assets/Images/footer-bg.svg";

const FooterSection = () => {
  return (
    <section className="bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-20 w-full text-center leading-none">
        {/* Heading */}
        <h2 className="text-[32px] md:text-[40px] lg:text-[50px] font-extrabold text-blue-950 mb-4">
          JOIN THE MOVEMENT
        </h2>
        <p className="text-gray-700 text-sm md:text-base mb-6 md:mb-8">
          Buy the Dip, Ride the Bull!
        </p>

        {/* Partner Logos */}
        <div className="flex justify-center items-center flex-wrap gap-4 md:gap-6 mb-6 md:mb-8">
          <img src={solidProofBlack} alt="SolidProofBlack" className="h-6 md:h-8" />
          <img src={coinSuitColor} alt="CoinsultColor" className="h-6 md:h-8" />
          <img src={scrlBlack} alt="SCRLBlack" className="h-6 md:h-8" />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-2 text-blue-900 text-xs md:text-sm mb-6 md:mb-8">
          <a href="#buy" className="hover:underline">Buy Now</a>
          <span>/</span>
          <a href="#staking" className="hover:underline">Staking</a>
          <span>/</span>
          <a href="#referral" className="hover:underline">Referral</a>
          <span>/</span>
          <a href="#tokenomics" className="hover:underline">Tokenomics</a>
          <span>/</span>
          <a href="#faqs" className="hover:underline">FAQs</a>
          <span>/</span>
          <a href="#how-to-buy" className="hover:underline">How to Buy</a>
          <span>/</span>
          <a href="#whitepaper" className="hover:underline">Whitepaper</a>
          <span>/</span>
          <a href="#audit-report" className="hover:underline">Audit Report</a>
          <span>/</span>
          <a href="#cookies-policy" className="hover:underline">Cookies Policy</a>
          <span>/</span>
          <a href="#privacy-policy" className="hover:underline">Privacy Policy</a>
          <span>/</span>
          <a href="#terms-of-use" className="hover:underline">Terms of Use</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 md:gap-6">
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/000000/telegram-app.png"
              alt="Telegram"
              className="h-6 w-6 md:h-8 md:w-8"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
              alt="Twitter"
              className="h-6 w-6 md:h-8 md:w-8"
            />
          </a>
        </div>
      </div>

      {/* Cows Illustration */}
      <div className="relative mt-8 md:mt-12">
        <img
          src={footerBg}
          alt="Footer Cows Illustration"
          className="w-full"
        />
        {/* Disclaimer */}
        <p className="hidden md:block absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs text-center">
          Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.
        </p>
      </div>

      {/* Copyright */}
      <p className="text-white text-xs bg-green-700 text-center py-2 mt-0">
        © 2024 BTFDCoin. All Rights Reserved.
      </p>
    </section>
  );
};

export default FooterSection;
