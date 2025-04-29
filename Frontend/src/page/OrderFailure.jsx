import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { clearCart } from '../redux/cartRedux';

const OrderFailure = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get('orderId');
  const dispatch = useDispatch(); // Correctly get the dispatch function

  useEffect(() => {
    dispatch(clearCart()); // Call the clearCart action creator
  }, [dispatch]); // Include dispatch in the dependency array

  return (
    <div className="min-h-screen flex justify-center items-center bg-red-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">Payment Failed!</h2>
        {orderId && <p className="text-gray-700 mb-2">Your order ID is: {orderId}</p>}
        <p className="text-gray-700">There was an issue processing your payment.</p>
        <p className="text-gray-700">Please try again or contact support.</p>
        {/* You can add a link to the cart or contact support page here */}
      </div>
    </div>
  );
};

export default OrderFailure;