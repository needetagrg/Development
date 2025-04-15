import { useState } from "react";
import StarRatings from "react-star-ratings";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Product = () => {
  const [isBenefitsOpen, setIsBenefitsOpen] = useState(false);
  const [isHowToUseOpen, setIsHowToUseOpen] = useState(true);

  return (
    <div className="h-auto flex justify-between p-[30px]">
      {/* Product Image */}
      <div className="flex-1 h-[600px] w-[500px]">
        <img
          src="/arencia.webp"
          alt="Holy Hyssop Serum 120ml"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col ml-[40px]">
        <h2 className="text-3xl font-semibold mb-2">Holy Hyssop Serum 120ml</h2>
        <p className="text-lg text-gray-600 mb-4">NPR 2,800</p>
        {/* Description */}
        <p className="text-gray-600 mb-4">
          A luxurious serum infused with niacinamide 10% and Vita-ACE complex
          12% to rejuvenate, hydrate, and enhance your skin for a radiant glow.
        </p>

        <div className="mt-1">
          <StarRatings
            rating={4.03}
            starRatedColor="orange"
            starDimension="25px"
            starSpacing="5px"
          />
          <span className="ml-2 text-gray-600">(3)</span>
        </div>

        <div className="flex items-center p-1 m-3">
          <FaMinus className="bg-[#d1d5db] text-black cursor-pointer p-2 rounded-full mr-4 text-3xl" />
          <span className="text-lg font-semibold mr-4">1</span>
          <FaPlus className="bg-[#d1d5db] text-black cursor-pointer p-2 rounded-full text-3xl" />
        </div>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-[#d1d5db] hover:text-black w-fit">
          Add to Cart
        </button>

        <div className="inline-flex items-center bg-[#d1d5db] text-white font-semibold text-sm mt-[15px] p-4 rounded-full shadow-md">
          10% Discount Available : NPR 1,500 as from 5 items
        </div>

        {/* Product Info Section */}
        <div className="w-full sm:w-96 my-4">
          <div className="mb-4">
            <span className="font-semibold text-gray-800">Category:</span> Serum
          </div>
          <div className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsBenefitsOpen(!isBenefitsOpen)}
            >
              <span className="font-semibold text-gray-800">Benefits:</span>
              <span className="text-gray-600">
                {isBenefitsOpen ? "–" : "+"}
              </span>
            </div>
            {isBenefitsOpen && (
              <p className="text-gray-600 mt-2">
                Hydrates deeply, reduces fine lines, and brightens complexion
                with niacinamide and Vita-ACE complex.
              </p>
            )}
          </div>
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsHowToUseOpen(!isHowToUseOpen)}
            >
              <span className="font-semibold text-gray-800">How to Use:</span>
              <span className="text-gray-600">
                {isHowToUseOpen ? "–" : "+"}
              </span>
            </div>
            {isHowToUseOpen && (
              <p className="text-gray-600 mt-2">
                Apply an appropriate amount on clean face and gently pat to aid
                absorption.
              </p>
            )}
          </div>

          <hr className="my-4" />
          <div className="flex flex-col">
            <h2 className="font-semibold text-[18px] m-4">Reviews</h2>

            <div className="flex items-center">
              <StarRatings
                rating={2.403}
                starRatedColor="orange"
                starDimension="20px"
                starSpacing="3px"
              />
              <span className="ml-2 text-gray-600">Rashmi Spakota</span>
            </div>

            <div className="flex items-center">
              <StarRatings
                rating={4.403}
                starRatedColor="orange"
                starDimension="20px"
                starSpacing="3px"
              />
              <span className="ml-2 text-gray-600">Sushma Gurung</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
