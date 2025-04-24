import { DataGrid } from "@mui/x-data-grid";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserRequest } from "../requestMethods";
import { useEffect } from "react";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);


  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full object-cover mr-3"
              src={params.row.img}
              alt={params.row.title}
              height="100px"
              width="100px"
            />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "brand", headerName: "Brand", width: 150 },
    { field: "originalPrice", headerName: "Price ($)", width: 100 },
    { field: "inStock", headerName: "In Stock", width: 100 },

    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      renderCell: (params) => (
        <Link to={`/product/${params.id}`}>
          
            <button className="text-black cursor-pointer">edit</button>
          
        </Link>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 80,
      renderCell: (params) => (
        <FaTrash
          className="text-red-500 cursor-pointer"
          onClick={() => console.log("Delete", params.row.id)}
        />
      ),
    },
  ];


  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await UserRequest.get("/products");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="text-black p-5 w-[70vw]">
      <div className="flex items-center justify-between m-[30px]">
        <h1 className="m-[20px] text-[20px]">All Products</h1>
        <Link to="/addproduct">
          <button className="bg-[#1e1e1e] p-[10px] font-semibold text-white cursor-pointer rounded">
            Create
          </button>
        </Link>
      </div>
      <div className="m-[30px] h-[600px]">
        <DataGrid
          rows={products}
          getRowId={(row) => row._id}
          columns={columns}
          checkboxSelection
          
        />
      </div>
    </div>
  );
};

export default Products;
