import { useState } from "react";
import logo from "../../assets/Images/Logo.svg";

const NavbarResponsive = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md max-w-[1114px] mx-auto">
      <div className="container px-4 py-5 flex justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-[40px] h-auto cursor-pointer transform transition-transform duration-300 hover:scale-75"
          />
          <h1 className="font-extrabold text-blue-950 cursor-pointer">
            BTFDCOIN
          </h1>
        </div>

        {/* Connect Wallet Button */}
        <button className="bg-orange-200 text-[13px] text-blue-950 px-4 py-2 rounded-[10px] font-semibold hover:bg-blue-950 hover:text-white hover:shadow-inner transition duration-300">
          Connect Wallet
        </button>

        {/* Hamburger Icon for Mobile View */}
        <button
          onClick={toggleMenu}
          className="bg-blue-950 text-white focus:outline-none rounded-[10px] p-2 hover:bg-orange-300 w-[40px] lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links (Only Visible on Mobile via Hamburger) */}
        {isMenuOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-white backdrop-blur-md min-h-screen shadow-lg lg:hidden">
            <ul className="flex flex-col text-center space-y-4">
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 text-[14px] font-medium text-blue-800 hover:underline"
                >
                  Buy Now
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 text-[14px] font-medium text-blue-800 hover:underline"
                >
                  Staking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 text-[14px] font-medium text-blue-800 hover:underline"
                >
                  Referral
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 text-[14px] font-medium text-blue-800 hover:underline"
                >
                  How to Buy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 text-[14px] font-medium text-blue-800 hover:underline"
                >
                  White Paper
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-4">
              <a href="#">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/telegram-app.png"
                  alt="Telegram"
                  className="w-6 transform transition-transform duration-300 hover:scale-75"
                />
              </a>
              <a href="#">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
                  alt="Twitter"
                  className="w-6 transform transition-transform duration-300 hover:scale-75"
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarResponsive;
