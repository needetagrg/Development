import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserRequest } from "../requestMethods";
const Banner = () => {
  const [banner, setBanner] = useState({});

  useEffect(() => {
    const fetchRandomBanner = async () => {
      try {
        const res = await UserRequest.get("/banners/random");
        setBanner(res.data);
      } catch (error) {
        console.error("Failed to fetch random banner", error);
      }
    };

    fetchRandomBanner();
  }, []);

  if (!banner) {
    return <div>Loading...</div>;
  }
  return (
    <div className={`relative bg-[url(--banner.img)] bg-no-repeat bg-cover h-[80vh] px-[200px]`}
    
    style={{backgroundImage: `url(${banner.img})`}}
    >

      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative flex flex-col text-white w-[50%] pt-[10%] px-8">
        <span>
          <h1 className="text-4xl font-bold mb-4">{banner.title}</h1>
          <p className="text-lg">{banner.subtitle}</p>
        </span>

        <h1 className="mt-4 italic">Beauty that radiates from within.</h1>

        <div className="flex items-center mt-6 space-x-4">
          <Link to={"/allproducts"}>
            <button className="bg-transparent border border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-black transition">
              Shop Now
            </button>
          </Link>

          <Link to={"/about"}>
          <button className="bg-transparent border border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-black transition">
            About Us
          </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Banner;
