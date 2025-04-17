import { FaPlus } from "react-icons/fa";

const AddProduct = () => {
  return (
    <div className="p-4">
      <div className="p-4">
        <h1 className="text-2xl font-semibold text-black">Add Product</h1>
      </div>

      <div className="mt-4 bg-white p-4 shadow-lg rounded-lg">
        <form className="flex flex-col md:flex-row gap-6">
          {/* LEFT */}
          <div className="flex-1 space-y-4">
            <div>
              <label htmlFor="" className="text-black font-semibold mb-4 block">
                Insert Product image:
              </label>
              <div className="flex flex-col">
                <div className="border-2 h-[100px] w-[100px] border-[#444] border-solid rounded-md">
                  <div className="flex items-center justify-center h-full">
                    <label htmlFor="" className="cursor-pointer">
                      <FaPlus className="text-[20px] text-black" />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="" className="block text-black mb-2 font-semibold">
                Product Name:
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Product name"
                className="w-full p-2 border bg-white border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="" className="block text-black mb-2 font-semibold">
                Product Description:
              </label>
              <textarea
                name=""
                id=""
                rows={7}
                placeholder="Product description"
                className="w-full p-2 border bg-white border-gray-300 rounded-md resize-y"
              ></textarea>
            </div>

            <div>
              <label htmlFor="" className="block text-black mb-2 font-semibold">
                Product Original Price:
              </label>
              <input
                type="number"
                name=""
                id=""
                placeholder="NPR"
                className="w-full p-2 border bg-white border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="" className="block text-black mb-2 font-semibold">
                Product Discounted price:
              </label>
              <input
                type="number"
                name=""
                id=""
                placeholder="NPR"
                className="w-full p-2 border bg-white border-gray-300 rounded-md"
              />
            </div>
          </div>
          {/* RIGHT */}
          <div className="flex-1 space-y-5 ">
            <div>
              <label htmlFor="" className="block text-black mb-2 font-semibold">
                Wholesale Price
              </label>
              <input
                type="number"
                name=""
                id=""
                placeholder="NPR"
                className="w-full p-2 border bg-white border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="" className="block text-black mb-2 font-semibold">
                Brand:
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Brand name"
                className="w-full p-2 border bg-white border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="" className="block text-black mb-2 font-semibold">
              Skin type:
              </label>
              <select
                name=""
                id=""
                className="border-2 bg-white text-black border-[#444] border-solid p-2 mb-4 sm:mb-0 sm:mr-4"
              >
                <option value="" disabled selected>
                  Select skin type
                </option>
                <option value="Dry">Dry</option>
                <option value="Oily">Oily</option>
                <option value="Combination">Combination</option>
                <option value="Sensitive">Sensitive</option>
                <option value="Normal">Normal</option>
                <option value="Acne-Prone">Acne-Prone</option>
                <option value="Mature">Mature</option>
              </select>
            </div>
            <div>
              <label htmlFor="" className="block text-black mb-2 font-semibold">
                Product type:
              </label>
              <select
                name=""
                id=""
                className="border-2 bg-white text-black border-[#444] border-solid p-2 mb-4 sm:mb-0 sm:mr-4"
              >
                <option value="" disabled selected>
                  Select product type
                </option>
                <option value="Cleanser">Cleanser</option>
                <option value="Facemask">Facemask</option>
                <option value="Toner">Toner</option>
                <option value="Essence">Essence</option>
                <option value="Serum">Serum</option>
                <option value="Moisturiser">Moisturiser</option>
                <option value="Sunscreen">Sunscreen</option>
              </select>
            </div>
            <button className="bg-black text-white py-2 px-4 rounded-md">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
