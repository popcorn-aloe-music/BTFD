import tokenomics from "../../assets/Images/tokenomics-chart.mp4";



const TokenomicsSection = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#f9fafb] py-12 px-6 md:px-12">
      {/* Left Column */}
      <div className="flex-1 bg-white p-8 md:p-12 shadow-md border-2">
        <div className="flex flex-col max-w-[500px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">
            TOKENOMICS
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
            The tokenomics of BTFD have been meticulously designed to ensure a
            successful and well-supported launch. Our strategy focuses on
            providing ample liquidity and extensive media coverage both before and
            after the launch.
            </p>

            {/* Subsections */}
            <div className="space-y-6">
            <div>
                <h3 className="text-lg font-extrabold text-blue-900 uppercase mb-2">
                Ample Liquidity
                </h3>
                <p className="text-gray-700">
                A portion of the daily raised funds will be allocated to the
                liquidity wallet, ensuring there is sufficient liquidity available
                at launch. This approach guarantees smooth trading experiences for
                all users.
                </p>
            </div>
            <div>
                <h3 className="text-lg font-extrabold text-blue-900 uppercase mb-2">
                Extensive Media Coverage
                </h3>
                <p className="text-gray-700">
                The remainder of the raised funds will be utilized for widespread
                media publications and engaging social media influencers. This
                comprehensive marketing strategy ensures that BTFD receives ample
                exposure and awareness, both pre-launch and post-launch.
                </p>
            </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-200 text-blue-950 px-12 py-3 rounded-lg font-bold hover:bg-blue-950 hover:text-white transition">
                    Buy Now
                </button>
                <button className="bg-orange-200 text-blue-950 px-12 py-3 rounded-lg font-bold hover:bg-blue-950 hover:text-white transition">
                    Whitepaper
                </button>
            </div>


            {/* Footer Note */}
            <p className="italic text-sm text-gray-600 mt-6">
            By balancing liquidity provision and aggressive marketing efforts, we
            aim to create a stable and highly visible presence in the crypto
            market from day one.
            </p>
      </div>
      </div>

      {/* Right Column (Placeholder) */}
      <div className="flex-1 bg-[#f1f1f1] p-8 lg:p-16 flex flex-col items-center">
        <div className="w-full max-w-md">
          <video
            className="w-full h-auto rounded-lg"
            autoPlay
            loop
            muted
          >
            <source src={ tokenomics} type="video/mp4"/>
          </video>
        </div>
        <div className="mt-8">
        <table className="w-full text-left text-gray-700">
            <tbody className="divide-y divide-gray-200">
                <tr className="space-x-6">
                <td className="py-2 pr-4 text-orange-500">Presale</td>
                <td className="py-2 pr-4">48%</td>
                <td className="py-2">83,040,000,000</td>
                </tr>
                <tr className="space-x-6">
                <td className="py-2 pr-4 text-yellow-500">Liquidity</td>
                <td className="py-2 pr-4">9%</td>
                <td className="py-2">15,570,000,000</td>
                </tr>
                <tr className="space-x-6">
                <td className="py-2 pr-4 text-blue-500">Staking</td>
                <td className="py-2 pr-4">18%</td>
                <td className="py-2">31,140,000,000</td>
                </tr>
                <tr className="space-x-6">
                <td className="py-2 pr-4 text-green-500">Raging Bull Game Rewards</td>
                <td className="py-2 pr-4">17%</td>
                <td className="py-2">29,410,000,000</td>
                </tr>
                <tr className="space-x-6">
                <td className="py-2 pr-4 text-pink-500">Community Incentives/Airdrop/Burn</td>
                <td className="py-2 pr-4">4%</td>
                <td className="py-2">6,920,000,000</td>
                </tr>
                <tr className="space-x-6">
                <td className="py-2 pr-4 text-purple-500">Influencers</td>
                <td className="py-2 pr-4">2%</td>
                <td className="py-2">3,460,000,000</td>
                </tr>
                <tr className="space-x-6">
                <td className="py-2 pr-4 text-purple-700">Team</td>
                <td className="py-2 pr-4">2%</td>
                <td className="py-2">3,460,000,000</td>
                </tr>
            </tbody>
            </table>

          <p className="mt-4 text-sm text-gray-600">
            Max supply: 173,000,000,000
          </p>
        </div>
      </div>
    </div>
  );
};


export default TokenomicsSection;
