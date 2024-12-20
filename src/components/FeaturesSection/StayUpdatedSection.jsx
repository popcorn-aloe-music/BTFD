import cowSitting from "../../assets/Images/cow-sitting.mp4";



const StayUpdatedSection = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#f9fafb] py-12 px-6 md:px-12">
      {/* Left Column */}
      <div className="flex-1 bg-white p-8 md:p-12 shadow-md border-2">
        <div className="flex flex-col max-w-[500px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">
            STAY UPDATED
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
            Sign up for our email updates to be at the forefront of exclusive incentives and bonuses. Don’t miss out on special offers and important news—stay connected with BTFD!
            </p>

            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                    </label>
                    <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Name / Nickname"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                    </label>
                    <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
                    Comment
                    </label>
                    <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 focus:outline-none focus:shadow-outline"
                    id="comment"
                    placeholder="Comment"
                    rows="4"
                    ></textarea>
                </div>
                <div className="flex items-center justify-center">
                    <button
                    className="bg-gradient-to-r from-orange-300 to-orange-200 text-blue-950 font-bold py-4 px-12 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    >
                    Submit
                    </button>
                </div>
            </form>
        </div>
      </div>

      {/* Right Column (Placeholder) */}
      <div className="flex-1 bg-[#daf6ff] p-8 lg:p-16 flex flex-col items-center">
          <video
            className="w-full h-auto rounded-lg"
            autoPlay
            loop
            muted
          >
            <source src={ cowSitting} type="video/mp4"/>
          </video>
      </div>
    </div>
  );
};


export default StayUpdatedSection;
