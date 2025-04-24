import { DataGrid } from "@mui/x-data-grid";
import { FaTrash } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";
import {UserRequest } from "../requestMethods"

const Users = () => {
   

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

  const [users,setUsers] = useState([]);

  useEffect(() => {
    
    const getUsers = async() => {
      try{
        const res = await UserRequest.get("/users");
        setUsers(res.data)
      }catch(error){
        console.log(error)
      }
    }

    getUsers();
  },[])

  return (
    <div className="p-5 w-[70vw]">
      <div className="flex items-center justify-between m-[30px]">
        <h1 className="m-[20px]  text-black text-[20px]">All Users</h1>
      </div>
      <div className="m-[30px] h-[400px]">
        <DataGrid
          rows={users}
          columns={columns}
          getRowId={(row) => row._id}
           
          checkboxSelection
          
        />
      </div>
    </div>
  );
};

export default Users;
