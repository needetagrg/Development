import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { UserRequest } from "../requestMethods";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProduct } from "../redux/cartRedux";
import { showAverageRating } from "../components/Ratings";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  let price;

  const handleQuantity = (action) => {
    if (action === "dec") {
      setQuantity(quantity === 1 ? 1 : quantity - 1);
    }
    if (action === "inc") {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await UserRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handlePrice = (
    originalPrice,
    discountedPrice,
    wholesalePrice,
    minimumQuantity,
    quantity
  ) => {
    if (quantity > minimumQuantity && discountedPrice) {
      discountedPrice = wholesalePrice;

      price = discountedPrice;

      return price;
    } else if (quantity > minimumQuantity && originalPrice) {
      originalPrice = wholesalePrice;

      price = originalPrice;

      return price;
    } else if (discountedPrice) {
      price = discountedPrice;

      return price;
    } else {
      price = originalPrice;

      return price;
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addProduct({
        ...product,
        quantity,
        price,
        email: "needetagrg22@gmail.com",
      })
    );
    toast.success("Product has been added to cart successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    console.log(cart);
  };

  const [isHowToUseOpen, setIsHowToUseOpen] = useState(true);

  return (
    <div className="h-auto flex flex-col lg:flex-row gap-12 p-8">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* Product Image */}
      <div className="flex-1 h-[600px] w-[500px]">
        <img src={product.img} alt="" className="h-full w-full object-cover" />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-3xl font-semibold ">{product.title}</h2>
        <p className="text-2xl text-gray-700 font-semibold">
          NPR{" "}
          {handlePrice(
            product.originalPrice,
            product.discountedPrice,
            product.wholesalePrice,
            product?.wholesaleMinimumQuantity,
            quantity
          )}
        </p>
        {/* Description */}
        <p className="text-gray-600 leading-relaxed">{product.desc}</p>

       

        <div className="flex items-center p-1 m-3">
          <FaMinus
            className="bg-[#d1d5db] text-black cursor-pointer p-2 rounded-full mr-4 text-3xl"
            onClick={() => handleQuantity("dec")}
          />
          <span className="text-lg font-semibold mr-4">{quantity}</span>
          <FaPlus
            className="bg-[#d1d5db] text-black cursor-pointer p-2 rounded-full text-3xl"
            onClick={() => handleQuantity("inc")}
          />
        </div>
        <button
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-[#d1d5db] hover:text-black transition duration-300 ease-in-out w-fit"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>

        <div className="inline-flex items-center bg-[#d1d5db] text-white font-semibold text-sm mt-[15px] p-4 rounded-full shadow-md">
          Wholesale Available: NPR {product.wholesalePrice} as from
          {product.wholesaleMinimumQuantity} items
        </div>

        {/* Product Info Section */}
        <div className="w-full sm:w-96 my-4">
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
              {showAverageRating(product)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
