import { FaPlus, FaTrash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { UserRequest } from "../requestMethods";

const AddProduct = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputs, setInputs] = useState({});
  const [uploading, setUploading] = useState("Uploading 0%");
  const [selectedOptions, setSelectedOptions] = useState({
    concern: [],
    skintype: [],
    categories: [],
  });

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSelectedOptions((prev) => ({
      ...prev,
      [name]: [...prev[name], value],
    }));
  };

  const handleRemoveOption = (name, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [name]: prev[name].filter((option) => option !== value),
    }));
  };

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", selectedImage);
    data.append("upload_preset", "uploads");
    setUploading("uploading");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dcm2nrzke/image/upload",
        data
      );
      const { url } = uploadRes.data;
      
      setUploading("uploaded 100%");
      await UserRequest.post("/products", {img:url,...inputs, ...selectedOptions });
    } catch (error) {
      console.log("Error:", error);
      setUploading("uploading failed");
    }
  };

  return (
    <div className="p-4">
      <div className="p-4">
        <h1 className="text-2xl font-semibold text-black">Add Product</h1>
      </div>

      <div className="mt-4 bg-white p-4 shadow-lg rounded-lg">
        <form className="flex flex-col md:flex-row gap-6" onSubmit={handleUpload}>
          {/* LEFT */}
          <div className="flex-1 space-y-4">
            <div>
              <label htmlFor="" className="text-black font-semibold mb-4 block">
                Insert Product image:
              </label>
              {!selectedImage ? (
                <div className="flex flex-col">
                  <div className="border-2 h-[100px] w-[100px] border-[#444] border-solid rounded-md">
                    <div className="flex items-center justify-center h-full">
                      <label htmlFor="file" className="cursor-pointer">
                        <FaPlus className="text-[20px] text-black" />
                      </label>
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt=""
                  className="h-[100px] w-[100px] object-cover rounded-md"
                />
              )}
              <input
                type="file"
                id="file"
                onChange={imageChange}
                style={{ display: "none" }}
              />
            </div>

            <span className="text-green-500">{uploading}</span>

            <div>
              <label htmlFor="" className="block text-black mb-2 font-semibold">
                Product Name:
              </label>
              <input
                type="text"
                name="title"
                id=""
                placeholder="Enter Product name"
                onChange={handleChange}
                className="w-full p-2 border bg-white border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="" className="block text-black mb-2 font-semibold">
                Product Description:
              </label>
              <textarea
                name="desc"
                id=""
                rows={7}
                placeholder="Enter Product description"
                onChange={handleChange}
                className="w-full p-2 border bg-white border-gray-300 rounded-md resize-y"
              ></textarea>
            </div>

            <div>
              <label htmlFor="" className="block text-black mb-2 font-semibold">
                Product Original Price:
              </label>
              <input
                type="number"
                name="originalPrice" 
                id=""
                onChange={handleChange}
                placeholder="Enter Original Price"
                className="w-full p-2 border bg-white border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="" className="block text-black mb-2 font-semibold">
                Enter Product discounted price:
              </label>
              <input
                type="number"
                name="discountedPrice"
                id=""
                onChange={handleChange}
                placeholder="Enter Price"
                className="w-full p-2 border bg-white border-gray-300 rounded-md"
              />
            </div>
          </div>
          {/* RIGHT */}
          <div className="flex-1 space-y-5">
            <div>
              <label htmlFor="" className="block text-black mb-2 font-semibold">
                Enter Wholesale Price
              </label>
              <input
                type="number"
                name="wholesalePrice" 
                id=""
                onChange={handleChange}
                placeholder="Enter Price"
                className="w-full p-2 border bg-white border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="" className="block text-black mb-2 font-semibold">
                Enter Wholesale min. quantity
              </label>
              <input
                type="number"
                name="wholesaleMinPrice" 
                id=""
                onChange={handleChange}
                placeholder="Enter Quantity"
                className="w-full p-2 border bg-white border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="" className="block text-black mb-2 font-semibold">
                Brand:
              </label>
              <input
                type="text"
                name="brand"
                id=""
                onChange={handleChange}
                placeholder="Enter Brand name"
                className="w-full p-2 border bg-white border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="" className="block text-black mb-2 font-semibold">
                Skin type:
              </label>
              <select
                name="skintype"
                className="border-2 bg-white text-black border-[#444] border-solid p-2 mb-4 sm:mb-0 sm:mr-4"
                onChange={handleSelectChange}
              >
                <option disabled defaultValue={true}>
                  Select skin type
                </option>
                <option >All</option>
                <option >Dry</option>
                <option >Oily</option>
                <option >Combination</option>
                <option >Sensitive</option>
                <option >Normal</option>
                <option >Acne-Prone</option>
                <option >Mature</option>
              </select>
            </div>

            <div className="mt-2">
              {selectedOptions.skintype.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <span>{option}</span>
                  <FaTrash
                    className="cursor-pointer text-red-500"
                    onClick={() => handleRemoveOption("skintype", option)}
                  />
                </div>
              ))}
            </div>

            <div>
              <label htmlFor="" className="block text-black mb-2 font-semibold">
                Skin Concern:
              </label>
              <select
                name="concern"
                id=""
                className="border-2 bg-white text-black border-[#444] border-solid p-2 mb-4 sm:mb-0 sm:mr-4"
                onChange={handleSelectChange}
              >
                <option disabled defaultValue={true}>
                  Select skin concern
                </option>
                <option >Acne</option>
                <option >Hyperpigmentation</option>
                <option >Aging</option>
                <option >Pore Size</option>
                <option >Uneven Texture</option>
                <option >Dark Circles</option>
              </select>
            </div>

            <div className="mt-2">
              {selectedOptions.concern.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <span className="text-black">{option}</span>
                  <FaTrash
                    className="cursor-pointer text-red-500"
                    onClick={() => handleRemoveOption("skinconcern", option)}
                  />
                </div>
              ))}
            </div>

            <div>
              <label htmlFor="" className="block text-black mb-2 font-semibold">
                Product type:
              </label>
              <select
                name="categories"
                className="border-2 bg-white text-black border-[#444] border-solid p-2 mb-4 sm:mb-0 sm:mr-4"
                onChange={handleSelectChange}
              >
                <option disabled defaultValue={true}>
                  Select product type
                </option>
                <option >Cleanser</option>
                <option >Facemask</option>
                <option >Toner</option>
                <option >Essence</option>
                <option >Serum</option>
                <option >Moisturiser</option>
                <option >Sunscreen</option>
              </select>
            </div>

            <div className="mt-2">
              {selectedOptions.categories.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <span>{option}</span>
                  <FaTrash
                    className="cursor-pointer text-red-500"
                    onClick={() => handleRemoveOption("categories", option)}
                  />
                </div>
              ))}
            </div>

            <button
              className="bg-black text-white py-2 px-4 rounded-md"
              type="submit" 
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;