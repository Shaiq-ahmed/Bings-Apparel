import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import { Clock, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const RecentlyViewed = ({ currentProductId = null }) => {
  const { products } = useContext(ShopContext);
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    // Get recently viewed products from localStorage
    const getRecentlyViewed = () => {
      const stored = localStorage.getItem('recentlyViewed');
      return stored ? JSON.parse(stored) : [];
    };

    setRecentlyViewed(getRecentlyViewed());
  }, []);

  // Add product to recently viewed
  const addToRecentlyViewed = (productId) => {
    if (!productId) return;

    const stored = localStorage.getItem('recentlyViewed');
    let recentList = stored ? JSON.parse(stored) : [];
    
    // Remove if already exists to avoid duplicates
    recentList = recentList.filter(id => id !== productId);
    
    // Add to beginning of array
    recentList.unshift(productId);
    
    // Keep only last 8 items
    recentList = recentList.slice(0, 8);
    
    localStorage.setItem('recentlyViewed', JSON.stringify(recentList));
    setRecentlyViewed(recentList);
  };

  // Auto-add current product to recently viewed
  useEffect(() => {
    if (currentProductId) {
      const timer = setTimeout(() => {
        addToRecentlyViewed(currentProductId);
      }, 2000); // Add after 2 seconds of viewing

      return () => clearTimeout(timer);
    }
  }, [currentProductId]);

  // Filter out current product and get product data
  const getRecentProducts = () => {
    return recentlyViewed
      .filter(id => id !== currentProductId) // Don't show current product
      .map(id => products.find(product => product._id === id))
      .filter(Boolean) // Remove any undefined products
      .slice(0, 4); // Show max 4 products
  };

  const recentProducts = getRecentProducts();

  if (recentProducts.length === 0) {
    return null;
  }

  return (
    <div className="my-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-t pt-8"
      >
        <div className="flex items-center gap-2 mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-gray-600" />
            <h2 className="text-2xl font-bold text-gray-900">Recently Viewed</h2>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Eye className="w-4 h-4" />
            <span>{recentlyViewed.length} items viewed</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {recentProducts.map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProductItem
                id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                discount={product.discount}
                sizeQuantities={product.sizeQuantities}
                description={product.description}
              />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <button 
            onClick={() => {
              localStorage.removeItem('recentlyViewed');
              setRecentlyViewed([]);
            }}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Clear viewing history
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default RecentlyViewed;
