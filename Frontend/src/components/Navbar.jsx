import { FaSearch, FaUser } from "react-icons/fa";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[100px] shadow-md px-6">
      <Link to="/">
        <div className="cursor-pointer m-2">
          <img src="/logo.png" alt="Logo" height="60" width="60" />
        </div>
      </Link>

      <div className="flex items-center m-2">
        <input
          type="text"
          placeholder="Search Product"
          className="p-[15px] border-2 border-[#d1d5db] border-solid w-[500px] outline-none rounded-full mr-[-30px]"
        />
        <FaSearch className="cursor-pointer" />
      </div>

      <div className="flex items-center">
        <Link to="/cart">
          <div className="mr-[20px]">
            <Badge
              badgeContent={2}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#ef4444",
                  color: "white",
                },
              }}
              className="cursor-pointer"
            >
              <ShoppingBasketIcon className="text-[#9ca3af]" />
            </Badge>
          </div>
        </Link>

       <Link to={"/login"}>
       <div className="flex items-center cursor-pointer space-x-2 border border-[#d1d5db] p-2 rounded-full hover:bg-[#d1d5db] duration-300">
          <FaUser className="text-[#9ca3af] hover:text-[#d1d5db] transition duration-300" />
          <span className="font-semibold">Login</span>
        </div>
       </Link>
      </div>
    </div>
  );
};

export default Navbar;
