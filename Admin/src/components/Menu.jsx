import {
  FaBox,
  FaChartBar,
  FaClipboard,
  FaClipboardList,
  FaCog,
  FaElementor,
  FaHdd,
  FaHome,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="h-[900px] w-[400px] bg-gray-100 p-5 mt-10 shadow-lg">
      <ul className="mt-3 flex flex-col items-start pl-3">
        <li className="mt-2 flex items-center text-base text-black cursor-pointer transition-colors duration-200 hover:bg-gray-200 p-2 rounded">
          <FaHome className="mr-3 text-black" />
          <Link to="/">Home</Link>
        </li>

        <li className="mt-2 flex items-center text-base text-black cursor-pointer transition-colors duration-200 hover:bg-gray-200 p-2 rounded">
          <FaUser className="mr-3 text-black" />
          <Link to="/profile">Profile</Link>
        </li>

        <hr className="my-2 w-full border-gray-300" />

        <Link to='/users'>
        <li className="mt-2 flex items-center text-base text-black cursor-pointer transition-colors duration-200 hover:bg-gray-200 p-2 rounded">
          <FaUsers className="mr-3 text-black" />
          <Link to="/users">Users</Link>
        </li>
        </Link>

        <Link to="/products">
          <li className="mt-2 flex items-center text-base text-black cursor-pointer transition-colors duration-200 hover:bg-gray-200 p-2 rounded">
            <FaBox className="mr-3 text-black" />
            <Link to="/products">Products</Link>
          </li>
        </Link>

        <Link to="/orders">
          <li className="mt-2 flex items-center text-base text-black cursor-pointer transition-colors duration-200 hover:bg-gray-200 p-2 rounded">
            <FaClipboardList className="mr-3 text-black" />
            <Link to="/orders">Orders</Link>
          </li>
        </Link>

        <hr className="my-2 w-full border-gray-300" />

        <Link to='/banners'>
        <li className="mt-2 flex items-center text-base text-black cursor-pointer transition-colors duration-200 hover:bg-gray-200 p-2 rounded">
          <FaElementor className="mr-3 text-black" />
          <Link to="/banners">Banners</Link>
        </li>
        </Link>

        <li className="mt-2 flex items-center text-base text-black cursor-pointer transition-colors duration-200 hover:bg-gray-200 p-2 rounded">
          <FaCog className="mr-3 text-black" />
          <Link to="/settings">Settings</Link>
        </li>

        <li className="mt-2 flex items-center text-base text-black cursor-pointer transition-colors duration-200 hover:bg-gray-200 p-2 rounded">
          <FaHdd className="mr-3 text-black" />
          <Link to="/backups">Backups</Link>
        </li>

        <hr className="my-2 w-full border-gray-300" />

        <li className="mt-2 flex items-center text-base text-black cursor-pointer transition-colors duration-200 hover:bg-gray-200 p-2 rounded">
          <FaChartBar className="mr-3 text-black" />
          <Link to="/charts">Charts</Link>
        </li>

        <li className="mt-2 flex items-center text-base text-black cursor-pointer transition-colors duration-200 hover:bg-gray-200 p-2 rounded">
          <FaClipboard className="mr-3 text-black" />
          <Link to="/logs">All Logs</Link>
        </li>

        <li className="mt-2 flex items-center text-base text-black cursor-pointer transition-colors duration-200 hover:bg-gray-200 p-2 rounded">
          <FaUser className="mr-3 text-black" />
          <Link to="/logout">Log Out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
