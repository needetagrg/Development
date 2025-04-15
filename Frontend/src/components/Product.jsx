import StarRatings from "react-star-ratings";

const Product = ({img}) => {
  return (
    <div  className="flex flex-wrap mx-[30px]">
       <div className="flex flex-col items-center justify-center h-[450px] m-[2px] cursor-pointer">
        <img
          src={img}
          alt="product1"
          className="h-[300px] w-[300px] object-cover rounded-lg"
        />
        <h3 className="font-semibold text-[16px] w-[300px] text-center mt-2">
          Serum
        </h3>
        <h2 className="font-semibold text-[18px] w-[300px] text-center mt-1">
          Holy Hyssop Serum 120ml
        </h2>
        <span className="text-[18px] font-semibold w-[300px] text-center mt-1">
          NPR 2,800
        </span>
        <StarRatings
          rating={2.403}
          starRatedColor="orange"
          starDimension="25px"
          starSpacing="5px"
        />
        <span>(3)</span>
      </div>
    </div>
  )
}

export default Product
