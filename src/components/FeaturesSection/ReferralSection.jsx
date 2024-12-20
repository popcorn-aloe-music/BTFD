import cowSitting from "../../assets/Images/cow-sitting.mp4";

const ReferralSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#f1f1f1] py-12 px-6 md:px-16">
      {/* Right Column: Text */}
      <div className="flex-1 pl-0 md:pl-12 mb-8 md:mb-0">
        <h2 className="text-[40px] sm:text-[50px] md:text-[70px] font-extrabold text-blue-950 leading-tight mb-6 text-center md:text-left">
          EARN WITH <br />REFERRALS
        </h2>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex items-start sm:items-center space-x-4 border-2 border-[#1F73B7] p-4 rounded-lg shadow-md">
            <div className="w-10 h-10 rounded-full bg-[#1F73B7] flex items-center justify-center text-white font-semibold">
              1
            </div>
            <div>
              <p className="text-lg text-[#1F73B7] font-bold">Connect Your Wallet</p>
              <p className="text-sm sm:text-base">Visit the buy page and connect your wallet. Once connected, you will receive a unique referral code.</p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex items-start sm:items-center space-x-4 border-2 border-[#1F73B7] p-4 rounded-lg shadow-md">
            <div className="w-10 h-10 rounded-full bg-[#1F73B7] flex items-center justify-center text-white font-semibold">
              2
            </div>
            <div>
              <p className="text-lg text-[#1F73B7] font-bold">Share Your Referral Code</p>
              <p className="text-sm sm:text-base">Share your unique referral code with your friends, family, or community members.</p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex items-start sm:items-center space-x-4 border-2 border-[#1F73B7] p-4 rounded-lg shadow-md">
            <div className="w-10 h-10 rounded-full bg-[#1F73B7] flex items-center justify-center text-white font-semibold">
              3
            </div>
            <div>
              <p className="text-lg text-[#1F73B7] font-bold">Referral Benefits</p>
              <p className="text-sm sm:text-base">For Your Referrals: Anyone who uses your referral code to make a purchase of $50 or more will receive an extra 10% $BTFD on top of their purchase. <br />For You: You will receive 10% of the amount of $BTFD coins purchased whenever your referral code is used, if you make it in the top 20 on the leaderboard.</p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="flex items-start sm:items-center space-x-4 border-2 border-[#1F73B7] p-4 rounded-lg shadow-md">
            <div className="w-10 h-10 rounded-full bg-[#1F73B7] flex items-center justify-center text-white font-semibold">
              4
            </div>
            <div>
              <p className="text-lg text-[#1F73B7] font-bold">Track Your Earnings</p>
              <p className="text-sm sm:text-base">Keep track of your referral rewards through your wallet. Watch your $BTFD grow as more people use your code!</p>
            </div>
          </div>
        </div>
        <p className="italic text-center mt-10 text-gray-600 text-sm sm:text-base">
          By participating in our referral program, you can help spread the word about BTFD and earn extra rewards along the way. Join us in making BTFD a success!
        </p>
      </div>

      {/* Left Column: Video */}
      <div className="flex-1 bg-[#daf6ff] h-full order-last md:order-first">
        <video 
          className="w-full mx-auto" 
          autoPlay 
          loop 
          muted
        >
          <source src={cowSitting} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default ReferralSection;
