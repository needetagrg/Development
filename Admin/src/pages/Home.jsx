import React, { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts';
import { UserRequest } from '../requestMethods'; // Adjust the path as needed

const Home = () => {
  const [orderCount, setOrderCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [latestTransactions, setLatestTransactions] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [revenueTrendData, setRevenueTrendData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        // Fetch total order count
        const ordersRes = await UserRequest.get('/orders');
        setOrderCount(ordersRes.data.length);

        // Fetch total product count
        const productsRes = await UserRequest.get('/products');
        setProductCount(productsRes.data.length);

        // Fetch total user count
        const usersRes = await UserRequest.get('/users');
        setUserCount(usersRes.data.length);

        // Fetch latest transactions
        const latestOrders = ordersRes.data.slice(0, 5); 
        setLatestTransactions(latestOrders.map(order => ({
          _id: order._id,
          customerName: order.name, 
          amount: order.total,
          status: order.status === 3 ? 'Completed' : order.status === 0 ? 'Pending' : 'Processing',
        })));

        // Calculate total revenue (you might need to filter for completed orders)
        const completedOrders = ordersRes.data.filter(order => order.status === 3); 
        const revenue = completedOrders.reduce((sum, order) => sum + order.total, 0);
        setTotalRevenue(revenue);

        const trendData = []; // Implement logic to process orders by date
        setRevenueTrendData(trendData);

        setLoading(false);
      } catch (err) {
        setError(err.message || 'Failed to fetch dashboard data');
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="flex h-screen bg-gray-200 p-2 text-black">
      {loading ? (
        <div>Loading dashboard data...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          {/* LEFT */}
          <div className="flex w-2/3 flex-col">
            <div className="flex flex-wrap">
              <div className="m-4 flex h-52 w-52 flex-col items-center justify-center rounded-lg bg-white shadow-xl">
                <div className="m-5 flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-red-400 border-solid">
                  <h2 className="text-2xl font-bold">{orderCount}</h2>
                </div>
                <h2 className="text-xl font-semibold">Orders</h2>
              </div>

              <div className="m-4 flex h-52 w-52 flex-col items-center justify-center rounded-lg bg-white shadow-xl">
                <div className="m-5 flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-orange-400 border-solid">
                  <h2 className="text-2xl font-bold">{productCount}</h2>
                </div>
                <h2 className="text-xl font-semibold">Products</h2>
              </div>

              <div className="m-4 flex h-52 w-52 flex-col items-center justify-center rounded-lg bg-white shadow-xl">
                <div className="m-5 flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-green-400 border-solid">
                  <h2 className="text-2xl font-bold">{userCount}</h2>
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
                  {latestTransactions.map((transaction) => (
                    <tr key={transaction._id} className="border-b">
                      <td className="px-4 py-2">{transaction.customerName}</td>
                      <td className="px-4 py-2">NPR {transaction.amount}</td>
                      <td className={`px-4 py-2 ${transaction.status === 'Completed' ? 'text-green-600' : transaction.status === 'Pending' ? 'text-yellow-600' : 'text-blue-600'}`}>{transaction.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex flex-col rounded-lg bg-white p-2 shadow-xl">
            <div className="mb-3 flex flex-col items-center rounded-lg bg-gray-50 p-3 shadow-lg">
              <h2 className="text-xl font-bold">Total Revenue: NPR {totalRevenue}</h2>
            </div>
            <div className="mb-3 flex flex-col items-center rounded-lg bg-gray-50 p-3 shadow-lg">
              <h2 className="text-xl font-bold">Total Loss: NPR 0</h2> 
            </div>
            <div className="flex-1">
              <LineChart
                xAxis={[{ data: revenueTrendData.map(item => item.date), grid: { stroke: '#e0e0e0' } }]}
                yAxis={[{ grid: { stroke: '#e0e0e0' } }]}
                series={[{ data: revenueTrendData.map(item => item.revenue) }]}
                width={400}
                height={300}
                margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;