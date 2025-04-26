import Banner from "../components/banner";
import Category from "../components/Category";
import Products from "../components/Products";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="text-center  p-[80px] bg-[#d1d5db]" >
        <h2 className="text-xl font-semibold mb-4">
          Not sure what's your skin type?
        </h2>
        <Link to="/skintypequiz" >
          <button className="px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-white hover:text-black transition">
            Take Our Skin Type Quiz
          </button>
        </Link>
      </div>
      <Products />
      <Category />
    </div>
  );
};

export default Home;
