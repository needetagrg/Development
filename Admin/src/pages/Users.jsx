import { DataGrid } from "@mui/x-data-grid";
import { FaTrash } from "react-icons/fa";

const Users = () => {
    const data = [
        {
          id: 1,
          name: "Sabin Shrestha",
          email: "sabin.shrestha@example.com",
          phoneNumber: "+977 9841-123456",
          role: "Admin",
        },
        {
          id: 2,
          name: "Rina Tamang",
          email: "rina.tamang@example.com",
          phoneNumber: "+977 9813-987654",
          role: "User",
        },
        {
          id: 3,
          name: "Kiran Magar",
          email: "kiran.magar@example.com",
          phoneNumber: "+977 9851-456789",
          role: "Editor",
        },
        {
          id: 4,
          name: "Anita Khadka",
          email: "anita.khadka@example.com",
          phoneNumber: "+977 9860-789012",
          role: "User",
        },
        {
          id: 5,
          name: "Ramesh Dahal",
          email: "ramesh.dahal@example.com",
          phoneNumber: "+977 9823-234567",
          role: "User",
        },
    ];

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phoneNumber", headerName: "Phone Number", width: 160 },
    { field: "role", headerName: "Role", width: 120 },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: () => {
        return (
          <>
            <FaTrash className="text-red-500 cursor-pointer" m-2 />
          </>
        );
      },
    },
  ];

  return (
    <div className="p-5 w-[70vw]">
      <div className="flex items-center justify-between m-[30px]">
        <h1 className="m-[20px]  text-black text-[20px]">All Users</h1>
      </div>
      <div className="m-[30px] h-[400px]">
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row) => row.id}
           
          checkboxSelection
          
        />
      </div>
    </div>
  );
};

export default Users;
