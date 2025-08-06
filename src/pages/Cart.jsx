import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Text';
import { assets } from '../assets/assets/frontend_assets/assets';
import { FaBoxOpen } from 'react-icons/fa'; // Import an icon for empty cart
import CartTotals from './CartTotals';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, products, currency, updateCartItems, calculateCartTotals } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
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

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='container flex-grow mx-auto px-4   border-t-2 border-gray-200'>
        <div className='mt-10'>
          <Title text1={'Your'} text2={'Cart'} />
        </div>
        <div className='mt-3'>
          {cartData.length === 0 ? (
            <div className='flex flex-col items-center justify-center h-64'>
              <FaBoxOpen className='text-6xl text-gray-400 mb-4' />
              <p className='text-lg text-gray-500'>Your cart is empty</p>
            </div>
          ) : (
            cartData.map((item, index) => {
              const product = products.find(product => product._id === item._id);

              return (
                <div key={index} className='flex sm:flex-row mb-4 border-t-[1px] pt-4'>
                  <img src={product.image[0]} className='max-w-[90px] object-cover mb-4 sm:mb-0' alt={product.name} />
                  <div className='ml-5 w-full '>
                    <p className='font-bold text-lg sm:text-xl'>{product.name}</p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center pt-2 justify-between">
                      <div className='flex items-center mb-4 sm:mb-0'>
                        <p className='font-semibold text-base sm:text-lg'>{currency}{product.price}</p>
                        <p className='ml-4 sm:ml-10 text-sm sm:text-base px-2 py-1 bg-gray-100'>{item.size}</p>
                      </div>

                      <div className='flex items-center justify-center sm:justify-between'>
                        <div className='flex items-center mr-auto sm:mr-20 border border-gray-700 rounded w-30 h-7 sm:w-auto'>
                          <button
                            onClick={() => updateCartItems(item._id, item.size, Math.max(item.quantity - 1, 1) - item.quantity)}
                            className='px-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-200 h-6 flex items-center rounded'
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            id="quantity"
                            value={item.quantity}
                            min={1}
                            max={product.sizeQuantities[item.size] || 0}
                            onChange={(e) => {
                              const value = Number(e.target.value);
                              if (value >= 1 && value <= (product.sizeQuantities[item.size] || 0)) {
                                updateCartItems(item._id, item.size, value - item.quantity);
                              }
                            }}
                            className='border-0 w-auto text-center '
                          />
                          <button
                            onClick={() => updateCartItems(item._id, item.size, Math.min(item.quantity + 1, product.sizeQuantities[item.size]) - item.quantity)}
                            className='px-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-200 h-6 flex items-center rounded'
                            disabled={item.quantity >= (product.sizeQuantities[item.size] || 0)}
                          >
                            +
                          </button>
                        </div>
                        <div className="ml-2 mr-5 sm:mr-10">
                          <img src={assets.bin_icon} className='w-6 cursor-pointer' alt="Delete" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        {cartData.length > 0 && (
          <div className='w-full float-end md:w-1/2'>
            <CartTotals />
            <div className='w-full md:w-[80%] md:mx-auto  mb-10 '>
              <button onClick={() => navigate('/place-order')} className='mt-10 mx-auto flex items-center justify-center py-3 min-w-[70%] sm:w-[100%] sm:px-8 sm:py-3 text-sm sm:text-lg bg-black text-white rounded-sm shadow-lg hover:bg-gray-800 transition duration-300'>
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;