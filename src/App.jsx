import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import WalletCallback from './pages/WalletCallback';
import Home from "./components/home"


function App() {
  const isTelegramWebApp = window.Telegram?.WebApp;
  
  return (
    <Router>
      <div className={`app ${isTelegramWebApp ? 'telegram-app' : ''}`}>
        <Routes>
          <Route path="/wallet-callback" element={<WalletCallback />} />
          <Route path="/" element={
            <>
              <Navbar />
              <Home/>
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
