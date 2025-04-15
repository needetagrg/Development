import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white flex items-center justify-center py-10">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl">
        {/* Image Section */}
        <div className="h-[500px] w-[480px]">
          <img
            src="/login2.jpg"
            alt="Login"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Form Section */}
        <div className="p-8 w-[480px]">
          <h2 className="text-2xl font-bold text-black mb-6">
            Login to LuminSkin
          </h2>
          <form className="space-y-5">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-black text-opacity-75 text-sm font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d1d5db]"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-black text-opacity-75 text-sm font-medium mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d1d5db]"
                placeholder="Enter your password"
              />
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <a
                href="#"
                className="text-sm text-black hover:text-gray-600 transition duration-300"
              >
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-400 text-white py-3 rounded-md font-semibold hover:bg-gray-500 transition duration-300"
            >
              Login
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-4 text-sm text-gray-600">
            <span>Don't have an account?</span>
            <Link to="/register" className="text-gray-600 font-bold ml-1">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
