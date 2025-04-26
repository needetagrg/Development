import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserRequest } from "../requestMethods";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await UserRequest.post("/auth/register", { name, email, password });
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white flex items-center justify-center py-6">
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

      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        {/* Image Section */}
        <div className="h-[500px] w-1/2">
          <img
            src="/login2.jpg"
            alt="Register"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Form Section */}
        <div className="p-6 w-1/2">
          <h2 className="text-2xl font-bold text-black mb-4">
            Register with LuminSkin
          </h2>
          <form className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-black text-opacity-75 text-sm font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d1d5db]"
                placeholder="Enter your full name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-black text-opacity-75 text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d1d5db]"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-black text-opacity-75 text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d1d5db]"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#d1d5db] text-white py-2 rounded-md font-semibold hover:bg-gray-400 transition duration-300"
              onClick={handleRegister}
            >
              Register
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-4 text-sm text-gray-600">
            <span>Already have an account?</span>
            <Link to="/login" className="text-gray-600 font-bold ml-1">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
