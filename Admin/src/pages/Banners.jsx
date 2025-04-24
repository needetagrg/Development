import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { UserRequest } from "../requestMethods";
import { useEffect } from "react";

const Banners = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState("");
  const [banners, setBanners] = useState([]);
  const [uploading, setUploading] = useState("Uploading 0%");

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  useEffect(() => {
    const getBanners = async () => {
      try {
        const res = await UserRequest.get("/banners");
        setBanners(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBanners();
  }, []);

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
      setImage(url);
      setUploading("uploaded 100%");
      await UserRequest.post("/banners", { img: url, title, subtitle });
    } catch (error) {
      console.log("Error:", error);
      setUploading("uploading failed");
    }
  };

  const handleDelete = async (id) => {
    try {
      await UserRequest.delete(`/banners/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex gap-8 p-6">
      {/* LEFT */}
      <div className="flex-1">
        <h2 className="text-2xl text-black font-semibold mb-6">
          Active Banner
        </h2>

        {banners?.map((banner, index) => (
          <div className="space-y-6 shadow-md rounded-lg bg-white" key={index}>
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <img
                src={banner.img}
                alt=''
                className="w-32 h-32 object-cover rounded-md"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-xl font-semibold text-black mb-2">
                  {banner.title}
                </h3>
                <p className="text-gray-600">{banner.subtitle}</p>
              </div>
              <button
                className="text-white bg-red-500 px-4 py-2 font-semibold rounded-md hover:bg-red-600 transition-colors"
                onClick={() => handleDelete(banner._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT */}
      <div className="flex flex-col">
        <div className="flex-1 bg-white p-5 rounded-md shadow-md">
          <span htmlFor="" className="text-black font-semibold mb-">
            Insert image:
          </span>
          <div className="flex flex-col">
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

            <span className="text-green-500 mt-[20px]">{uploading}</span>
          </div>

          <div className="flex flex-col h-15 my-3">
            <span className="font-semibold text-black">Title</span>
            <input
              type="text"
              className="w-[250px] bg-white outline-none border-b-2 border-[#444] border-solid"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>

          <div className="flex flex-col h-15 my-3">
            <span className="font-semibold text-black">Subtitle</span>
            <input
              type="text"
              className="w-[250px] bg-white outline-none border-b-2 border-[#444] border-solid"
              onChange={(e) => setSubtitle(e.target.value)}
            ></input>
          </div>

          <button
            className="text-white bg-black px-4 py-2 font-semibold rounded-md hover:bg-red-600 transition-colors"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banners;