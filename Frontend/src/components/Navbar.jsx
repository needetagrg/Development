import { FaSearch, FaUser } from "react-icons/fa";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {

  const [search, setSearch] = useState("");
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

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
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to={`/products/${search}`}>
        <FaSearch className="cursor-pointer" />
        </Link>
        
      </div>

      <div className="flex items-center">
        <Link to="/cart">
          <div className="mr-[20px] cursor-pointer">
            <Badge
              badgeContent={cart.quantity}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#ef4444",
                  color: "white",
                },
              }}
            >
              <ShoppingBasketIcon className="text-[#9ca3af]" />
            </Badge>
          </div>
        </Link>

       <Link to={"/login"}>
       <div className="flex items-center cursor-pointer space-x-2 border border-[#d1d5db] p-2 rounded-full hover:bg-[#d1d5db] duration-300">
          <FaUser className="text-[#9ca3af] hover:text-[#d1d5db] transition duration-300" />
          {!user.currentUser ? <span className="font-semibold ">Login</span> :

            <Link to="/myaccount">
            <span className="text-[#9ca3af] hover:text-gray-600 tansition duration-300 font-semibold" >{user.currentUser.name}</span>
            
            </Link>
        
          }
        </div>
       </Link>
      </div>
    </div>
  );
};

export default Navbar;
