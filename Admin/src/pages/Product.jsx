import { LineChart } from "@mui/x-charts";
import { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { UserRequest } from "../requestMethods";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [inputs, setInputs] = useState({});


  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await UserRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, []);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleUpdate = async () => {
    try {
      await UserRequest.put(`/products/${id}`, { ...inputs });
      console.log("product updated")
    } catch (error) {
      console.log(error);
      console.log("product update failed")

    }
  };


  return (
    <div className="p-5 w-[70vw]">
      {/* FIRSTPART */}
      <div className="flex items-center justify-between  text-black mb-5">
        <h3 className="text-3xl font-semibold">Product</h3>
        <Link to="/addproduct">
          <button className="bg-[#1e1e1e] p-[10px] font-semibold text-white cursor-pointer rounded">
            Create
          </button>
        </Link>
      </div>

      {/* SECONDPART */}
      <div className="flex flex-col md:flex-row gap-5">
        {/* CART */}
        <div className="flex-1">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            height={250}
            width={500}
            margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
            grid={{ vertical: true, horizontal: true }}
          />
        </div>

        {/* PRODUCTCART */}
        <div className="flex-1 bg-white text-black p-5 shadow-lg rounded-lg">
          <div className="flex items-center mb-5">
            <img src={product.img} alt="" className="h-20 w-20 rounded-full" />
            <span className=" text-2xl text-black font-semibold ml-[20px]">
              Glow Recipe: Avocado Ceramide Recovery Serum
            </span>
          </div>
          <div className="space-y-3 text-black">
            <div className="flex justify-between">
              <span className="font-semibold">ID:</span>
              <span>{product._id}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Sales:</span>
              <span>{product._id}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">In stock:</span>
              <span>Yes</span>
            </div>
          </div>
        </div>
      </div>

      {/* THIRDPART */}
      <div className="mt-5 bg-white p-5 shadow-lg rounded-lg">
        <form action="" className="flex flex-col md:flex-row gap-5">
          {/* LEFTSIDE */}
          <div className="flex-1 space-y-5">
            <div>
              <label htmlFor="" className="text-black block mb-2 font-semibold">
                Product Name
              </label>
              <input
                type="text"
                name="title"
                placeholder={product.title}
                className="w-full p-2 text-gray-600 bg-white border border-gray-300 rounded"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="" className="text-black block mb-2 font-semibold">
                Product Description
              </label>
              <input
                type="text"
                name="desc"
                placeholder={product.desc}
                className="w-full p-2 text-gray-600 bg-white border border-gray-300 rounded"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="" className="text-black block mb-2 font-semibold">
                Product Original Price
              </label>
              <input
                type="number"
                name="originalPrice"
                placeholder={product.originalPrice}
                className="w-full p-2 text-gray-600 bg-white border border-gray-300 rounded"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="" className="text-black block mb-2 font-semibold">
                Discounted Price{" "}
              </label>
              <input
                type="number"
                name="discountedPrice"
                placeholder={product.discountedPrice}
                className="w-full p-2 text-gray-600 bg-white border border-gray-300 rounded"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="" className="text-black block mb-2 font-semibold">
                In stock
              </label>
              <select className="w-full p-2 text-gray-600 bg-white border border-gray-300 rounded">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          {/* RIGHTSIDE */}
          <div className="flex-1 flex flex-col items-center space-y-8">
            <div className="flex flex-col items-center">
              <img
                src={product.img}
                alt=""
                className="h-40 w-40 rounded-full"
              />

              <label htmlFor="" className="cursor-pointer mt-6 ">
                <FaUpload className="text-black text-2xl " />
              </label>

              <button className="bg-black py-2 px-4 text-white rounded m-5" onClick={handleUpdate}>
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
