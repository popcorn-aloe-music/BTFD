import cow from "../../assets/Images/cow-holding-eth.webp";


const FirstRow = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center p-6 md:p-10 gap-10">
      {/* Left Column */}
      <div className="w-full md:w-1/2">
        <div className="flex flex-col max-w-[600px] mx-auto">
          <h2 className="text-[30px] sm:text-[40px] md:text-[50px] font-extrabold text-blue-950 leading-none">
            WHY <br /> BTFD COIN
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-800 leading-none">
            For too long, crypto enthusiasts have waited for the perfect dip to
            invest, only to be disappointed by further drops. BTFD coin, symbolized
            by our resilient and optimistic Baby Bull, revolutionizes this process
            by ensuring you truly buy at the dip. We’ve designed a system that
            launches our coin at an optimal price, securing your position in the
            market with confidence.
          </p>
          {/* Social Media Buttons */}
          <div className="flex mt-6 sm:mt-8 gap-4 sm:gap-6">
            <a
              href="#"
              className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={"https://img.icons8.com/ios-filled/50/ffffff/telegram-app.png"}
                alt="Telegram"
                className="w-4 sm:w-5 h-4 sm:h-5"
              />
              <span>Telegram</span>
            </a>
            <a
              href="#"
              className="bg-black text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png"
                alt="Twitter"
                className="w-4 sm:w-5 h-4 sm:h-5"
              />
              <span>X (Twitter)</span>
            </a>
          </div>
        </div>
      </div>
      {/* Right Column */}
      <div className="w-full md:w-1/2 flex justify-center bg-orange-100">
        <img
          src={cow}
          alt="Baby Bull"
          className="w-[200px] sm:w-[250px] md:w-[300px] h-auto object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default FirstRow;
