import { LineChart } from "@mui/x-charts";
import { FaUpload } from "react-icons/fa";

const Product = () => {
  return (
    <div className="p-5 w-[70vw]">
      {/* FIRSTPART */}
      <div className="flex items-center justify-between  text-black mb-5">
        <h3 className="text-3xl font-semibold">Product</h3>
        <button className="bg-black text-white py-2 px-4 rounded">
          Create
        </button>
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
        <div className="flex-1 bg-white p-5 shadow-lg rounded-lg">
          <div className="flex items-center mb-5">
            <img src="/image.png " alt="" className="h-20 w-20 rounded-full" />
            <span className=" text-2xl text-black font-semibold ml-[20px]">
              Glow Recipe: Avocado Ceramide Recovery Serum
            </span>
          </div>
          <div className="space-y-3 text-black">
            <div className="flex justify-between">
              <span className="font-semibold">ID:</span>
              <span>114</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Sales:</span>
              <span>13</span>
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
                placeholder=""
                className="w-full p-2 text-gray-600 bg-white border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="" className="text-black block mb-2 font-semibold">
                Product Description
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full p-2 text-gray-600 bg-white border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="" className="text-black block mb-2 font-semibold">
                Product Original Price
              </label>
              <input
                type="number"
                placeholder=""
                className="w-full p-2 text-gray-600 bg-white border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="" className="text-black block mb-2 font-semibold">
                Discounted Price{" "}
              </label>
              <input
                type="number"
                placeholder=""
                className="w-full p-2 text-gray-600 bg-white border border-gray-300 rounded"
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
                src="/image.png "
                alt=""
                className="h-40 w-40 rounded-full"
              />

              <label htmlFor="" className="cursor-pointer mt-6 ">
                <FaUpload className="text-black text-2xl " />
              </label>

              <button className="bg-black py-2 px-4 text-white rounded m-5">
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
