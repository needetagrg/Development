import { FaCheckCircle } from "react-icons/fa";
import StarRatings from "react-star-ratings";
import { useState, useEffect } from "react";
import { UserRequest } from "../requestMethods";
import { useSelector } from "react-redux";

const Order = () => {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const getUserOrder = async () => {
      try {
        const res = await UserRequest.get(
          `/orders/find/${user.currentUser._id}`
        );
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUserOrder();
  }, [user]);

  const handleRating = async (id) => {
    const singleRating = {
      star: rating,
      name: user.currentUser.name,
      postedBy: user.currentUser.name,
      comment: comment,
    };
    try {
      await UserRequest.put(`/products/rating/${id}`, singleRating);
      setComment("");
      setRating(0);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="text-center mb-8">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto" />
          <h1 className="text-3xl font-bold mt-3">Thank You For Your Order!</h1>
          <p className="text-gray-600 mt-2">
            Here are the details of your recent orders.
          </p>
        </div>

        {orders.map((order, index) => (
          <div className="mb-8" key={index}>
            <h2 className="text-2xl font-semibold mb-4">Order #{order._id}</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Items Ordered</h3>
                <div className="flex flex-col">
                  {order.products.map((product, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                        <img
                          src={product.img}
                          alt="Haru Haru Wonder Cleanser"
                          className="w-24 h-24 rounded-md object-cover"
                        />
                        <div className="flex-1 ml-4">
                          <h4 className="text-lg font-semibold">
                            {product.title}
                          </h4>
                          <p className="text-gray-600">
                            Qty: {product.quantity}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold">
                            NPR {product.price}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col space-y-4 mt-4">
                        <h3>Rate Product</h3>
                        <StarRatings
                          numberOfStars={5}
                          starDimension="25px"
                          rating={rating}
                          isSelectable={true}
                          starRatedColor={"orange"}
                          changeRating={(newRating) => {
                            setRating(newRating);
                          }}
                        />

                        <textarea
                          name=""
                          id=""
                          placeholder="leave a message"
                          className="p-[10px] w-[300px] mt-3"
                          onChange={(e) => setComment(e.target.value)}
                        />

                        <button className="bg-[#1e1e1e] w-[200px] p-[5px] text-white" onClick={handleRating}>
                          Submit
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-gray-50 p-4 rounded-lg ">
          <h3 className="text-xl font-semibold mb-2">Shipping information</h3>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.number}</p>
          <p className="text-gray-600">{user.name}</p>
        </div>
        <div className="bg-gray-50 rounded-lg m-2">
          <h3 className="t-xl font-semibold mb-">Payment Method</h3>
          <p className="text-gray-600">E-Sewa</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span className="text-lg font-medium">Subtotal:</span>
            <span className="text-lg font-semibold">NPR 5400</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-lg font-medium">Shipping:</span>
            <span className="text-lg font-semibold">NPR 160</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-lg font-medium">Total:</span>
            <span className="text-lg font-semibold">NPR 5560</span>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-[#d1d5db] hover:text-black w-fit">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
