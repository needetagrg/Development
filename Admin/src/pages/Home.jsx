import React from 'react';
import { LineChart } from '@mui/x-charts';

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-200 p-2 text-black">
      {/* LEFT */}
      <div className="flex w-2/3 flex-col">
        <div className="flex flex-wrap">
          <div className="m-4 flex h-52 w-52 flex-col items-center justify-center rounded-lg bg-white shadow-xl">
            <div className="m-5 flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-red-400 border-solid">
              <h2 className="text-2xl font-bold">699</h2>
            </div>
            <h2 className="text-xl font-semibold">Orders</h2>
          </div>

          <div className="m-4 flex h-52 w-52 flex-col items-center justify-center rounded-lg bg-white shadow-xl">
            <div className="m-5 flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-orange-400 border-solid">
              <h2 className="text-2xl font-bold">22</h2>
            </div>
            <h2 className="text-xl font-semibold">Products</h2>
          </div>

          <div className="m-4 flex h-52 w-52 flex-col items-center justify-center rounded-lg bg-white shadow-xl">
            <div className="m-5 flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-green-400 border-solid">
              <h2 className="text-2xl font-bold">10</h2>
            </div>
            <h2 className="text-xl font-semibold">Users</h2>
          </div>
        </div>

        {/* TABLE */}
        <div className="m-4 flex-1 overflow-auto rounded-lg bg-white p-5 shadow-md">
          <h3 className="mb-4 text-lg font-bold">Latest Transactions</h3>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Customer</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">Jaanbi Gurung</td>
                <td className="px-4 py-2">NPR 8600</td>
                <td className="px-4 py-2 text-green-600">Pending</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Adit Karki</td>
                <td className="px-4 py-2">NPR 12400</td>
                <td className="px-4 py-2 text-red-600">Pending</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Muskan Pun</td>
                <td className="px-4 py-2">NPR 11600</td>
                <td className="px-4 py-2 text-green-600">Approved</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Alka Gurung</td>
                <td className="px-4 py-2">NPR 5200</td>
                <td className="px-4 py-2 text-red-600">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex-1 flex flex-col rounded-lg bg-white p-2 shadow-xl">
        <div className="mb-3 flex flex-col items-center rounded-lg bg-gray-50 p-3 shadow-lg">
          <h2 className="text-xl font-bold">Total Revenue: NPR 46000</h2>
        </div>
        <div className="mb-3 flex flex-col items-center rounded-lg bg-gray-50 p-3 shadow-lg">
          <h2 className="text-xl font-bold">Total Loss: NPR 0</h2>
        </div>
        <div className="flex-1">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10], grid: { stroke: '#e0e0e0' } }]}
            yAxis={[{ grid: { stroke: '#e0e0e0' } }]}
            series={[{ data: [2, 5.5, 2, 8.5, 1.5, 5] }]}
            width={400}
            height={300}
            margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;