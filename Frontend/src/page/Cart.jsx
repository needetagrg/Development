import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="min-h-screen p-6">
      <h2 className="font-[18px] font-bold m-2">My Shopping Cart</h2>

      <div className="flex gap-8 ">
        {/* LEFTSIDE */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 ">Items</h3>

          <div className="flex flex-col spacey-4 ">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <img
                src="centella.webp"
                alt=""
                className="h-32 h-32 object-cover rounded-md"
              ></img>
              <div className="flex-1 ml-4 ">
                <h3 className="text-xl font-semibold mb-2">Centella </h3>
                <p className="text-gray-600 mb-2">centalla ko desp</p>
                <div className="flex items-center p-1 m-3">
                  <FaMinus className="bg-[#d1d5db] text-black cursor-pointer p-2 rounded-full mr-4 text-3xl" />
                  <span className="text-lg font-semibold mr-4">1</span>
                  <FaPlus className="bg-[#d1d5db] text-black cursor-pointer p-2 rounded-full text-3xl" />
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold mb-6">NPR </p>
                <FaTrashAlt className="text-red-600 cursor-pointer" />
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <img
                src="puritoM.webp"
                alt=""
                className="h-32 h-32 object-cover rounded-md"
              ></img>
              <div className="flex-1 ml-4 ">
                <h3 className="text-xl font-semibold mb-2">PURITO </h3>
                <p className="text-gray-600 mb-2">PURITO ko desp ko desp</p>
                <div className="flex items-center p-1 m-3">
                  <FaMinus className="bg-[#d1d5db] text-black cursor-pointer p-2 rounded-full mr-4 text-3xl" />
                  <span className="text-lg font-semibold mr-4">1</span>
                  <FaPlus className="bg-[#d1d5db] text-black cursor-pointer p-2 rounded-full text-3xl" />
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold mb-6">NPR </p>
                <FaTrashAlt className="text-red-600 cursor-pointer" />
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <img
                src="equalberryT.webp"
                alt=""
                className="h-32 h-32 object-cover rounded-md"
              ></img>
              <div className="flex-1 ml-4 ">
                <h3 className="text-xl font-semibold mb-2">
                  EQUALBERRY Toner{" "}
                </h3>
                <p className="text-gray-600 mb-2">EQUALBERRY Toner ko desp</p>
                <div className="flex items-center p-1 m-3">
                  <FaMinus className="bg-[#d1d5db] text-black cursor-pointer p-2 rounded-full mr-4 text-3xl" />
                  <span className="text-lg font-semibold mr-4">1</span>
                  <FaPlus className="bg-[#d1d5db] text-black cursor-pointer p-2 rounded-full text-3xl" />
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold mb-6">NPR </p>
                <FaTrashAlt className="text-red-600 cursor-pointer" />
              </div>
            </div>
            <button className="bg-red-400 w-[200px] text-white p-3 mt-4 rounded-md font-semibold">
              Delete All Cart Items
            </button>
          </div>
        </div>

        {/* RIGHTSIDE */}
        <div>
          <div></div>
        </div>

        {/* RIGHTSIDE */}
        <div className="flex justify-center">
          <div className="w-80 bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="flex flex-col space-y-3">
              <div className="flex justify-between">
                <span className="text-base font-medium">Sub-total:</span>
                <span className="text-base font-medium">NPR 10920</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base font-medium">Shipping:</span>
                <span className="text-base font-medium">NPR 200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base font-medium">Total:</span>
                <span className="text-base font-medium">NPR 11120</span>
              </div>
              <button className="bg-red-400 text-white p-3 w-full rounded-lg font-semibold">Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
