import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Text';
import { assets } from '../assets/assets/frontend_assets/assets';
import { ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import CartTotals from './CartTotals';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import CouponInput from '../components/CouponInput';

const Cart = () => {
  const { cartItems, products, currency, updateCartItems, calculateCartTotals } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    let tempCartData = [];
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        tempCartData.push({
          _id: productId,
          size: size,
          quantity: cartItems[productId][size]
        });
      }
    }
    setCartData(tempCartData);
  }, [cartItems]);

  const { subtotal, shippingFee, total } = calculateCartTotals();

  const removeFromCart = (productId, size) => {
    const currentQuantity = cartItems[productId][size];
    updateCartItems(productId, size, -currentQuantity);
  };

  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <div className='container flex-grow mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        {/* Apple-style header */}
        <div className='pt-16 pb-8'>
          <h1 className='text-4xl sm:text-5xl font-semibold text-gray-900 tracking-[-0.02em]'>
            Your Bag
          </h1>
          <p className='text-lg text-gray-600 mt-2 font-normal'>
            {cartData.length === 0 ? 'Your bag is empty' : `${cartData.length} item${cartData.length > 1 ? 's' : ''}`}
          </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-12'>
          {/* Cart items section */}
          <div className='flex-1'>
            {cartData.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className='flex flex-col items-center justify-center py-20 text-center'
              >
                <div className='w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6'>
                  <ShoppingBag className='w-10 h-10 text-gray-400' />
                </div>
                <h3 className='text-xl font-medium text-gray-900 mb-2'>Your bag is empty</h3>
                <p className='text-gray-600 mb-8 max-w-md'>
                  Looks like you haven't added anything to your bag yet. Start shopping to fill it up.
                </p>
                <Button 
                  onClick={() => navigate('/collection')}
                  className='bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300'
                >
                  Start Shopping
                </Button>
              </motion.div>
            ) : (
              <div className='space-y-6'>
                {cartData.map((item, index) => {
                  const product = products.find(product => product._id === item._id);

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="border-0 shadow-sm rounded-2xl overflow-hidden bg-gray-50/50">
                        <CardContent className="p-6">
                          <div className='flex flex-col sm:flex-row gap-6'>
                            {/* Product image */}
                            <div className='flex-shrink-0'>
                              <div className='w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-2xl overflow-hidden shadow-sm'>
                                <img 
                                  src={product.image[0]} 
                                  className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' 
                                  alt={product.name} 
                                />
                              </div>
                            </div>

                            {/* Product details */}
                            <div className='flex-1 space-y-4'>
                              <div>
                                <h3 className='text-lg font-medium text-gray-900 tracking-[-0.01em]'>
                                  {product.name}
                                </h3>
                                <p className='text-gray-600 text-sm mt-1'>Size: {item.size}</p>
                              </div>

                              <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                                {/* Price */}
                                <div className='text-xl font-semibold text-gray-900 tracking-[-0.02em]'>
                                  {currency}{(product.price * item.quantity).toFixed(2)}
                                </div>

                                {/* Quantity controls */}
                                <div className='flex items-center gap-4'>
                                  <div className='flex items-center bg-white rounded-full shadow-sm border border-gray-200'>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => updateCartItems(item._id, item.size, -1)}
                                      disabled={item.quantity <= 1}
                                      className='h-10 w-10 rounded-full hover:bg-gray-100 disabled:opacity-50'
                                    >
                                      <Minus className='w-4 h-4' />
                                    </Button>
                                    
                                    <span className='w-12 text-center text-sm font-medium'>
                                      {item.quantity}
                                    </span>
                                    
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => updateCartItems(item._id, item.size, 1)}
                                      disabled={item.quantity >= (product.sizeQuantities[item.size] || 0)}
                                      className='h-10 w-10 rounded-full hover:bg-gray-100 disabled:opacity-50'
                                    >
                                      <Plus className='w-4 h-4' />
                                    </Button>
                                  </div>

                                  {/* Remove button */}
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => removeFromCart(item._id, item.size)}
                                    className='h-10 w-10 rounded-full hover:bg-red-50 hover:text-red-600 transition-colors duration-200'
                                  >
                                    <Trash2 className='w-4 h-4' />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Cart summary - Apple style */}
          {cartData.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className='lg:w-80 xl:w-96'
            >
              <Card className="border-0 shadow-lg rounded-2xl bg-white sticky top-8">
                <CardContent className="p-8">
                  <h2 className='text-xl font-semibold text-gray-900 mb-6 tracking-[-0.01em]'>
                    Order Summary
                  </h2>
                  
                  <CartTotals />
                  
                  <Button 
                    onClick={() => navigate('/place-order')} 
                    className='w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full text-base font-medium transition-all duration-300 shadow-sm'
                  >
                    Checkout
                  </Button>
                  
                  <Button 
                    onClick={() => navigate('/collection')} 
                    variant="ghost"
                    className='w-full mt-3 text-blue-600 hover:text-blue-700 hover:bg-blue-50 py-3 rounded-full text-sm font-medium transition-all duration-300'
                  >
                    Continue Shopping
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
