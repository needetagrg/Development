import { DataGrid } from "@mui/x-data-grid";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = () => {
  const data = [
    {
      id: "101",
      title: "Moisturizing Cream",
      brand: "COSRX",
      img: "https://images.pexels.com/photos/6621337/pexels-photo-6621337.jpeg",
      desc: "Hydrating cream for dry skin.",
      price: 25.99,
      instock: true,
    },
    {
      id: "102",
      title: "Revitalizing Serum",
      brand: "Missha",
      img: "https://images.pexels.com/photos/6621355/pexels-photo-6621355.jpeg",
      desc: "Anti-aging serum with peptides.",
      price: 45.99,
      instock: false,
    },
    {
      id: "103",
      title: "Exfoliating Scrub",
      brand: "Innisfree",
      img: "https://images.pexels.com/photos/6621339/pexels-photo-6621339.jpeg",
      desc: "Gentle physical exfoliator.",
      price: 20.00,
      instock: true,
    },
    {
      id: "104",
      title: "Anti-Aging Cream",
      brand: "Sulwhasoo",
      img: "https://images.pexels.com/photos/6621380/pexels-photo-6621380.jpeg",
      desc: "Luxury anti-wrinkle treatment.",
      price: 55.00,
      instock: true,
    },
    {
      id: "105",
      title: "Cleansing Gel",
      brand: "The Face Shop",
      img: "https://images.pexels.com/photos/6621350/pexels-photo-6621350.jpeg",
      desc: "pH-balanced daily cleanser.",
      price: 18.00,
      instock: false,
    },
    {
      id: "106",
      title: "Sun Protection Lotion",
      brand: "Dr. Jart+",
      img: "https://images.pexels.com/photos/6621410/pexels-photo-6621410.jpeg",
      desc: "SPF 50+ PA++++ sunscreen.",
      price: 22.99,
      instock: true,
    },
    {
      id: "107",
      title: "Hydrating Face Mask",
      brand: "Laneige",
      img: "https://images.pexels.com/photos/6621370/pexels-photo-6621370.jpeg",
      desc: "Overnight water sleeping mask.",
      price: 30.00,
      instock: false,
    },
    {
      id: "108",
      title: "Vitamin C Serum",
      brand: "Dear, Klairs",
      img: "https://images.pexels.com/photos/6621360/pexels-photo-6621360.jpeg",
      desc: "Brightening vitamin C treatment.",
      price: 50.00,
      instock: true,
    }
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <img 
              className="h-10 w-10 rounded-full object-cover mr-3"
              src={params.row.img} 
              alt={params.row.title}
            />
            {params.row.title}
          </div>
        );
      }
    },
    { 
      field: "desc", 
      headerName: "Description", 
      width: 150 
    },
    { 
      field: "price", 
      headerName: "Price (NPR)", 
      width: 120,
      renderCell: (params) => `NPR ${params.value.toFixed(2)}`
    },
    { 
      field: "instock", 
      headerName: "In Stock", 
      width: 120,
      renderCell: (params) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          params.value ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {params.value ? 'True' : 'False'}
        </span>
      )
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 80,
      renderCell: (params) => (
        <Link to={`/edit-product/${params.row.id}`}>
          <FaEdit className="text-blue-500 cursor-pointer" />
        </Link>
      )
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
      )
    }
  ];

  return (
    <div className="text-black p-5 w-[70vw]">
      <div className="flex items-center justify-between m-[30px]">
        <h1 className="m-[20px] text-[20px]">All Products</h1>
        <Link 
          to="/create-product"
          className="bg-[#1e1e1e] p-[10px] font-semibold text-white cursor-pointer rounded"
        >
          Create
        </Link>
      </div>
      <div className="m-[30px] h-[600px]">
        <DataGrid 
          rows={data} 
          columns={columns} 
          getRowId={(row) => row.id}
          // pageSize={8}
          checkboxSelection
          // rowsPerPageOptions={[8]}
          // disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Products;