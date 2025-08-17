import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { Package, Truck, CheckCircle, Clock, ArrowRight, Calendar } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const getRandomStatus = () => {
  const statuses = [
    { name: 'pending', icon: Clock, color: 'bg-yellow-100 text-yellow-800', bgColor: 'bg-yellow-500' },
    { name: 'processing', icon: Package, color: 'bg-blue-100 text-blue-800', bgColor: 'bg-blue-500' },
    { name: 'shipped', icon: Truck, color: 'bg-purple-100 text-purple-800', bgColor: 'bg-purple-500' },
    { name: 'delivered', icon: CheckCircle, color: 'bg-green-100 text-green-800', bgColor: 'bg-green-500' }
  ];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

const getRandomDate = () => {
  const dates = [
    '2024-01-15',
    '2024-01-10',
    '2024-01-08',
    '2024-01-05',
    '2024-01-02'
  ];
  return dates[Math.floor(Math.random() * dates.length)];
};

const Orders = () => {
  const { products } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Apple-style header */}
        <div className="pt-16 pb-8">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 tracking-[-0.02em]">
            Your Orders
          </h1>
          <p className="text-lg text-gray-600 mt-2 font-normal">
            Track and manage your recent orders
          </p>
        </div>

        {/* Orders list */}
        <div className="space-y-6 pb-16">
          {products.slice(0, 5).map((order, index) => (
            <OrderItem key={index} order={order} navigate={navigate} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const OrderItem = ({ order, navigate, index }) => {
  const status = getRandomStatus();
  const orderDate = getRandomDate();
  const orderPrice = (order.price * (1 + Math.random())).toFixed(2);
  const orderId = `#${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  const StatusIcon = status.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Card className="border-0 shadow-sm rounded-2xl overflow-hidden bg-gray-50/30 hover:shadow-md transition-all duration-500">
        <CardContent className="p-0">
          <div className="flex flex-col lg:flex-row">
            {/* Product image section */}
            <div className="lg:w-64 p-6 flex items-center justify-center">
              <div className="w-40 h-40 bg-white rounded-2xl overflow-hidden shadow-sm">
                <img 
                  src={order.image[0]} 
                  alt={order.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Order details section */}
            <div className="flex-1 p-6 lg:pl-0">
              <div className="flex flex-col h-full justify-between space-y-6">
                {/* Header section */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 tracking-[-0.01em] mb-2">
                        {order.name}
                      </h3>
                      <p className="text-sm text-gray-600 font-mono">
                        Order {orderId}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-semibold text-gray-900 tracking-[-0.02em]">
                        ${orderPrice}
                      </p>
                    </div>
                  </div>

                  {/* Status badge */}
                  <div className="flex items-center gap-3">
                    <Badge className={`${status.color} px-3 py-1.5 text-xs font-medium rounded-full border-0`}>
                      <StatusIcon className="w-3 h-3 mr-1.5" />
                      {status.name.charAt(0).toUpperCase() + status.name.slice(1)}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-600 gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(orderDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                </div>

                {/* Order info grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Quantity</p>
                    <p className="font-medium text-gray-900">{Math.floor(Math.random() * 3) + 1}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Size</p>
                    <p className="font-medium text-gray-900">
                      {['XS', 'S', 'M', 'L', 'XL'][Math.floor(Math.random() * 5)]}
                    </p>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <p className="text-sm text-gray-600 mb-1">Delivery</p>
                    <p className="font-medium text-gray-900">
                      {status.name === 'delivered' ? 'Delivered' : 'Est. 3-5 days'}
                    </p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    onClick={() => navigate(`/orders/${order._id}`, { state: { order } })}
                    className="flex-1 bg-black hover:bg-gray-800 text-white py-3 rounded-full font-medium transition-all duration-300 shadow-sm"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  
                  {status.name !== 'delivered' && (
                    <Button
                      variant="outline"
                      className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-full font-medium transition-all duration-300"
                    >
                      Track Order
                    </Button>
                  )}
                  
                  {status.name === 'delivered' && (
                    <Button
                      variant="outline"
                      className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-full font-medium transition-all duration-300"
                    >
                      Buy Again
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Progress indicator for non-delivered orders */}
          {status.name !== 'delivered' && (
            <div className="px-6 pb-6">
              <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-full ${status.bgColor} transition-all duration-500 rounded-full`}
                  style={{ 
                    width: status.name === 'pending' ? '25%' : 
                           status.name === 'processing' ? '50%' : 
                           status.name === 'shipped' ? '75%' : '100%' 
                  }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-600 mt-2">
                <span>Order Placed</span>
                <span>Processing</span>
                <span>Shipped</span>
                <span>Delivered</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Orders;
