import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WalletCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Get connection params from URL
    const params = new URLSearchParams(window.location.search);
    const publicKey = params.get('phantom_encryption_public_key');
    const errorCode = params.get('errorCode');

    if (publicKey) {
      // Store the public key
      localStorage.setItem('walletAddress', publicKey);
      
      // Handle Telegram WebApp callback
      if (window.Telegram?.WebApp) {
        window.Telegram.WebApp.sendData(JSON.stringify({
          action: 'wallet_connected',
          publicKey: publicKey
        }));
      }
    }

    // Redirect back to main app
    navigate('/');
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Connecting wallet...</p>
    </div>
  );
};

export default WalletCallback;
