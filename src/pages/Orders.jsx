import React, { useContext } from 'react';
import Title from '../components/Text';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const randomStatus = () => {
  const statuses = ['pending', 'processing', 'delivered'];
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
};
const Orders = () => {
  const { products } = useContext(ShopContext);
  const navigate = useNavigate();
 

  return (
    <section className="container mx-auto px-4 py-16">
      <Title text1="My" text2="Orders" />

      <div className="space-y-8 mt-12">
        {products.slice(0, 5).map((order, index) => (
          <OrderItem key={index} order={order} navigate={navigate} />
        ))}
      </div>
    </section>
  );
};

const OrderItem = ({ order, navigate }) => (
  <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row overflow-hidden transition-all duration-300 hover:shadow-xl">
    <div className="md:w-1/3 p-4 flex items-center justify-center">
      <img src={order.image[0]} alt='product image' className='w-32 h-32 object-cover rounded-full' />
    </div>

    <div className="md:w-full p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h3 className="text-xl font-semibold">{order.name}</h3>
        <span className="font-medium text-green-600">$300</span>
      </div>
      <p className="text-gray-600 mt-2">Order ID: #1281378737213</p>

      <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
        <div>
          <dt className="font-semibold">Quantity</dt>
          <dd>3</dd>
        </div>
        <div>
          <dt className="font-semibold">Status</dt>
          <dd>Pending</dd>
        </div>
        <div>
          <dt className="font-semibold">Date</dt>
          <dd>{new Date().toLocaleDateString()}</dd>
        </div>
      </dl>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 ${randomStatus() === 'delivered' ? 'bg-green-600' : 'bg-gray-300'}`}></span>
          <p className="relative"> {randomStatus() === 'delivered' ? 'Delivered' : 'Pending'}</p>
        </div>
        <button onClick={()=> navigate(`/orders/${order._id}`, { state: { order } })} className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
          View Details
        </button>
      </div>
    </div>
  </div>
);

export default Orders;
