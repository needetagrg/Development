import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderSuccess = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get('orderId');

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Payment Successful!</h2>
        {orderId && <p className="text-gray-700 mb-2">Your order ID is: {orderId}</p>}
        <p className="text-gray-700">Thank you for your purchase.</p>
        {/* You can add a link to the order history page here */}
      </div>
    </div>
  );
};

export default OrderSuccess;