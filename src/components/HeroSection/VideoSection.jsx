import logo from "../../assets/Images/Logo.svg";
import walkingCow from "../../assets/Images/walking-cow.svg";


function VideoSection() {
  return (
    <section className="flex flex-col items-center justify-between gap-8 py-16 px-6 bg-gray-100">
      {/* Video */}
      <div className="w-full md:w-1/2">
        <iframe 
          className="w-full h-64 md:h-80 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/your-video-id" 
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      {/* Buttons and Image */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6">
        {/* Buttons */}
        <div className="flex flex-row md:flex-row justify-center items-center gap-4 w-full px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full px-4">
          <a
            href="#play-now"
            className="bg-blue-500 font-bold text-white text-sm py-2 px-4 w-full md:w-[250px] h-[70px] text-center rounded-lg shadow hover:bg-blue-700 transition duration-300 flex items-center justify-center"
          >
            Coming soon to Telegram
          </a>
          <a
            href="#learn-more"
            className="bg-yellow-200 font-bold text-gray-800 text-sm py-2 px-4 w-full md:w-[250px] h-[70px] text-center rounded-lg shadow hover:bg-gray-300 transition duration-300 flex items-center justify-center gap-2"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-[30px] h-auto cursor-pointer transform transition-transform duration-300 hover:scale-75"
            />
            Discover
          </a>
          </div>
        </div>


        {/* Image */}
        <div className="w-full flex flex-row md:flex-row items-center justify-center text-center md:text-left p-4 gap-4">
          {/* Image Section */}
          <img
            src={walkingCow}
            alt="walkingCow"
            className="w-[80px] md:w-[100px] h-auto cursor-pointer transform transition-transform duration-300 hover:scale-75"
          />

          {/* Text Section */}
          <div>
            <h1 className="text-[40px] md:text-[70px] font-extrabold leading-none">
              BTFD BULL RUN
            </h1>
            <p className="text-blue-600 font-bold text-sm md:text-base text-left">
              Run With The Bulls & Earn $BTFD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
