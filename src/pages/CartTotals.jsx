import React, { useContext } from 'react';
import Title from '../components/Text'; 
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const CartTotals = () => {
    const { calculateCartTotals, currency } = useContext(ShopContext);
    const { subtotal, shippingFee, totalAmount } = calculateCartTotals();
    console.log(subtotal, shippingFee, totalAmount, currency);
    return (
        <div className='flex flex-col justify-center mt-10  sm:flex sm:justify-end sm:mt-16 mb-10'>
            <Title text1={'CART'} text2={`TOTALS`} />
            <div className='flex flex-col sm:w-full mt-4'>
                <div className='flex justify-between'>
                    <p className='text-lg'>Subtotal</p>
                    <p className='text-lg font-semibold'>{currency}{subtotal.toFixed(2)}</p>
                </div>
                <div className='flex justify-between mt-2'>
                    <p className='text-lg '>Shipping Fee</p>
                    <p className='text-lg font-semibold'>{currency}{shippingFee.toFixed(2)}</p>
                </div>
                <div className='flex justify-between mt-2 border-t pt-2'>
                    <p className='text-lg font-semibold'>Total</p>
                    <p className='text-lg font-semibold'>{currency}{totalAmount.toFixed(2)}</p>
                </div>
            </div>
            
        </div>
    );
};

export default CartTotals;