import { DataGrid } from '@mui/x-data-grid';
import { FaCheckCircle, FaCheckDouble, FaClock } from 'react-icons/fa';


const Orders = () => {
  
  const columns = [
    { field: "id", headerName: "Order ID", width: 100 },
    { field: "name", headerName: "Customer Name", width: 200 },
    { field: "email", headerName: "Customer Email", width: 150 },
    {
        field: "status",
        headerName: "Status",
        width: 100,
        renderCell: (params) => {
            return (
                <>
                    {params.row.status === 0 || params.row.status === 1 ? (
                        <FaClock className="text-yellow-500 text-[25px] cursor-pointer mt-2" />
                    ) : (
                        <FaCheckDouble className="text-green-500 text-[25px]" />
                    )}
                </>
            );
        },
    },
    {
        field: "Deliver",
        headerName: "Mark as Delivered",
        width: 150,
        renderCell: (params) => {
            return (
                <>
                    {params.row.status === 1 || params.row.status === 0 ? (
                        <FaCheckCircle className="text-[25px] cursor-pointer mt-2" />
                    ) : (
                        ""
                    )}
                </>
            );
        },
    },
];

  const data = [
    { id: "old1", name: "Aarav Sharma", email: "aarav.sharma@example.com", status: 1 },
    { id: "old2", name: "Bimala Thapa", email: "bimala.thapa@example.com", status: 0 },
    { id: "old3", name: "Chetan Gurung", email: "chetan.gurung@example.com", status: 2 },
    { id: "old4", name: "Dipti Karki", email: "dipti.karki@example.com", status: 1 },
    { id: "old5", name: "Eshaan Rana", email: "eshaan.rana@example.com", status: 0 },
    { id: "old6", name: "Gita Adhikari", email: "gita.adhikari@example.com", status: 1 },
    { id: "old7", name: "Hari Pokharel", email: "hari.pokharel@example.com", status: 2 },
    { id: "old8", name: "Indira Bhattarai", email: "indira.bhattarai@example.com", status: 0 }
];




  return (
    <div className="p-5 w-[70vw]">
    <div className="flex items-center justify-between m-[30px]">
        <h1 className="m-[20px]  text-black text-[20px]">All Orderss</h1>
    </div>
    <div className="m-[30px] h-[400px]">
        <DataGrid 
          rows={data} 
          columns={columns} 
          getRowId={(row) => row.id}
          pageSize={8}
          checkboxSelection
          rowsPerPageOptions={[8]}
          disableSelectionOnClick
        />
    </div>
</div>
  )
}

export default Orders

