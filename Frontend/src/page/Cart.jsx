import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeProduct } from "../redux/cartRedux";
import { UserRequest } from "../requestMethods";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [shippingAddress, setShippingAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleRemoveProduct = (product) => {
    dispatch(removeProduct(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const openCheckoutModal = () => {
    if (user.currentUser) {
      setIsCheckoutModalOpen(true);
    } else {
      toast.error("Please login to proceed to checkout.");
    }
  };

  const handleCheckoutWithDetails = async () => {
    if (!shippingAddress) {
      toast.error("Please enter your shipping address.");
      return;
    }
    if (!phoneNumber) {
      toast.error("Please enter your phone number.");
      return;
    }

    try {
      const res = await UserRequest.post("orders/initiate/esewa/payment", {
        cart,
        userId: user.currentUser._id,
        email: user.currentUser.email,
        name: user.currentUser.name,
        address: shippingAddress,
        phone: phoneNumber,
      });

      if (res.data && res.data.formData) {
        const formData = res.data.formData;
        const eSewaUrl = "https://rc-epay.esewa.com.np/api/epay/main/v2/form"; // Production URL for Epay

        // Create a dynamic form
        const form = document.createElement("form");
        form.method = "POST";
        form.action = eSewaUrl;

        // Add form fields
        for (const key in formData) {
          if (Object.prototype.hasOwnProperty.call(formData, key)) {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = key;
            input.value = formData[key];
            form.appendChild(input);
          }
        }

        // Append the form to the document body and submit it
        document.body.appendChild(form);
        form.submit();
        setIsCheckoutModalOpen(false); // Close the modal after submission
      } else {
        toast.error("Failed to get payment initiation data.");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to initiate payment.");
    }
  };

  const closeCheckoutModal = () => {
    setIsCheckoutModalOpen(false);
  };

  return (
    <div className="min-h-screen p-6">
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
      <h2 className="font-[18px] font-bold m-2">My Shopping Cart</h2>

      <div className="flex gap-8 ">
        {/* LEFTSIDE (Cart Items) - No changes here */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 ">Items</h3>
          <div className="flex flex-col spacey-4 ">
            {cart.products?.map((product, index) => (
              <div
                className="flex items-center justify-between border-b border-gray-200 pb-4"
                key={index}
              >
                 <img
                  src={product.img}
                  alt=""
                  className="h-32 h-32 object-cover rounded-md"
                ></img>
                <div className="flex-1 ml-4 ">
                  <h3 className="text-xl font-semibold mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{product.desc}</p>
                  <div className="flex items-center p-1 m-3">
                    <FaMinus className="bg-[#d1d5db] text-black cursor-pointer p-2 rounded-full mr-4 text-3xl" />
                    <span className="text-lg font-semibold mr-4">
                      Quantity: {product.quantity}
                    </span>
                    <FaPlus className="bg-[#d1d5db] text-black cursor-pointer p-2 rounded-full text-3xl" />
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold mb-6">NPR{product.price} </p>
                  <FaTrashAlt
                    className="text-red-600 cursor-pointer"
                    onClick={handleRemoveProduct}
                  />
                </div>

              </div>
            ))}
            <button
              className="bg-red-400 w-[200px] text-white p-3 mt-4 rounded-md font-semibold"
              onClick={handleClearCart}
            >
              Delete All Cart Items
            </button>
          </div>
        </div>

        {/* RIGHTSIDE (Order Summary and Checkout) */}
        <div className="flex justify-center">
          <div className="w-80 bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex flex-col space-y-3">
              <div className="flex justify-between">
                <span className="text-base font-medium">Sub-total:</span>
                <span className="text-base font-medium">NPR {cart.total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base font-medium">Shipping:</span>
                <span className="text-base font-medium">NPR 200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base font-medium">Total:</span>
                <span className="text-base font-medium">
                  NPR {cart.total + 200}
                </span>
              </div>
              <button
                className="bg-red-400 text-white p-3 w-full hover:text-white hover:bg-red-500 rounded-lg font-semibold"
                onClick={openCheckoutModal} // Open the modal on checkout click
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {isCheckoutModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                Address:
              </label>
              <input
                type="text"
                id="address"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number:
              </label>
              <input
                type="text"
                id="phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                onClick={closeCheckoutModal}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
                onClick={handleCheckoutWithDetails}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;