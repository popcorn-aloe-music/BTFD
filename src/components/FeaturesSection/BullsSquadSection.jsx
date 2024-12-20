import babyBull from "../../assets/Images/baby-bull.svg"
import ragingBull from "../../assets/Images/raging-bull.svg"
import nerdyBull from "../../assets/Images/nerdy-bull.svg"
import peoplesBull from "../../assets/Images/peoples-bull.svg"



const BullsSquad = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">THE BULLS SQUAD</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Meet the team behind BTFD, known as The Bulls Squad. Each bull brings unique skills and personality traits to ensure the success of our project.
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Baby Bull Card */}
          <div className="bg-pink-100 p-6 rounded-lg shadow-lg">
            <img
              src={babyBull}
              alt="Baby Bull"
              className="mx-auto w-1/2 mb-4"
            />
            <h3 className="text-2xl font-extrabold text-gray-900">BABY BULL</h3>
            <p className="mt-2 text-gray-600">
              The brains and vision behind BTFD. Baby Bull is very easygoing but can be easily annoyed. As the mascot, Baby Bull represents the spirit and resilience of our community.
            </p>
            <button className="mt-4 px-4 py-2 border-2 border-gray-800 text-gray-800 rounded-[10px] flex items-center justify-center space-x-2">
              {/* Twitter Icon from Icons8 */}
              <img
                src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
                alt="Twitter"
                className="w-6 h-6"
              />
              <span>Profile</span>
              {/* Tick Icon from Icons8 */}
              <img
                src="https://img.icons8.com/ios-filled/50/000000/checkmark.png"
                alt="Tick"
                className="w-6 h-6"
              />
            </button>

          </div>

          {/* Raging Bull Card */}
          <div className="bg-pink-100 p-6 rounded-lg shadow-lg">
            <img
              src={ragingBull}
              alt="Raging Bull"
              className="mx-auto w-1/2 mb-4"
            />
            <h3 className="text-2xl font-extrabold text-gray-900">RAGING BULL</h3>
            <p className="mt-2 text-gray-600">
              Always angry and ready for a fight, The Raging Bull is an amazing designer responsible for all the graphics you see. This bull also helps with user support, ensuring everything looks great and runs smoothly.
            </p>
            <button className="mt-4 px-4 py-2 border-2 border-gray-800 text-gray-800 rounded-[10px] flex items-center justify-center space-x-2">
              {/* Twitter Icon from Icons8 */}
              <img
                src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
                alt="Twitter"
                className="w-6 h-6"
              />
              <span>Profile</span>
              {/* Tick Icon from Icons8 */}
              <img
                src="https://img.icons8.com/ios-filled/50/000000/checkmark.png"
                alt="Tick"
                className="w-6 h-6"
              />
            </button>
          </div>

          {/* Nerdy Bull Card */}
          <div className="bg-pink-100 p-6 rounded-lg shadow-lg">
            <img
              src={nerdyBull}
              alt="Nerdy Bull"
              className="mx-auto w-1/2 mb-4"
            />
            <h3 className="text-2xl font-extrabold text-gray-900">NERDY BULL</h3>
            <p className="mt-2 text-gray-600">
            The Nerdy Bull loves coding and handles all the nitty gritty back-end stuff. This bull ensures that all technical aspects of BTFD are flawless and efficient.
            </p>
            <button className="mt-4 px-4 py-2 border-2 border-gray-800 text-gray-800 rounded-[10px] flex items-center justify-center space-x-2">
              {/* Twitter Icon from Icons8 */}
              <img
                src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
                alt="Twitter"
                className="w-6 h-6"
              />
              <span>Profile</span>
              {/* Tick Icon from Icons8 */}
              <img
                src="https://img.icons8.com/ios-filled/50/000000/checkmark.png"
                alt="Tick"
                className="w-6 h-6"
              />
            </button>
          </div>

          {/* People's Bull Card */}
          <div className="bg-pink-100 p-6 rounded-lg shadow-lg">
            <img
              src={peoplesBull}
              alt="Peoples Bull"
              className="mx-auto w-1/2 mb-4"
            />
            <h3 className="text-2xl font-extrabold text-gray-900">PEOPLES BULL</h3>
            <p className="mt-2 text-gray-600">
            Hated by a few, loved by many, The Peoples Bull provides support on all social media platforms and email support. This bull ensures that our community is well-informed and supported at all times.
            </p>
            <button className="mt-4 px-4 py-2 border-2 border-gray-800 text-gray-800 rounded-[10px] flex items-center justify-center space-x-2">
              {/* Twitter Icon from Icons8 */}
              <img
                src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
                alt="Twitter"
                className="w-6 h-6"
              />
              <span>Profile</span>
              {/* Tick Icon from Icons8 */}
              <img
                src="https://img.icons8.com/ios-filled/50/000000/checkmark.png"
                alt="Tick"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BullsSquad;
