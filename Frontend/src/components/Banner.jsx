const Banner = () => {
    return (
      <div
        className="relative h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/cover3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
  
        <div className="relative flex flex-col text-white w-[50%] pt-[10%] px-8">
          <span>
            <h1 className="text-4xl font-bold mb-4">
              Glow Naturally with LuminSkin
            </h1>
            <p className="text-lg">
              Explore premium skincare products designed to rejuvenate, hydrate,
              and enhance your skin.
            </p>
          </span>
  
          <h1 className="mt-4 italic">Beauty that radiates from within.</h1>
  
          <div className="flex items-center mt-6 space-x-4">
            <button className="bg-transparent border border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-black transition">
              Shop Now
            </button>
            <button className="bg-transparent border border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-black transition">
              About Us
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  