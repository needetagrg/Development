import { FaCheckCircle } from "react-icons/fa";
import StarRatings from "react-star-ratings";

const Order = () => {
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

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Order #1</h2>
          <div className="space-y-6">
            {/* First Product */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Items Ordered</h3>
              <div className="flex flex-col">
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <img
                    src="/haruharu.jpg"
                    alt="Haru Haru Wonder Cleanser"
                    className="w-24 h-24 rounded-md object-cover"
                  />
                  <div className="flex-1 ml-4">
                    <h4 className="text-lg font-semibold">
                      Haru Haru Wonder Cleanser
                    </h4>
                    <p className="text-gray-600">Qty: 2</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">NPR 1750</p>
                  </div>
                </div>

                <div className="flex flex-col space-y-4 mt-4">
                  <h3>Rate Product</h3>
                  <StarRatings
                    rating={4.403}
                    starRatedColor="orange"
                    starDimension="20px"
                    starSpacing="3px"
                  />
                  <textarea
                    name=""
                    id=""
                    placeholder="leave a message"
                    className="p-3 w-[300px] h-24 border border-gray-300 rounded-md"
                  ></textarea>
                  <button className="bg-[#1e1e1e] w-[200px] p-[5px] text-white">
                    Submit
                  </button>
                </div>
              </div>
            </div>

            {/* Second Product (Repeated) */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Items Ordered</h3>
              <div className="flex flex-col">
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <img
                    src="/medicubeVC.webp"
                    alt="Medicube VItaC Moisteriser"
                    className="w-24 h-24 rounded-md object-cover"
                  />
                  <div className="flex-1 ml-4">
                    <h4 className="text-lg font-semibold">Hydrating Mask</h4>
                    <p className="text-gray-600">Qty: 1</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">NPR 1200</p>
                  </div>
                </div>

                <div className="flex flex-col space-y-4 mt-4">
                  <h3>Rate Product</h3>
                  <StarRatings
                    rating={4.403}
                    starRatedColor="orange"
                    starDimension="20px"
                    starSpacing="3px"
                  />
                  <textarea
                    name=""
                    id=""
                    placeholder="leave a message"
                    className="p-3 w-[300px] h-24 border border-gray-300 rounded-md"
                  ></textarea>
                  <button className="bg-[#1e1e1e] w-[200px] p-[5px] text-white">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg ">
          <h3 className="text-xl font-semibold mb-2">Shipping information</h3>
          <p className="text-gray-600">Jamesdoe@gmail.com</p>
          <p className="text-gray-600">+977 9816166132</p>
          <p className="text-gray-600">James Doe</p>
        </div>
        <div className="bg-gray-50 rounded-lg m-2">
          <h3 className="t-xl font-semibold mb-">Payment Method</h3>
          <p className="text-gray-600">Khalti</p>
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
