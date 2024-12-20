import cowSitting2 from "../../assets/Images/cow-sitting-2.mp4";
import React, { useState } from 'react';

const FAQsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is BTFD?",
      answer: "BTFD is a cryptocurrency built on the Solana blockchain, designed for fast, low-cost, and scalable transactions. It is a community-driven token with a focus on staking and decentralized finance (DeFi).",
    },
    {
      question: "Why is BTFD built on Solana?",
      answer: "Solana is one of the fastest and most scalable blockchains, offering low transaction fees and high throughput. This makes it the ideal choice for BTFD to ensure seamless transactions and a smooth user experience.",
    },
    {
      question: "How can I buy BTFD?",
      answer: "To buy BTFD, use a Solana-compatible wallet like Phantom or Solflare. Fund your wallet with SOL and connect it to a decentralized exchange (DEX) such as Raydium or Orca to swap SOL for BTFD.",
    },
    {
      question: "What wallets support BTFD?",
      answer: "BTFD can be stored in any Solana-compatible wallet, including Phantom, Solflare, Sollet, and Ledger (via Solana apps).",
    },
    {
      question: "Can I stake BTFD?",
      answer: "Yes, you can stake BTFD to earn rewards. Staking helps secure the network and rewards participants with additional BTFD tokens. Check the platform for staking options and APR details.",
    },
    {
      question: "What are the benefits of holding BTFD?",
      answer: "By holding BTFD, you can earn staking rewards, participate in governance, and enjoy low-cost, fast transactions on the Solana network. Additionally, BTFD has long-term DeFi applications.",
    },
    {
      question: "How fast are transactions with BTFD?",
      answer: "Transactions with BTFD are almost instantaneous, thanks to Solana’s ability to process up to 65,000 transactions per second with block times of about 400 milliseconds.",
    },
    {
      question: "What is the tokenomics of BTFD?",
      answer: "BTFD has a sustainable tokenomics model with allocations for staking rewards, development, and marketing. Check the detailed tokenomics in the White Paper for more information.",
    },
    {
      question: "What makes BTFD unique compared to other tokens?",
      answer: "BTFD stands out due to its focus on community engagement, staking rewards, and a long-term vision for DeFi adoption. It offers fast, low-cost transactions on Solana’s secure network.",
    },
    {
      question: "How do I contact support for BTFD?",
      answer: "For support, reach out to us via our Telegram support group or email at support@btfd.com. Our team is always ready to help.",
    },
    {
      question: "Does BTFD have a roadmap?",
      answer: "Yes, BTFD has a detailed roadmap outlining milestones like staking integration, DeFi partnerships, and centralized exchange listings. Check our website for the latest updates.",
    },
    {
      question: "Is BTFD audited?",
      answer: "Yes, the BTFD smart contract has been audited by a reputable third-party firm to ensure security and transparency. You can find the audit report on our website.",
    },
    {
      question: "When can I trade BTFD?",
      answer: "BTFD can be traded 24/7, 365 days a year, as cryptocurrency markets operate continuously. Check supported exchanges for trading availability.",
    },
    {
      question: "What are the fees for BTFD transactions?",
      answer: "BTFD transactions on the Solana network have extremely low fees, typically costing less than a cent per transaction.",
    },
  ];
  

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-none p-8 bg-white rounded-lg flex flex-col md:flex-row">
        {/* Left Column (Video Section) */}
        <div className="order-2 md:order-1 flex-1 p-8 lg:p-16 flex flex-col items-center justify-center bg-[#efedfb] rounded-lg">
          <video
            className="w-full h-auto rounded-lg"
            autoPlay
            loop
            muted
          >
            <source src={cowSitting2} type="video/mp4" />
          </video>
        </div>
        
        {/* Right Column (FAQ Section) */}
        <div className="order-1 md:order-2 flex-1 p-8 lg:p-16">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4 text-center">FAQS</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex justify-between items-center p-4 text-gray-700 font-semibold focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
                </button>
                {activeIndex === index && (
                  <div className="p-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
