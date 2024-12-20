import cowFloating from "../../assets/Images/cow-floating.mp4";
import solidProof from "../../assets/Images/solid-proof.webp";
import scrl from "../../assets/Images/scrl.webp";
import coinSuit from "../../assets/Images/coinsuit.svg";

const BullsEye = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#f9fafb] py-12 px-6 md:px-12 gap-8">
      {/* Right Column */}
      <div className="order-1 md:order-2 flex-1 p-8 lg:p-16 flex flex-col justify-center">
        <div className="flex flex-col max-w-[550px] mx-auto">
          <h1 className="text-[30px] sm:text-[50px] font-extrabold text-blue-900 mb-2 text-center md:text-left">
            BULL’S EYE
          </h1>
          <p className="text-sm sm:text-lg text-gray-700 mb-8 md:text-left">
            At BTFD, we prioritize the safety and confidence of our investors. To ensure the highest level of security and transparency, we’ve implemented several key measures:
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-lg sm:text-2xl font-extrabold text-blue-900">
                VIGOROUS SMART CONTRACT AUDIT
              </h2>
              <p className="mt-2 text-sm sm:text-lg text-gray-700">
                The BTFD smart contract has undergone comprehensive audits to guarantee top-tier security throughout the crypto presale. This ensures that no modifications can be made to the contract, safeguarding its integrity and functionality.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-2xl font-extrabold text-blue-900">
                KYC PROCESS FOR BABY BULL
              </h2>
              <p className="mt-2 text-sm sm:text-lg text-gray-700">
                Our mascot, Baby Bull, has also completed comprehensive KYC processes, providing additional trust and security for our community.
              </p>
            </div>

            {/* Button Section */}
            <div className="flex flex-wrap justify-center items-center gap-4">
              <button className="flex items-center justify-center text-white px-6 sm:px-8 py-4 sm:py-3 rounded-lg font-bold transition bg-blue-500 hover:bg-blue-600 w-[150px] h-[70px] relative">
                <img 
                  src={solidProof} 
                  alt="SolidProof Logo" 
                />
                <div className="absolute top-2 right-2 text-white text-xs bg-blue-700 p-1 rounded-full">
                  ✔
                </div>
              </button>

              <button className="flex items-center justify-center text-white px-6 sm:px-8 py-4 sm:py-3 rounded-lg font-bold transition bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-90 w-[150px] h-[70px] relative">
                <img 
                  src={coinSuit} 
                  alt="CoinSuit Logo" 
                />
                <div className="absolute top-2 right-2 text-white text-xs bg-blue-700 p-1 rounded-full">
                  ✔
                </div>
              </button>

              <button className="flex items-center justify-center text-white px-6 sm:px-8 py-4 sm:py-3 rounded-lg font-bold transition bg-black hover:bg-blue-600 w-[150px] h-[70px] relative">
                <img 
                  src={scrl} 
                  alt="SCRL Logo" 
                />
                <div className="absolute top-2 right-2 text-white text-xs bg-blue-700 p-1 rounded-full">
                  ✔
                </div>
              </button>
            </div>
          </div>

          <p className="mt-8 text-gray-600 text-sm text-center italic">
            These measures ensure a strong foundation of trust and security for all BTFD investors.
          </p>
        </div>
      </div>

      {/* Left Column (Video Section) */}
      <div className="order-2 md:order-1 flex-1 p-8 lg:p-16 flex flex-col items-center justify-center bg-[#79e9b4] rounded-lg">
        <div className="w-full max-w-md">
          <video
            className="w-full h-auto rounded-lg"
            autoPlay
            loop
            muted
          >
            <source src={cowFloating} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default BullsEye;
