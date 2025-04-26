import { showAverageRating } from "./Ratings";

const Product = ({ product }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center bg-white p-4 m-5 rounded-lg shadow-md w-[300px] h-[470px] cursor-pointer ">
        <img
          src={product.img}
          alt="product"
          className="h-[250px] w-[250px] object-cover rounded-md"
        />
        <h3 className="font-semibold text-[15px] text-center mt-3 text-gray-500">
          {product.categories}
        </h3>
        <h2 className="font-semibold text-[17px] text-center mt-1">
          {product.title}
        </h2>
        <span className="text-[17px] font-semibold text-center mt-1 text-gray-700">
          NPR {product.originalPrice}
        </span>
        <div className="mt-2">
          {showAverageRating(product)}
        </div>
      </div>
    </div>
  );
};

export default Product;
