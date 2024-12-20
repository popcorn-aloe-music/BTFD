import BannerCow from "../../assets/Images/Banner-cow-transparent.svg"

function HeroSection() {
    return (
      <section className="relative bg-white bg-cover bg-center text-white py-20 px-6">
        <div className="absolute inset-0 bg-white"></div>
        <div className="relative z-10 text-center">
          <div className="relative flex items-center justify-center">
            {/* Text Background */}
            <h1
              className="absolute text-blue-500 font-extrabold animate-blink leading-none opacity-30
                text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] text-center"
            >
              BUY THE <br />FUCKING DIP
            </h1>

            {/* Centered Image */}
            <img 
              src={BannerCow} 
              alt="Banner-cow" 
              className="relative z-10 w-[700px] h-auto 
                sm:w-[400px] md:w-[500px] lg:w-[700px]"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-5xl text-blue-950 font-extrabold mb-6">
            DON’T JUST BUY - OWN THE DIP WITH BTFD!
          </h1>

          <p className="text-lg sm:text-sm lg:text-lg mb-8 leading-tight text-blue-950 font-normal">
            It’s time to ape into the most exciting crypto presale of the year! BTFD isn’t just another meme coin, it’s the degen movement you’ve been waiting for. With our <br />
            Play-to-Earn game launching in Stage 8 and 90% APY staking dropping in Stage 4, now’s your moment to act. Weekly and monthly rewards keep the hype <br /> alive—grab your $BTFD before the price explodes. This is your chance to send it—are you in or out? Join the best live crypto presale now!
          </p>

          <a href="#presale" className="inline-block bg-blue-600 text-white text-xl py-3.5 px-12 rounded-lg hover:bg-orange-200 hover:text-blue-950 font-bold transition duration-300">
            Buy Now
          </a>
        </div>
      </section>
    );
}

export default HeroSection;
