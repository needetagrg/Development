import { FaPlus } from "react-icons/fa";

const Banners = () => {
  return (
    <div className="flex gap-8 p-6">
      {/* LEFT */}
      <div className="flex-1">
        <h2 className="text-2xl text-black font-semibold mb-6">
          Active Banner
        </h2>

        <div className="space-y-6 shadow-md rounded-lg bg-white">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <img
              src="/login2.jpg"
              alt="Login page banner"
              className="w-32 h-32 object-cover rounded-md"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-xl font-semibold text-black mb-2">
                Glow with Confidence
              </h3>
              <p className="text-gray-600">
                Discover your confidence back with our handpicked beauty
                essentials.
              </p>
            </div>
            <button className="text-white bg-red-500 px-4 py-2 font-semibold rounded-md hover:bg-red-600 transition-colors">
              Delete
            </button>
          </div>

          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <img
              src="/login2.jpg"
              alt="Login page banner"
              className="w-32 h-32 object-cover rounded-md"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-xl font-semibold text-black mb-2">
                Glow with Confidence
              </h3>
              <p className="text-gray-600">
                Discover your confidence back with our handpicked beauty
                essentials.
              </p>
            </div>
            <button className="text-white bg-red-500 px-4 py-2 font-semibold rounded-md hover:bg-red-600 transition-colors">
              Delete
            </button>
          </div>

          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <img
              src="/login2.jpg"
              alt="Login page banner"
              className="w-32 h-32 object-cover rounded-md"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-xl font-semibold text-black mb-2">
                Glow with Confidence
              </h3>
              <p className="text-gray-600">
                Discover your confidence back with our handpicked beauty
                essentials.
              </p>
            </div>
            <button className="text-white bg-red-500 px-4 py-2 font-semibold rounded-md hover:bg-red-600 transition-colors">
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col">

        <div className="flex-1 bg-white p-5 rounded-md shadow-md">
        <span htmlFor="" className="text-black font-semibold mb-">
          Insert image:
        </span>
          <div className="flex flex-col">
            <div className="border-2 h-[100px] w-[100px] border-[#444] border-solid rounder-md">
              <div className="flex items-center justify-center m-[40px]">
                <label htmlFor="" className="cursor-pointer">
                  <FaPlus className="text-[20px] text-black" />
                </label>
              </div>
            </div>

            <div className="flex flex-col h-15 my-3">
              <span className="font-semibold text-black">Title</span>
              <input type="text" className="w-[250px] bg-white outline-none border-b-2 border-[#444] border-solid"></input>

            </div>

            <div className="flex flex-col h-15 my-3">
              <span className="font-semibold text-black">Subtitle</span>
              <input type="text" className="w-[250px] bg-white outline-none border-b-2 border-[#444] border-solid"></input>

            </div>

            <button className="text-white bg-black px-4 py-2 font-semibold rounded-md hover:bg-red-600 transition-colors">Upload</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
